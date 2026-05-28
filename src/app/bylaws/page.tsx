import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Bylaws',
  description: 'Best Democracy bylaws and organizational governance information.',
};

export default function BylawsPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="Bylaws"
        subtitle="Best Democracy organizational governance and bylaws."
      />

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Best Democracy Bylaws</h2>
        <p>
          This page is reserved for Best Democracy bylaws and governance materials.
        </p>
        <p>
          If you need a copy of the bylaws or want to ask about organizational governance, contact Best Democracy
          directly.
        </p>

        <div className="not-prose mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Contact Best Democracy</Link>
          <Link href="/about" className="btn-secondary">About Jesse Kumin</Link>
        </div>
      </article>
    </>
  );
}
