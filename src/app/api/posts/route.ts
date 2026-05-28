// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils';
import { z } from 'zod';

const schema = z.object({
  title:    z.string().min(3).max(200),
  content:  z.string().min(10).max(50000),
  excerpt:  z.string().max(300).optional(),
  category: z.string().max(50).optional(),
  type:     z.enum(['BLOG', 'DISCUSSION', 'NEWS']).default('DISCUSSION'),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });

  const { title, content, excerpt, category, type } = parsed.data;

  // Only admins/mods can publish immediately; members need approval
  const role      = (session.user as any).role ?? 'MEMBER';
  const published = ['ADMIN', 'MODERATOR'].includes(role);

  let slug = slugify(title);

  // Ensure uniqueness
  const existing = await prisma.post.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now()}`;

  const post = await prisma.post.create({
    data: {
      title, content, excerpt, category, type, slug, published,
      authorId: session.user.id!,
    },
  });

  return NextResponse.json({ success: true, slug: post.slug, published }, { status: 201 });
}
