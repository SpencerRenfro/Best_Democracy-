// src/app/abolish-senate/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Abolish the Senate',
  description: 'The US Senate is the most distorted, least representative deliberative body in the world. Learn why and what we can do.',
};

const distortions = [
  'Wyoming (578,759) has the same 2 Senators as California (39,512,223). One Californian has 1.46% of the Senate voting power of a Wyoming resident.',
  'Since a majority of Americans live in just nine states, they have 18 Senate votes while the minority holds 82 — a ratio of better than four to one.',
  '41 senators representing less than 11% of the population can prevent any bill from coming to a vote via filibuster.',
  '34 senators from states with just 5% of the population can veto any constitutional amendment.',
  'A single senator can stall a bill or executive appointment almost indefinitely with a "hold."',
  '31 cities with higher populations than Wyoming have zero US Senators. Washington D.C., with more people than Wyoming, has zero Senate representation.',
];

export default function AbolishSenatePage() {
  return (
    <>
      <PageHero
        tag="Remedies"
        title="Abolish the Most Distorted Legislative Body in the World"
        subtitle="The Senate was designed by slavers, to benefit slavers, to make the abolition of slavery impossible. Its distortions persist and worsen today."
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">
        <h2>Designed to Obstruct the People's House</h2>
        <p>
          James Madison was a third-generation slaver who owned 121 slaves. He designed the Senate to obstruct
          the People's House, concentrating power in an elite group of Predatory Capitalists enriching themselves
          through slavery. The process of election and distortions in representation freed them of accountability
          to common people. It worked — slavery was preserved for 93 years after it was abolished in England and
          Wales in 1772.
        </p>

        <h2>Current Distortions in Representation</h2>
        <ul>
          {distortions.map((d, i) => <li key={i}>{d}</li>)}
        </ul>

        <h2>Plan A: Abolish the Senate</h2>
        <p>The Senate is redundant of the House and unnecessary. The best remedy:</p>
        <ul>
          <li>Abolish the Senate</li>
          <li>Change Congress to a unicameral legislature</li>
          <li>Triple the number of House seats (frozen in size since 1929)</li>
          <li>Adopt Hybrid Proportional Representation (HPR) in multi-member districts extending over state lines</li>
        </ul>

        <h2>Plan B: Rescue the Senate</h2>
        <p>If abolition is too high a hurdle, reform it to introduce democracy, dispersed power, and accountability:</p>
        <ul>
          <li><strong>Proxy Voting:</strong> Each Senator votes the number of votes they received in their last election</li>
          <li><strong>Expand delegations:</strong> Increase every state's delegation to 7 members, all elected simultaneously using Single Transferable Vote</li>
          <li><strong>More frequent elections:</strong> Move to two-year cycles</li>
          <li><strong>Include Puerto Rico and Washington D.C.</strong></li>
        </ul>

        <h3>Benefits of Reform</h3>
        <ul>
          <li>Disperses power</li>
          <li>Makes every voter's vote equal</li>
          <li>Represents everyone</li>
          <li>Makes the Senate proportional</li>
          <li>Moves governance toward the center instead of bipolar shifts</li>
          <li>Remedies the slavers' bias favoring property over people</li>
        </ul>

        <h2>Plan C: Do Nothing</h2>
        <p>
          The "Sheeple Approach." Ignore the problem. Let it fester and get worse. Let a minority of senators
          control the flow of legislation. This approach keeps oligarchs in power, distorts representation more
          over time, and prevents addressing existential issues like climate change.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/single-transferable-vote" className="btn-primary">Single Transferable Vote</Link>
          <Link href="/hybrid-proportional-representation" className="btn-secondary">Hybrid Pro Rep</Link>
        </div>
      </article>
    </>
  );
}
