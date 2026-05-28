// src/app/auth/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserPlus, Eye, EyeOff, Check } from 'lucide-react';

const benefits = [
  'Participate in our members\' discussion forum',
  'RSVP to local and virtual events',
  'Receive our election reform newsletter',
  'Connect with democracy advocates across Colorado',
];

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', location: '' });
  const [showPass, setShowPass]     = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function setField(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setFieldErrors({});

    // Client-side validation
    const errs: Record<string, string> = {};
    if (!form.name.trim())                    errs.name     = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email))    errs.email    = 'Valid email is required';
    if (form.password.length < 8)            errs.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirm)      errs.confirm  = 'Passwords do not match';
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password, location: form.location }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Registration failed. Please try again.');
      } else {
        router.push('/auth/login?registered=1');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-bd-cream flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-start">
        {/* Benefits panel */}
        <div className="hidden lg:block">
          <h1 className="font-display text-4xl font-black text-bd-navy mb-4">Join the Movement</h1>
          <div className="w-16 h-1 bg-bd-gold mb-6" />
          <p className="text-bd-slate text-lg mb-8 leading-relaxed">
            Best Democracy advocates for Proportional Representation and fair elections across Colorado
            and the United States. Your voice matters.
          </p>
          <ul className="space-y-4">
            {benefits.map(b => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-bd-green flex items-center justify-center">
                  <Check size={12} className="text-white" aria-hidden />
                </span>
                <span className="text-bd-slate">{b}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 border-l-4 border-bd-gold pl-6 italic text-bd-slate">
            "Please check the Remedies page to see what you can do. The first step is education."
            <br/><span className="not-italic font-medium text-bd-navy">— Jesse Kumin, Best Democracy</span>
          </blockquote>
        </div>

        {/* Form */}
        <div>
          <div className="lg:hidden text-center mb-8">
            <h1 className="font-display text-3xl font-black text-bd-navy">Join Best Democracy</h1>
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-sm p-8">
            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 text-bd-red rounded-sm px-4 py-3 mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="label">Full Name <span aria-label="required">*</span></label>
                <input id="name" type="text" required autoComplete="name" value={form.name} onChange={setField('name')} className="input" placeholder="Jane Smith" />
                {fieldErrors.name && <p className="error-msg" role="alert">{fieldErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="reg-email" className="label">Email Address <span aria-label="required">*</span></label>
                <input id="reg-email" type="email" required autoComplete="email" value={form.email} onChange={setField('email')} className="input" placeholder="you@example.com" />
                {fieldErrors.email && <p className="error-msg" role="alert">{fieldErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="location" className="label">City / County (optional)</label>
                <input id="location" type="text" autoComplete="address-level2" value={form.location} onChange={setField('location')} className="input" placeholder="Boulder, CO" />
              </div>

              <div>
                <label htmlFor="reg-password" className="label">Password <span aria-label="required">*</span></label>
                <div className="relative">
                  <input
                    id="reg-password"
                    type={showPass ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    value={form.password}
                    onChange={setField('password')}
                    className="input pr-12"
                    placeholder="Minimum 8 characters"
                    aria-describedby="password-hint"
                  />
                  <button type="button" onClick={() => setShowPass(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-bd-muted hover:text-bd-navy" aria-label={showPass ? 'Hide password' : 'Show password'}>
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p id="password-hint" className="text-xs text-bd-muted mt-1">At least 8 characters</p>
                {fieldErrors.password && <p className="error-msg" role="alert">{fieldErrors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirm" className="label">Confirm Password <span aria-label="required">*</span></label>
                <input id="confirm" type={showPass ? 'text' : 'password'} required autoComplete="new-password" value={form.confirm} onChange={setField('confirm')} className="input" placeholder="Repeat password" />
                {fieldErrors.confirm && <p className="error-msg" role="alert">{fieldErrors.confirm}</p>}
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base" aria-busy={loading}>
                <UserPlus size={18} aria-hidden />
                {loading ? 'Creating account…' : 'Create Account'}
              </button>

              <p className="text-xs text-bd-muted text-center">
                By registering you agree to our{' '}
                <Link href="/privacy" className="text-bd-cobalt hover:underline">Privacy Policy</Link>.
                We will never sell your data.
              </p>
            </form>

            <p className="text-center text-sm text-bd-slate mt-6">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-bd-cobalt font-medium hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
