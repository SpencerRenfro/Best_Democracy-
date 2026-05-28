// src/app/auth/login/page.tsx
'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LogIn, Eye, EyeOff } from 'lucide-react';

function LoginForm() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl  = searchParams.get('callbackUrl') ?? '/';
  const errorParam   = searchParams.get('error');

  const [email, setEmail]   = useState('');
  const [pass, setPass]     = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(errorParam ? 'Invalid credentials. Please try again.' : '');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await signIn('credentials', {
      email,
      password: pass,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError('Invalid email or password.');
    } else {
      router.push(callbackUrl);
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-bd-cream flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-black text-bd-navy mb-2">Welcome Back</h1>
          <p className="text-bd-slate">Log in to your Best Democracy account</p>
        </div>

        <div className="bg-white shadow-sm border border-gray-200 rounded-sm p-8">
          {error && (
            <div role="alert" className="bg-red-50 border border-red-200 text-bd-red rounded-sm px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="email" className="label">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="label mb-0">Password</label>
                <Link href="/auth/forgot-password" className="text-sm text-bd-cobalt hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  className="input pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-bd-muted hover:text-bd-navy"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center text-base"
              aria-busy={loading}
            >
              <LogIn size={18} aria-hidden />
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-bd-slate mt-6">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-bd-cobalt font-medium hover:underline">
              Join Best Democracy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
