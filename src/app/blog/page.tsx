// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { formatDate, truncate } from '@/lib/utils';
import { PageHero } from '@/components/sections/PageHero';
import { MessageSquare, Plus, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Discussion Forum',
  description: 'Join the Best Democracy discussion forum — share ideas, ask questions, and connect with election reform advocates.',
};

export const dynamic = 'force-dynamic';

async function getPosts() {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        author:   { select: { name: true } },
        _count:   { select: { comments: true } },
      },
    });
  } catch {
    return [];
  }
}

const CATEGORIES = ['All', 'General', 'Colorado', 'Election Reform', 'Home Rule', 'Pro Rep', 'Events', 'News'];

export default async function BlogPage() {
  const session = await auth();
  const posts   = await getPosts();

  return (
    <>
      <PageHero
        tag="Community"
        title="Discussion Forum"
        subtitle="Connect with Best Democracy members. Share ideas, ask questions, and organize for election reform."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Action bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={cat === 'All'
                  ? 'btn-primary py-1.5 px-4 text-sm'
                  : 'border border-gray-300 text-bd-slate hover:border-bd-cobalt hover:text-bd-cobalt px-4 py-1.5 rounded-sm text-sm transition-colors'}
              >
                {cat}
              </button>
            ))}
          </div>
          {session ? (
            <Link href="/blog/new" className="btn-primary whitespace-nowrap">
              <Plus size={16} aria-hidden /> New Post
            </Link>
          ) : (
            <Link href="/auth/login?callbackUrl=/blog/new" className="btn-secondary whitespace-nowrap">
              <Plus size={16} aria-hidden /> Post (Login Required)
            </Link>
          )}
        </div>

        {/* Post list */}
        {posts.length === 0 ? (
          <div className="text-center py-20 text-bd-slate">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl font-display font-bold mb-2">No posts yet</p>
            <p className="mb-6">Be the first to start a discussion!</p>
            {session
              ? <Link href="/blog/new" className="btn-primary">Start a Discussion</Link>
              : <Link href="/auth/register" className="btn-primary">Join to Post</Link>
            }
          </div>
        ) : (
          <div className="space-y-4" role="feed" aria-label="Discussion posts">
            {posts.map(post => (
              <article
                key={post.id}
                className="card bg-white p-6 flex flex-col sm:flex-row justify-between gap-4"
                aria-labelledby={`post-title-${post.id}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`tag text-xs ${post.type === 'BLOG' ? 'bg-bd-cobalt' : post.type === 'NEWS' ? 'bg-bd-green' : 'bg-bd-navy'}`}>
                      {post.type === 'BLOG' ? 'Article' : post.type === 'NEWS' ? 'News' : 'Discussion'}
                    </span>
                    {post.category && (
                      <span className="text-xs text-bd-muted font-mono">{post.category}</span>
                    )}
                  </div>
                  <h2 id={`post-title-${post.id}`} className="font-display text-lg font-bold text-bd-navy mb-1 hover:text-bd-cobalt">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-bd-slate text-sm leading-relaxed">{truncate(post.excerpt, 160)}</p>
                  )}
                  <div className="flex items-center gap-4 mt-3 text-xs text-bd-muted">
                    <span className="flex items-center gap-1">
                      <User size={12} aria-hidden /> {post.author.name ?? 'Anonymous'}
                    </span>
                    <time dateTime={post.createdAt.toISOString()} className="flex items-center gap-1">
                      <Clock size={12} aria-hidden /> {formatDate(post.createdAt)}
                    </time>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={12} aria-hidden /> {post._count.comments} comment{post._count.comments !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!session && posts.length > 0 && (
          <div className="mt-12 bg-bd-navy text-white p-8 rounded-sm text-center">
            <h3 className="font-display text-2xl font-bold mb-3">Join the Conversation</h3>
            <p className="text-gray-300 mb-6">Register for a free account to post discussions, comment, and connect with democracy advocates.</p>
            <Link href="/auth/register" className="btn-gold">Join Best Democracy</Link>
          </div>
        )}
      </div>
    </>
  );
}
