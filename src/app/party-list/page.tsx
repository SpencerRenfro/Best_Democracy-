// src/app/party-list/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Party List Proportional Representation',
  description: 'Party List PR — used by 94 nations — produces fairer, more diverse, more representative governments than winner-take-all systems.',
};

const stats = [
  { label: 'Nations using PR', value: '94', note: 'plus 34 more with mixed systems' },
  { label: 'EU nations using PR', value: '3/4', note: 'three-quarters of EU member states' },
  { label: 'US safe House seats', value: '79%', note: 'considered uncompetitive in 2020' },
  { label: 'US women in Congress', value: '23%', note: 'US ranks 78th in the world' },
];

const countryExamples = [
  { country: 'Denmark',     threshold: '2%', parties: 10 },
  { country: 'Bolivia',     threshold: '3%', parties: 8  },
  { country: 'New Zealand', threshold: '5%', parties: 5  },
  { country: 'South Africa',threshold: 'None',parties: 14 },
  { country: 'Kazakhstan',  threshold: '7%', parties: 3  },
];

export default function PartyListPage() {
  return (
    <>
      <PageHero
        tag="Proportional Representation"
        title="Party List Proportional Representation"
        subtitle="A representative assembly should be in miniature an exact portrait of the people at large. It should think, feel, reason and act like them. — John Adams"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">

        {/* Stats strip */}
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {stats.map(s => (
            <div key={s.label} className="bg-bd-navy text-white p-5 rounded-sm text-center">
              <p className="font-display text-3xl font-black text-bd-gold">{s.value}</p>
              <p className="font-bold text-sm mt-1">{s.label}</p>
              <p className="text-bd-muted text-xs mt-1">{s.note}</p>
            </div>
          ))}
        </div>

        <h2>The Problem with Winner-Take-All</h2>
        <p>
          Under winner-take-all voting systems like those used in the United States, political minorities are
          excluded from representation. Only two parties are represented in the United States Congress. No
          candidate representing a third party has been elected to Congress since 1970. Out of 7,383 seats in
          state legislatures, none are held by candidates elected as members of the nation's third or
          fourth-largest political parties.
        </p>
        <p>
          Members of Congress who run for re-election rarely lose. In 2016, 97% of incumbent US Representatives
          were re-elected. This is not democracy — this is a cartel protecting its own power.
        </p>

        <h2>How Party List Systems Work</h2>
        <p>
          The basic idea behind the party list vote is that each voter supports a list of candidates representing
          their favorite political party. Each party is awarded seats in proportion to its share of the vote.
          Five percent of the vote equals five percent of the seats.
        </p>

        <h3>Closed Party Lists</h3>
        <p>
          In a closed party list system, the party chooses the order of candidates on their list through the
          party's own internal nominating process. The voter casts a simple vote for their favorite party.
        </p>

        <h3>Open Party Lists</h3>
        <p>
          Under an open party-list system, voters cast a vote for one or more individual candidates within a
          party list. The most popular candidates from each party are elected, but these votes also determine
          the total number of seats allotted to each party. This gives voters more direct influence over who
          represents them.
        </p>

        <h2>Thresholds and Pluralism</h2>
        <p>
          Many party list systems require a minimum percentage of the vote for a party to win seats. When this
          threshold is set low, almost all voters are able to elect representatives of their choice.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-bd-navy text-white">
                <th className="px-4 py-3 text-left font-mono text-xs">Country</th>
                <th className="px-4 py-3 text-left font-mono text-xs">Threshold</th>
                <th className="px-4 py-3 text-left font-mono text-xs">Parties in Parliament</th>
              </tr>
            </thead>
            <tbody>
              {countryExamples.map((c, i) => (
                <tr key={c.country} className={i % 2 === 0 ? 'bg-white' : 'bg-bd-cream'}>
                  <td className="px-4 py-3 font-medium">{c.country}</td>
                  <td className="px-4 py-3">{c.threshold}</td>
                  <td className="px-4 py-3 font-bold text-bd-green">{c.parties}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Benefits of Party List PR</h2>
        <p>
          Nations that use party list systems to elect their legislators generally have:
        </p>
        <ul>
          <li>Higher voter turnout</li>
          <li>Better representation of women and ethnic minorities in government</li>
          <li>More political parties in government — more voter choice</li>
          <li>Higher standards of living</li>
          <li>Stronger environmental protections</li>
        </ul>
        <p>
          As of 2013, 19 of the 20 nations with the most women in Parliament used party list systems. Today,
          women account for 53% of Bolivia's national parliament, 48% of Mexico's parliament, and 45% of South
          Africa's National Assembly — compared to 23% in the US.
        </p>

        <h2>Post-Apartheid South Africa</h2>
        <p>
          In 1994, Bishop Desmond Tutu said of PR: "The system of proportional representation ensures that
          virtually every constituency in the country will have a hearing in the national and provincial
          legislatures." In post-apartheid South Africa, more than 98% of voters are able to elect
          representatives of their choice.
        </p>

        <h2>Recommendation</h2>
        <p>
          Single Transferable Vote is appropriate for local, non-partisan elections like city councils or small
          boards like county commissions. For state legislatures and Congress, an open party list system with
          a minimal threshold — no higher than two or three percent — is preferred for winning representation.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/hybrid-proportional-representation" className="btn-primary">Hybrid Pro Rep — The Best System</Link>
          <Link href="/mixed-member-proportional" className="btn-secondary">Mixed Member Proportional</Link>
        </div>
      </article>
    </>
  );
}
