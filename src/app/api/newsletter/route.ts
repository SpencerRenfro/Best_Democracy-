// src/app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendNewsletterConfirmation } from '@/lib/email';
import { generateToken } from '@/lib/utils';

const schema = z.object({
  email:     z.string().email(),
  interests: z.array(z.string()).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });

    const { email, interests = ['newsletter'] } = parsed.data;
    const token = generateToken();

    await prisma.newsletterSubscription.upsert({
      where:  { email },
      update: { token, interests, confirmed: false },
      create: { email, token, interests, confirmed: false },
    });

    await sendNewsletterConfirmation(email, token);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

// GET — confirm subscription
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (!token) return NextResponse.redirect(new URL('/?nl=invalid', req.url));

  try {
    await prisma.newsletterSubscription.update({
      where: { token },
      data:  { confirmed: true, token: null },
    });
    return NextResponse.redirect(new URL('/?nl=confirmed', req.url));
  } catch {
    return NextResponse.redirect(new URL('/?nl=invalid', req.url));
  }
}
