// src/app/single-transferable-vote/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Single Transferable Vote',
  description: 'STV in Multi Member Districts — the most powerful tool for fair, inclusive representation.',
};

const features = [
  'Every demographic is represented',
  'Preserves voter intent',
  'Impossible to gerrymander',
  'Eliminates the Spoiler Effect',
  'Candidate-centric: easy ballot access, candidates run independently of slates and parties',
  'Eliminates the need for caucuses and primaries — saves taxpayer money',
  'Nearly every vote counts toward the final outcome. Very few wasted votes',
  'With multiple districts, guarantees geographic distribution while representing diversity',
  'Solves far more issues than Ranked Choice Voting (RCV) in Single Member Districts',
  'STV is appropriate for non-partisan offices such as County Coroner and Judges',
];

export default function STVPage() {
  return (
    <>
      <PageHero
        tag="Proportional Representation"
        title="Single Transferable Vote in Multi Member Districts"
        subtitle="In a democratic government, the right of decision belongs to the majority, but the right of representation belongs to all. — Ernest Naville"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">
        <h2>What is STV?</h2>
        <p>
          Election systems in the US have been conflated with Majority Rule. Representation should be broken out
          as a separate issue from majority decision making. In Single Transferable Vote (STV) systems, everyone
          gets a seat at the table when decisions are made.
        </p>
        <p>
          Minorities within any electorate — excluded by Single Member District systems like First Past the Post —
          are included in STV systems. Using STV, voters rank their choice of candidates on the ballot instead of
          voting for just one candidate. STV is the least party-centric form of Proportional Representation.
        </p>

        <h2>Features of STV</h2>
        <ul>
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <h2>Why Not Ranked Choice Voting (RCV)?</h2>
        <p>
          As promoted in the US, Ranked Choice Voting (RCV) is actually Instant Runoff Voting (IRV) in Single
          Member Districts. Without Multi Member Districts, IRV/RCV isn't proportional.
        </p>
        <p>
          The big problem is Single Member Districts, not just the Spoiler Effect. Any type of Single Member
          District excludes large blocks of voters from representation. STV solves more problems than RCV.
          STV transfers from both winning and losing candidates with very few wasted votes.
        </p>

        <h2>Scalable Formula for STV</h2>
        <p>STV can be applied and scaled to fit any city, county, or state:</p>
        <ul>
          <li>Multiply the current legislative body size by 2.33</li>
          <li>Round up or down to the next odd number</li>
          <li>Divide by 7 (seats per district) to determine number of districts</li>
          <li>Every 7-seat district represents every 14.3% demographic slice</li>
        </ul>

        <div className="not-prose bg-bd-navy text-white p-8 rounded-sm my-8">
          <h3 className="font-display text-xl font-bold text-bd-gold mb-4">Boulder Example</h3>
          <p className="text-gray-300 text-sm">
            Boulder's 9-member council × 2.33 = 21 seats in 3 districts of 7 members each.
            Every 4.76% demographic slice gets representation — similar to Germany and New Zealand.
          </p>
        </div>

        <h2>History of STV in the United States</h2>
        <p>
          Boulder, Colorado used STV from 1917–1947. Cambridge, Massachusetts has used STV continuously
          since the early 20th century and is currently the only US city using it. STV is used in Ireland,
          Australia, Malta, and many other countries.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/hybrid-proportional-representation" className="btn-primary">Hybrid Pro Rep System</Link>
          <Link href="/at-large-elections" className="btn-secondary">At-Large Elections Problem</Link>
        </div>
      </article>
    </>
  );
}
