// src/components/layout/Footer.tsx
import Link from 'next/link';
import { NewsletterForm } from '@/components/sections/NewsletterForm';

const links = {
  Understanding: [
    { href: '/at-large-elections', label: 'At-Large Elections' },
    { href: '/electoral-college',  label: 'Electoral College' },
    { href: '/identifying-issues', label: 'Identifying Issues' },
    { href: '/court-cases',        label: 'Court Cases' },
  ],
  'Pro Rep': [
    { href: '/single-transferable-vote',           label: 'Single Transferable Vote' },
    { href: '/hybrid-proportional-representation', label: 'Hybrid Pro Rep' },
  ],
  Remedies: [
    { href: '/home-rule',                 label: 'Home Rule' },
    { href: '/abolish-senate',            label: 'Abolish the Senate' },
    { href: '/direct-democracy',          label: 'Direct Democracy' },
    { href: '/democratize-supreme-court', label: 'Supreme Court' },
    { href: '/best-democracy-index',      label: 'Best Democracy Index' },
  ],
  Community: [
    { href: '/events',          label: 'Events' },
    { href: '/blog',            label: 'Forum' },
    { href: '/about',           label: 'About' },
    { href: '/auth/register',   label: 'Join Us' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bd-navy text-bd-cream" role="contentinfo">
      {/* Newsletter stripe */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <NewsletterForm />
        </div>
      </div>

      {/* Link grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-display text-bd-gold text-sm font-bold uppercase tracking-widest mb-4">
              {section}
            </h3>
            <ul className="space-y-2">
              {items.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-bd-muted hover:text-bd-cream text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-bd-muted">
          <p>© {new Date().getFullYear()} Best Democracy · Jesse Kumin · Boulder, CO</p>
          <div className="flex gap-6">
            <Link href="/privacy"      className="hover:text-bd-cream transition-colors">Privacy Policy</Link>
            <Link href="/accessibility"className="hover:text-bd-cream transition-colors">Accessibility</Link>
            <Link href="/contact"      className="hover:text-bd-cream transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
