'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { searchIndex } from '@/lib/searchIndex';
import { cn } from '@/lib/utils';

export function SiteSearch({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 6);

    const terms = q.split(/\s+/);
    return searchIndex
      .map(item => {
        const haystack = `${item.title} ${item.section} ${item.description} ${item.keywords}`.toLowerCase();
        const score = terms.reduce((total, term) => {
          if (item.title.toLowerCase().includes(term)) return total + 4;
          if (item.section.toLowerCase().includes(term)) return total + 2;
          if (item.keywords.toLowerCase().includes(term)) return total + 3;
          if (haystack.includes(term)) return total + 1;
          return total;
        }, 0);
        return { item, score };
      })
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map(result => result.item);
  }, [query]);

  function openSearch() {
    setOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeSearch() {
    setOpen(false);
    setQuery('');
  }

  function handleNavigate() {
    closeSearch();
    onNavigate?.();
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={openSearch}
        className="flex items-center gap-2 nav-link px-3 py-2"
        aria-label="Search site content"
        aria-expanded={open}
      >
        <Search size={16} aria-hidden />
        <span className="sr-only">Search</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-bd-navy/20"
            aria-label="Close search"
            onClick={closeSearch}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-[min(92vw,32rem)] border border-gray-200 bg-white text-bd-navy shadow-xl">
            <div className="flex items-center gap-2 border-b border-gray-200 p-3">
              <Search size={18} className="text-bd-muted" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Escape') closeSearch();
                }}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-bd-muted"
                placeholder="Search pages, topics, and remedies"
                aria-label="Search pages, topics, and remedies"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="p-1 text-bd-muted transition-colors hover:text-bd-navy"
                aria-label="Close search"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <div className="max-h-[24rem] overflow-y-auto p-2">
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map(result => (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={handleNavigate}
                      className="block rounded-sm p-3 transition-colors hover:bg-bd-cream"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-display text-base font-bold text-bd-navy">{result.title}</p>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bd-gold">
                          {result.section}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-bd-slate">{result.description}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-bd-slate">
                  No pages found for "{query}".
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function MobileSiteSearch({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className={cn('border-b border-white/10 pb-4')}>
      <SiteSearch onNavigate={onNavigate} />
    </div>
  );
}
