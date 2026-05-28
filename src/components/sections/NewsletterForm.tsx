// src/components/sections/NewsletterForm.tsx
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Check your email to confirm your subscription!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-bd-gold">Stay Informed</h2>
        <p className="text-bd-muted mt-2 max-w-md">
          Get updates on election reform, local events, and Proportional Representation news —
          no spam, no selling your data, ever.
        </p>
      </div>
      {status === 'success' ? (
        <p className="text-bd-green text-lg font-medium bg-white/5 rounded px-6 py-4">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="input bg-white/10 border-white/20 text-bd-cream placeholder-bd-muted min-w-[260px]"
            aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
          />
          <button type="submit" disabled={status === 'loading'} className="btn-gold whitespace-nowrap">
            <Mail size={16} aria-hidden />
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
          {status === 'error' && (
            <p id="newsletter-error" role="alert" className="text-red-400 text-sm">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
