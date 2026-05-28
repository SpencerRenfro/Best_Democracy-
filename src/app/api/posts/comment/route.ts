// src/app/api/posts/comment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const schema = z.object({
  postId:  z.string().cuid(),
  content: z.string().min(2).max(5000),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });

  const { postId, content } = parsed.data;

  const post = await prisma.post.findUnique({ where: { id: postId, published: true } });
  if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  await prisma.comment.create({
    data: {
      content,
      postId,
      authorId: session.user.id!,
      approved: false, // Moderation required
    },
  });

  return NextResponse.json({ success: true, message: 'Comment submitted for moderation' }, { status: 201 });
}
