// src/app/blog/[slug]/CommentSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Send, User } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  author: { name: string | null };
}

interface Props {
  postId: string;
  comments: Comment[];
  session: any;
}

export function CommentSection({ postId, comments: initial, session }: Props) {
  const [comments, setComments] = useState(initial);
  const [content, setContent]   = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/posts/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, content }),
      });
      if (res.ok) {
        setContent('');
        setSuccess('Your comment has been submitted and is awaiting moderation.');
      } else {
        const data = await res.json();
        setError(data.error ?? 'Failed to submit comment.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  return (
    <section aria-labelledby="comments-heading" className="border-t border-gray-200 pt-10">
      <h2 id="comments-heading" className="font-display text-2xl font-bold text-bd-navy mb-6">
        Comments ({comments.length})
      </h2>

      {comments.length === 0 ? (
        <p className="text-bd-slate italic mb-8">No comments yet. Be the first to respond!</p>
      ) : (
        <div className="space-y-6 mb-10">
          {comments.map(c => (
            <div key={c.id} className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-bd-navy flex items-center justify-center">
                <User size={16} className="text-white" aria-hidden />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-medium text-bd-navy text-sm">{c.author.name ?? 'Anonymous'}</span>
                  <time dateTime={new Date(c.createdAt).toISOString()} className="text-xs text-bd-muted">
                    {formatDate(c.createdAt)}
                  </time>
                </div>
                <p className="text-bd-slate text-sm leading-relaxed whitespace-pre-wrap">{c.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {session ? (
        <form onSubmit={handleSubmit} aria-label="Add a comment">
          <h3 className="font-display text-lg font-bold text-bd-navy mb-3">Leave a Comment</h3>
          {error   && <p role="alert" className="text-bd-red text-sm mb-3">{error}</p>}
          {success && <p role="status" className="text-bd-green text-sm mb-3">{success}</p>}
          <label htmlFor="comment-content" className="sr-only">Your comment</label>
          <textarea
            id="comment-content"
            rows={5}
            required
            value={content}
            onChange={e => setContent(e.target.value)}
            className="input mb-3 resize-y"
            placeholder="Share your thoughts…"
            maxLength={5000}
          />
          <button type="submit" disabled={loading} className="btn-primary" aria-busy={loading}>
            <Send size={16} aria-hidden />
            {loading ? 'Submitting…' : 'Submit Comment'}
          </button>
          <p className="text-xs text-bd-muted mt-2">Comments are moderated before appearing.</p>
        </form>
      ) : (
        <div className="bg-bd-cream border border-gray-200 rounded-sm p-6 text-center">
          <p className="text-bd-slate mb-4">
            <Link href="/auth/login" className="text-bd-cobalt font-medium hover:underline">Log in</Link>
            {' '}or{' '}
            <Link href="/auth/register" className="text-bd-cobalt font-medium hover:underline">register</Link>
            {' '}to leave a comment.
          </p>
        </div>
      )}
    </section>
  );
}
