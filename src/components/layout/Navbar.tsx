// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, ChevronDown, LogOut, User, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileSiteSearch, SiteSearch } from './SiteSearch';

const understandingLinks = [
  { href: '/at-large-elections',   label: 'At-Large Elections' },
  { href: '/electoral-college',    label: 'Electoral College' },
  { href: '/identifying-issues',   label: 'Identifying Issues' },
];

const prRepLinks = [
  { href: '/single-transferable-vote',           label: 'Single Transferable Vote' },
  { href: '/hybrid-proportional-representation', label: 'Hybrid PR' },
];

const remediesLinks = [
  { href: '/home-rule',                   label: 'Home Rule' },
  { href: '/abolish-senate',              label: 'Abolish the Senate' },
  { href: '/direct-democracy',            label: 'Direct Democracy' },
  { href: '/democratize-supreme-court',   label: 'Democratize the Supreme Court' },
];

const resourceLinks = [
  { href: '/court-cases', label: 'Court Cases' },
  { href: '/best-democracy-index', label: 'Best Democracy Index' },
];

const aboutLinks = [
  { href: '/about',   label: 'About Jesse Kumin' },
  { href: '/bylaws',  label: 'Bylaws' },
  { href: '/contact', label: 'Contact' },
];

const communityLinks = [
  { href: '/events', label: 'Events' },
  { href: '/blog',   label: 'Forum' },
];

const democracyLinks = [
  ...understandingLinks,
  ...prRepLinks,
];

export function Navbar() {
  const pathname  = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdown, setDropdown]         = useState<string | null>(null);

  const toggle = (key: string) => setDropdown(d => d === key ? null : key);

  return (
    <header className="bg-bd-navy text-bd-cream sticky top-0 z-50 shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-2 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-bd-gold tracking-widest hover:text-yellow-400 transition-colors whitespace-nowrap"
            aria-label="Best Democracy home"
          >
            <span className="2xl:hidden" aria-hidden>BD</span>
            <span className="hidden 2xl:inline">BEST DEMOCRACY</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-2" aria-label="Main navigation">
            <NavDropdown label="Democracy"      id="democracy"    items={democracyLinks}     open={dropdown === 'democracy'}    onToggle={() => toggle('democracy')} />
            <NavDropdown label="Remedies"       id="remedies"     items={remediesLinks}      open={dropdown === 'remedies'}     onToggle={() => toggle('remedies')} />
            <NavDropdown label="Resources"      id="resources"    items={resourceLinks}      open={dropdown === 'resources'}    onToggle={() => toggle('resources')} />
            <NavDropdown label="About"          id="about"        items={aboutLinks}         open={dropdown === 'about'}        onToggle={() => toggle('about')} />
            <NavDropdown label="Community"      id="community"    items={communityLinks}     open={dropdown === 'community'}    onToggle={() => toggle('community')} />
            <SiteSearch />
          </nav>

          {/* Auth / user */}
          <div className="hidden 2xl:flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => toggle('user')}
                  className="flex items-center gap-2 nav-link"
                  aria-expanded={dropdown === 'user'}
                  aria-haspopup="true"
                >
                  <User size={16} aria-hidden />
                  <span>{session.user?.name ?? 'Account'}</span>
                  <ChevronDown size={14} aria-hidden />
                </button>
                {dropdown === 'user' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-bd-navy rounded-sm shadow-xl border border-gray-200 py-1" role="menu">
                    {(session.user as any)?.role === 'ADMIN' && (
                      <Link href="/admin" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-bd-cream" role="menuitem">
                        <Shield size={14} /> Admin
                      </Link>
                    )}
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-bd-cream" role="menuitem">
                      <User size={14} /> Profile
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-bd-cream text-bd-red"
                      role="menuitem"
                    >
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login"    className="nav-link">Log In</Link>
                <Link href="/auth/register" className="btn-gold text-sm px-4 py-2">Join Us</Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden text-bd-cream hover:text-bd-gold"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="xl:hidden bg-bd-navy border-t border-white/10 py-4 px-6 space-y-2" role="navigation" aria-label="Mobile navigation">
          <MobileSiteSearch onNavigate={() => setMobileOpen(false)} />
          {[...understandingLinks, ...prRepLinks, ...remediesLinks, ...resourceLinks, ...aboutLinks, ...communityLinks].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn('block py-2 text-sm nav-link', pathname === l.href && 'text-bd-gold')}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            {session ? (
              <button onClick={() => signOut({ callbackUrl: '/' })} className="nav-link text-left">Sign Out</button>
            ) : (
              <>
                <Link href="/auth/login"    className="nav-link" onClick={() => setMobileOpen(false)}>Log In</Link>
                <Link href="/auth/register" className="btn-gold text-sm text-center" onClick={() => setMobileOpen(false)}>Join Us</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn('nav-link px-3 py-2', pathname === href && 'nav-link-active')}>
      {label}
    </Link>
  );
}

function NavDropdown({
  label, id, items, open, onToggle,
}: {
  label: string; id: string;
  items: { href: string; label: string }[];
  open: boolean; onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 nav-link px-3 py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label} <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white text-bd-navy rounded-sm shadow-xl border border-gray-200 py-1 z-50" role="menu">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-bd-cream hover:text-bd-cobalt transition-colors"
              role="menuitem"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
