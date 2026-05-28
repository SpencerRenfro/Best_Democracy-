// src/middleware.ts
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl, auth: session } = req as any;
  const isLoggedIn = !!session;

  // Protect admin routes
  if (nextUrl.pathname.startsWith('/admin')) {
    if (!isLoggedIn) return NextResponse.redirect(new URL('/auth/login?callbackUrl=/admin', nextUrl));
    if ((session as any)?.user?.role !== 'ADMIN') return NextResponse.redirect(new URL('/', nextUrl));
  }

  // Blog new post requires login
  if (nextUrl.pathname === '/blog/new' && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/login?callbackUrl=/blog/new', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*', '/blog/new', '/profile/:path*'],
};
