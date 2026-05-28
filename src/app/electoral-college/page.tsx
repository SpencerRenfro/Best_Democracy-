import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowRight, Landmark, Scale, Vote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electoral College',
  description: 'The Electoral College is rooted in slavery, distorts presidential elections, wastes votes, and concentrates power in two parties and a few swing states.',
};

const mcGovernStats = [
  { value: '37.5%', label: 'of the popular vote', note: 'George McGovern in 1972' },
  { value: '3%', label: 'of Electoral College votes', note: 'a distorted national result' },
  { value: '700+', label: 'abolition attempts', note: 'efforts to end the Electoral College' },
];

const contrasts = [
  {
    title: 'Denmark',
    detail: '2% threshold for representation and 10 parties represented in the Folketing.',
  },
  {
    title: 'United States',
    detail: 'Ballot access barriers, two-party control, and presidential power concentrated in a few swing states.',
  },
];

export default function ElectoralCollegePage() {
  return (
    <>
      <PageHero
        tag="Understanding"
        title="The Electoral College: Rooted in Slavery"
        subtitle="The Electoral College was designed to distort presidential elections, exclude minority views from representation, waste votes, and skew power toward wealthy slavers in the South."
      />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">1972 Presidential Election</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-bd-navy md:text-4xl">
            One election made the distortion plain.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bd-slate">
            George McGovern won only one state, Massachusetts. With 37.5% of the vote, he received just 3% of the
            Electoral College votes. That election showed how the system was designed to distort outcomes, exclude
            minority views, and waste votes.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {mcGovernStats.map(({ value, label, note }) => (
              <div key={value} className="card p-6">
                <p className="font-display text-5xl font-black text-bd-cobalt">{value}</p>
                <p className="mt-2 font-bold text-bd-navy">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-bd-slate">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Designed to Skew Presidential Elections</h2>
        <p>
          The Electoral College was designed to skew presidential elections in favor of wealthy slavers in the
          South. In 1787, James Madison, a third-generation slaver, built multiple slaver advantages into the new
          Constitution. One of the most enduring was the Electoral College.
        </p>
        <p>
          As a direct result of that design, 10 of the first 12 Presidents owned slaves, and 4 of the first 5
          Presidents were Virginia slavers. There have been more than 700 attempts to abolish the Electoral College.
        </p>

        <div className="not-prose my-10 grid gap-4 sm:grid-cols-3">
          <div className="card p-6">
            <Landmark className="text-bd-cobalt" size={28} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">1787 Design</h3>
            <p className="mt-2 text-sm leading-relaxed text-bd-slate">
              Madison embedded slaver advantages into the constitutional election system.
            </p>
          </div>
          <div className="card p-6">
            <Scale className="text-bd-cobalt" size={28} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">False Majorities</h3>
            <p className="mt-2 text-sm leading-relaxed text-bd-slate">
              Presidents can win power despite losing the popular vote.
            </p>
          </div>
          <div className="card p-6">
            <Vote className="text-bd-cobalt" size={28} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">Wasted Votes</h3>
            <p className="mt-2 text-sm leading-relaxed text-bd-slate">
              Winner-take-all states exclude minority voters from meaningful representation.
            </p>
          </div>
        </div>

        <h2>False Majority Government</h2>
        <p>
          Two of our past four Presidents won their presidential elections despite losing the popular vote. The term
          for this is a false majority government. It means the person exercising national executive power did not
          win the most votes from the people.
        </p>

        <h2>Our Values Have Changed</h2>
        <p>
          The ruling class designed government for its era's form of predatory capitalism: self-enrichment through
          slave labor. That value system was realized through electoral systems and government structures designed
          to concentrate power and exclude most people from decision making.
        </p>
        <p>
          Proportional Representation takes the opposite approach. Group decision making is better than concentrated,
          authoritarian decision making. Proportional Representation disperses power and includes nearly everyone.
        </p>

        <h2>Two Choices Versus Pluralism</h2>
        <p>
          Denmark's threshold for representation is 2%. The United States often sets extreme barriers just to get
          on the ballot, including state caucus systems where the practical threshold can be far higher. Denmark has
          10 parties represented in its Folketing. The United States gives voters only two dominant choices.
        </p>
      </article>

      <section className="bg-bd-cream px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {contrasts.map(({ title, detail }) => (
              <div key={title} className="card bg-white p-8">
                <p className="font-display text-2xl font-bold text-bd-navy">{title}</p>
                <p className="mt-4 leading-relaxed text-bd-slate">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Do Nothing, or Dump the Slavers' Value System</h2>
        <p>
          We could continue using an archaic system from 1787 designed to skew elections, concentrate power, exclude
          people, and force severely constrained choices from two parties that do not represent most people in the
          country.
        </p>
        <p>
          Or we could decide to dump the slavers' value system and adopt Proportional Representation, starting in
          local Home Rule communities. The Electoral College limits choices, concentrates power in two parties, and
          further concentrates power in a small number of swing states.
        </p>

        <div className="not-prose mt-10 bg-bd-navy p-8 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-bd-gold">Action</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Support the National Popular Vote</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-300">
            Lobby your state representatives to support the National Popular Vote and help move presidential
            elections toward one person, one vote.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/home-rule" className="btn-gold">
              Start Locally <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/hybrid-proportional-representation" className="btn-secondary border-white text-white hover:bg-white hover:text-bd-navy">
              Proportional Representation
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
