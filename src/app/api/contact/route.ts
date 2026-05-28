// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendContactConfirmation } from '@/lib/email';

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });

  const { name, email, subject, message } = parsed.data;

  await prisma.contactNote.create({ data: { name, email, subject, message } });
  sendContactConfirmation(email, name, subject).catch(console.error);

  return NextResponse.json({ success: true });
}
