import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { BarChart3, CheckCircle, Globe2, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Democracy Index',
  description: 'A framework for measuring democracy by representation, participation, accountability, and dispersed power.',
};

const criteria = [
  {
    title: 'Representation',
    text: 'Does the elected body accurately reflect the electorate, including minority viewpoints and demographic groups?',
    icon: UsersIcon,
  },
  {
    title: 'Participation',
    text: 'Can people vote, run, organize, initiate policy, and participate without unnecessary barriers?',
    icon: CheckCircle,
  },
  {
    title: 'Accountability',
    text: 'Can voters remove officials, audit government, and hold institutions responsible when they fail?',
    icon: Scale,
  },
  {
    title: 'Dispersed Power',
    text: 'Does the system prevent one faction, party, donor class, or institution from controlling all decision making?',
    icon: Globe2,
  },
];

const measurements = [
  'Proportionality of election outcomes',
  'Percentage of wasted votes',
  'Number of parties or factions represented',
  'Ballot access for candidates and parties',
  'Voter participation and off-year election effects',
  'Availability of direct democracy and ballot initiatives',
  'Campaign finance transparency',
  'Independent ethics and good-governance oversight',
];

function UsersIcon(props: React.ComponentProps<typeof Globe2>) {
  return <BarChart3 {...props} />;
}

export default function BestDemocracyIndexPage() {
  return (
    <>
      <PageHero
        tag="Resources"
        title="Best Democracy Index"
        subtitle="A democracy should be measured by how well it represents people, disperses power, protects participation, and creates accountability."
      />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Framework</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-bd-navy md:text-4xl">
            Election systems should be evaluated by outcomes.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bd-slate">
            The Best Democracy Index is a way to compare governments by the quality of representation they produce,
            not by whether they preserve inherited rules. Systems that waste votes, exclude minorities, suppress
            participation, and concentrate power should score poorly.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {criteria.map(({ title, text, icon: Icon }) => (
              <div key={title} className="card bg-white p-6">
                <Icon className="text-bd-cobalt" size={28} aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold text-bd-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bd-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>What the Index Measures</h2>
        <p>
          A strong democracy includes nearly everyone in representation and makes it possible for voters to change
          policy when elected officials fail. The index should identify election systems that create predetermined
          outcomes, one-party rule, low participation, or unaccountable institutions.
        </p>

        <ul>
          {measurements.map(item => <li key={item}>{item}</li>)}
        </ul>

        <h2>Why It Matters</h2>
        <p>
          The United States often treats old election rules as normal simply because they are familiar. But familiar
          systems can still be badly designed. At-Large Plurality, Single Member Districts, the Electoral College,
          and the Senate all distort representation in different ways.
        </p>
        <p>
          Measuring democratic quality makes those distortions visible. Once the defects are visible, local
          communities can choose proven remedies like Single Transferable Vote, Hybrid Proportional Representation,
          Home Rule, and Direct Democracy.
        </p>

        <blockquote>
          If an election system consistently excludes large groups of voters from representation, the system is the
          problem.
        </blockquote>

        <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/identifying-issues" className="btn-primary">Identifying Election Issues</Link>
          <Link href="/hybrid-proportional-representation" className="btn-secondary">Hybrid Pro Rep</Link>
        </div>
      </article>
    </>
  );
}
