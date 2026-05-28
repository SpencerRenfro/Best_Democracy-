// src/components/sections/PageHero.tsx
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  dark?: boolean;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, tag, dark = true, children }: PageHeroProps) {
  return (
    <section
      className={cn(
        'px-6 py-20 md:py-28',
        dark ? 'bg-bd-navy text-white' : 'bg-bd-cream text-bd-navy',
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="max-w-4xl mx-auto">
        {tag && (
          <p className="font-mono text-bd-gold text-xs tracking-[0.3em] uppercase mb-4">{tag}</p>
        )}
        <h1 id="page-hero-heading" className="font-display text-4xl md:text-6xl font-black leading-tight">
          {title}
        </h1>
        <div className="w-16 h-1 bg-bd-gold my-6" aria-hidden />
        {subtitle && (
          <p className={cn('text-lg md:text-xl leading-relaxed', dark ? 'text-gray-300' : 'text-bd-slate')}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
