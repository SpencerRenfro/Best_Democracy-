// src/app/blog/new/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Send } from 'lucide-react';

const CATEGORIES = ['General', 'Colorado', 'Election Reform', 'Home Rule', 'Pro Rep', 'Events', 'News', 'Other'];

export default function NewPostPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ title: '', excerpt: '', content: '', category: 'General' });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  function setField(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));
  }

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center"><p>Loading…</p></div>;

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-bold text-bd-navy mb-4">Members Only</h1>
          <p className="text-bd-slate mb-6">You need to be logged in to post in the discussion forum.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login?callbackUrl=/blog/new" className="btn-primary">Log In</Link>
            <Link href="/auth/register" className="btn-secondary">Register</Link>
          </div>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError('Title and content are required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'DISCUSSION' }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push(`/blog/${data.slug}`);
      } else {
        setError(data.error ?? 'Failed to create post.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/blog" className="text-bd-cobalt hover:underline text-sm">← Back to Forum</Link>
        <h1 className="font-display text-4xl font-black text-bd-navy mt-4">Start a Discussion</h1>
        <p className="text-bd-slate mt-2">Share your thoughts on election reform, democracy, and proportional representation.</p>
      </div>

      {error && (
        <div role="alert" className="bg-red-50 border border-red-200 text-bd-red rounded-sm px-4 py-3 mb-6 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="post-title" className="label">Title <span aria-label="required">*</span></label>
          <input id="post-title" type="text" required value={form.title} onChange={setField('title')} className="input" placeholder="What would you like to discuss?" maxLength={200} />
        </div>

        <div>
          <label htmlFor="post-category" className="label">Category</label>
          <select id="post-category" value={form.category} onChange={setField('category')} className="input">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="post-excerpt" className="label">Brief Summary (optional)</label>
          <input id="post-excerpt" type="text" value={form.excerpt} onChange={setField('excerpt')} className="input" placeholder="One or two sentence summary…" maxLength={300} />
        </div>

        <div>
          <label htmlFor="post-content" className="label">Content <span aria-label="required">*</span></label>
          <textarea
            id="post-content"
            required
            rows={16}
            value={form.content}
            onChange={setField('content')}
            className="input resize-y font-mono text-sm"
            placeholder="Write your discussion post here. Markdown is supported."
          />
          <p className="text-xs text-bd-muted mt-1">Markdown supported: **bold**, *italic*, ## headings, - lists, [links](url)</p>
        </div>

        <div className="flex gap-4">
          <button type="submit" disabled={loading} className="btn-primary" aria-busy={loading}>
            <Send size={16} aria-hidden />
            {loading ? 'Publishing…' : 'Publish Post'}
          </button>
          <Link href="/blog" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
