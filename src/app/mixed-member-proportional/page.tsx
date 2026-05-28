// src/app/mixed-member-proportional/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Mixed Member Proportional Representation',
  description: 'MMP gives voters two votes — one for a party, one for a candidate — yielding the greatest diversity of voter choice and candidate accountability.',
};

const comparisons = [
  { label: 'US (FPTP)',    seats: 435, districts: 435, partiesRep: 2,   wasted: '48.7%', democracy: '#25' },
  { label: 'Germany (MMP)',seats: 709, districts: 299, partiesRep: 6,   wasted: '5%',    democracy: '#14' },
  { label: 'New Zealand',  seats: 120, districts: 72,  partiesRep: 5,   wasted: '5%',    democracy: '#4'  },
];

export default function MMPPage() {
  return (
    <>
      <PageHero
        tag="Proportional Representation"
        title="Mixed Member Proportional Representation"
        subtitle="A representative assembly should be in miniature an exact portrait of the people at large. It should think, feel, reason and act like them. — John Adams, 1776"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">
        <h2>How MMP Works</h2>
        <p>
          In an additional-member Mixed Member Proportional (MMP) system with an Open List, each elector casts
          two votes instead of one. On a double ballot, the elector chooses a party of choice and also their
          favorite candidate among those listed. Voters can mix their party and candidate choices.
        </p>
        <p>
          MMP offers the greatest diversity of voter choice and makes individual candidates within a party
          accountable. It also eliminates the choke holds party bosses can exert on candidates in "Closed List"
          systems. If an office holder doesn't like the direction of a party, that individual can more easily
          move to another party. New Zealand and Germany both use MMP.
        </p>

        <h2>Origin of MMP</h2>
        <p>
          MMP was invented by Austen Albu at a meeting on February 16, 1946. Albu was an engineer and active
          Labour Party member appointed by the British Labour government to head the "German Political Department"
          in the Political Division of the British Control Commission for Germany. He helped implement a fair
          electoral system in post-war Germany that has served the country well for over 75 years.
        </p>

        <h2>MMP vs. Other Systems</h2>
        <p>
          The downside of MMP as implemented in Germany and New Zealand is the use of First Past the Post in
          district elections — making those elections not proportional at the district level.
        </p>
        <p>
          Best Democracy proposes a Hybrid Mixed Member Proportional/Single Transferable Vote system that will
          offer the greatest candidate ballot access, greatest accuracy of voter intent, greatest voter choice and
          highest voter satisfaction. Hybrid Pro Rep is proportional at <em>both</em> the district and regional levels.
        </p>

        {/* Comparison table */}
        <div className="not-prose my-10 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <caption className="text-left font-display font-bold text-bd-navy mb-3 text-lg">
              System Comparison
            </caption>
            <thead>
              <tr className="bg-bd-navy text-white">
                {['Country/System','Total Seats','Districts','Parties Represented','Wasted Votes','EIU Democracy Rank'].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-mono text-xs tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisons.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-bd-cream'}>
                  <td className="px-4 py-3 font-medium text-bd-navy">{r.label}</td>
                  <td className="px-4 py-3">{r.seats}</td>
                  <td className="px-4 py-3">{r.districts}</td>
                  <td className="px-4 py-3 font-bold text-bd-green">{r.partiesRep}</td>
                  <td className={`px-4 py-3 font-bold ${r.wasted === '48.7%' ? 'text-bd-red' : 'text-bd-green'}`}>{r.wasted}</td>
                  <td className="px-4 py-3">{r.democracy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Key Benefits of MMP</h2>
        <ul>
          <li>Voters have two votes — one for party, one for candidate — maximum flexibility</li>
          <li>Parties become accountable to all coalition partners in real time, not every 4–6 years</li>
          <li>Mitigates societal polarization; moves the electorate toward the center</li>
          <li>Eliminates gerrymandering and the Spoiler Effect</li>
          <li>Much greater diversity of parties represented: 6–9 parties typically elected</li>
          <li>Produces fair and accurate election results reflecting actual voter preferences</li>
          <li>Higher voter turnout than First Past the Post systems</li>
        </ul>

        <h2>New Zealand: A Model</h2>
        <p>
          New Zealand adopted MMP in 1996 after years of frustration with First Past the Post. The country now
          consistently ranks among the top democracies in the world (EIU #4). Their parliament includes 5 parties,
          women hold 50% of seats, and voter satisfaction with election outcomes is dramatically higher than in
          FPTP systems.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/hybrid-proportional-representation" className="btn-primary">See Hybrid Pro Rep</Link>
          <Link href="/single-transferable-vote" className="btn-secondary">Single Transferable Vote</Link>
          <Link href="/party-list" className="btn-secondary">Party List Systems</Link>
        </div>
      </article>
    </>
  );
}
