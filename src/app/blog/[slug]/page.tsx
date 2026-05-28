// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isDatabaseConfigured, prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { formatDate } from '@/lib/utils';
import { CommentSection } from './CommentSection';
import { ArrowLeft, Clock, User, MessageSquare } from 'lucide-react';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isDatabaseConfigured()) return { title: 'Post' };

  try {
    const post = await prisma.post.findUnique({ where: { slug: params.slug, published: true } });
    if (!post) return { title: 'Post not found' };
    return { title: post.title, description: post.excerpt ?? undefined };
  } catch {
    return { title: 'Post' };
  }
}

export const dynamic = 'force-dynamic';

export default async function PostPage({ params }: Props) {
  const session = await auth();

  let post: any;
  try {
    if (!isDatabaseConfigured()) {
      post = null;
    } else {
      post = await prisma.post.findUnique({
        where: { slug: params.slug, published: true },
        include: {
          author:   { select: { name: true, location: true } },
          comments: {
            where: { approved: true },
            orderBy: { createdAt: 'asc' },
            include: { author: { select: { name: true } } },
          },
        },
      });
    }
  } catch {
    post = null;
  }

  if (!post) notFound();

  // Increment view count (fire and forget)
  prisma.post.update({ where: { id: post.id }, data: { viewCount: { increment: 1 } } }).catch(() => {});

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-bd-cobalt hover:underline text-sm">
          <ArrowLeft size={14} aria-hidden /> Back to Forum
        </Link>
      </nav>

      <article aria-labelledby="post-heading">
        {/* Header */}
        <header className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <span className={`tag ${post.type === 'BLOG' ? 'bg-bd-cobalt' : post.type === 'NEWS' ? 'bg-bd-green' : 'bg-bd-navy'}`}>
              {post.type === 'BLOG' ? 'Article' : post.type === 'NEWS' ? 'News' : 'Discussion'}
            </span>
            {post.category && <span className="text-sm text-bd-muted font-mono">{post.category}</span>}
          </div>

          <h1 id="post-heading" className="font-display text-4xl font-black text-bd-navy mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-bd-muted">
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden />
              <span className="text-bd-navy font-medium">{post.author.name ?? 'Anonymous'}</span>
              {post.author.location && <span className="text-bd-muted">· {post.author.location}</span>}
            </span>
            <time dateTime={post.createdAt.toISOString()} className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden /> {formatDate(post.createdAt)}
            </time>
            <span className="flex items-center gap-1.5">
              <MessageSquare size={14} aria-hidden /> {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="prose-bd mb-12 whitespace-pre-wrap">
          {post.content}
        </div>
      </article>

      {/* Comments */}
      <CommentSection
        postId={post.id}
        comments={post.comments}
        session={session}
      />
    </div>
  );
}
