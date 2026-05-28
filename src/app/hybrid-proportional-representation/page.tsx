// src/app/hybrid-proportional-representation/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hybrid Proportional Representation',
  description: 'Introducing the most advanced Proportional Representation system in the world — Hybrid Pro Rep by Jesse Kumin.',
};

const votingModes = [
  { label: 'Closed Party List',  desc: 'Use one Party vote only for a party. Simple, one-and-done.' },
  { label: 'Open Party List',    desc: 'Vote for a party AND reorder that party\'s candidate list by your own preference.' },
  { label: 'Single Transferable Vote', desc: 'Use only your Candidate vote in 7-member districts. Rank candidates independently.' },
  { label: 'Mixed Member Proportional', desc: 'Vote for a party AND rank candidates from different parties for different offices.' },
];

const goodSystemsPoints = [
  { met: true,  point: 'Proportional — seats match votes' },
  { met: true,  point: 'No safe seats / wasted votes minimized' },
  { met: true,  point: 'Candidate accountability' },
  { met: true,  point: 'Geographic representation' },
  { met: true,  point: 'Voter choice' },
  { met: true,  point: 'Stable government' },
  { met: true,  point: 'Accessible to minority parties' },
  { met: true,  point: 'Eliminates gerrymandering' },
  { met: true,  point: 'Retains voter intent' },
  { met: false, point: 'Simplicity (tradeoff for accuracy)' },
];

export default function HybridPRPage() {
  return (
    <>
      <PageHero
        tag="Proportional Representation"
        title="Hybrid Proportional Representation"
        subtitle="The most advanced Proportional Representation system in the world — combining the best features of MMP, STV, Open Party List, and Closed Party List."
      />

      <article className="max-w-5xl mx-auto px-6 py-16">
        <div className="prose-bd mb-12">
          <p>
            Whenever we look at maps of the political landscape in the United States, they are always depicted in
            red and blue, symbolizing the two-headed Cartel Party system. Two color maps are made possible by
            Single Member Districts. Hybrid Proportional Representation shatters this — like a William T. Wiley
            painting with dozens of colors, made possible by Multi Member Districts.
          </p>
          <p>
            Well-implemented Proportional Representation systems fairly and accurately represent 95–98% of the
            electorate. HPR cherry-picks the best features from existing Pro Rep systems in New Zealand, Sweden,
            Denmark, Australia, and Germany. <strong>Each voter has their choice of how they want to vote.</strong>
          </p>
        </div>

        {/* 4 voting modes */}
        <section aria-labelledby="voting-modes-heading" className="mb-16">
          <h2 id="voting-modes-heading" className="section-title mb-3">4 Ways to Vote</h2>
          <div className="gold-bar" />
          <p className="text-bd-slate mb-8">HPR gives voters two ranked votes — one for parties, one for candidates. Each voter decides how to use them:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {votingModes.map((m, i) => (
              <div key={i} className="card bg-white p-6 border-l-4 border-bd-gold">
                <h3 className="font-display font-bold text-bd-navy mb-2">{i + 1}. {m.label}</h3>
                <p className="text-bd-slate text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section aria-labelledby="features-heading" className="mb-16">
          <h2 id="features-heading" className="section-title mb-3">Key Features</h2>
          <div className="gold-bar" />
          <ul className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              'Enables the greatest voter choice of any Pro Rep system — eliminates the flaws of others',
              'Candidate-centric: easy ballot access, candidates run independently of slates',
              'Eliminates the need for caucuses and primaries — saves taxpayer money',
              'Nearly every vote counts toward the final outcome; very few wasted votes',
              'Proportional at BOTH the district and regional levels',
              'Guarantees geographic distribution across multiple districts',
              'With a 3% threshold, 97–99% of voters have their vote count toward their party',
              'Meets 9 of 10 criteria of the Make Votes Matter Good Systems Agreement',
              'Eliminates gerrymandering — district lines become irrelevant',
              'Mitigates polarization, moves governance toward the center',
            ].map(f => (
              <li key={f} className="flex items-start gap-3 text-sm text-bd-slate">
                <Check size={16} className="flex-shrink-0 text-bd-green mt-0.5" aria-hidden /> {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Good Systems Agreement */}
        <section aria-labelledby="gsa-heading" className="mb-16 bg-bd-cream p-8 rounded-sm">
          <h2 id="gsa-heading" className="font-display text-2xl font-bold text-bd-navy mb-6">
            Make Votes Matter "Good Systems Agreement" — 9 of 10 ✓
          </h2>
          <ul className="space-y-2">
            {goodSystemsPoints.map(p => (
              <li key={p.point} className="flex items-center gap-3 text-sm">
                {p.met
                  ? <Check size={16} className="text-bd-green flex-shrink-0" aria-label="Met" />
                  : <X size={16} className="text-bd-red flex-shrink-0" aria-label="Not met" />
                }
                <span className={p.met ? 'text-bd-navy' : 'text-bd-slate line-through'}>{p.point}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-bd-muted mt-4">
            The one exception — Simplicity — is a direct tradeoff for extraordinary accuracy. Vote counting is
            more complex, but results represent voter intent far better than any Majoritarian system.
          </p>
        </section>

        {/* How leveling seats work */}
        <section aria-labelledby="leveling-heading" className="prose-bd mb-16">
          <h2 id="leveling-heading">How Leveling Seats Ensure Accuracy</h2>
          <p>
            In MMP, a pool of "leveling seats" is not allocated in the first district-level allocation, but
            allocated at the regional level to fine-tune district results. If a party's candidates received 17%
            of district seats but 21% of party votes, that party receives an additional 4% of seats from the
            leveling pool.
          </p>
          <p>
            Leveling seats are filled from the best losers — runner-up candidates in district elections —
            using the Webster/Sainte-Laguë counting method. Vacancies can also be filled from this pool,
            eliminating costly special elections.
          </p>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/single-transferable-vote" className="btn-primary">STV — The Counting Method</Link>
          <Link href="/mixed-member-proportional" className="btn-secondary">Mixed Member Proportional</Link>
          <Link href="/party-list" className="btn-secondary">Party List Systems</Link>
        </div>
      </article>
    </>
  );
}
