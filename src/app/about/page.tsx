// src/app/about/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'About Jesse Kumin & Best Democracy',
  description: 'The origin story of Best Democracy — how Jesse Kumin went from a zoning dispute to founding a proportional representation advocacy organization.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="Best Democracy Origins"
        subtitle="A personal journey from a Boulder zoning dispute to founding a movement for proportional representation across Colorado and the United States."
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">
        <p className="text-xl font-body text-bd-slate leading-relaxed">
          In the summer of 1972, Jesse Kumin could first vote. There were only two viable choices for President
          — George McGovern, who wanted to end the war in Vietnam, and Tricky Dick Nixon. Nixon's "Southern Strategy"
          was an overt appeal to racists. At that moment, Kumin became a lifelong Democrat. There were only two
          choices; it was an easy choice to make. But Nixon's massive Electoral College win of 96.8% of EC votes with
          just 60.7% of the popular vote seemed grossly distorted — and started Kumin down the road of understanding
          and remedying institutionalized distortions in elections.
        </p>

        <h2>The Boulder Zoning Dispute</h2>
        <p>
          When Kumin returned to Boulder in 1999 with his family, he attempted to build a conforming addition on
          a conforming lot. A series of obstructions thrown in his path by the Boulder Planning Department became
          insurmountable — as intended. This introduced him to how the city of Boulder operates.
        </p>
        <p>
          The family's 1954 ranch house had footprint rights secretly transferred to neighbors in a Planned Unit
          Development in 1989 — a transfer never recorded in the title papers. The city had done this across at
          least 3,000 lots throughout the city. They knew about the problem and wouldn't address it.
        </p>
        <p>
          One question led to another: How could Planning staff lie with impunity? Why were elected officials so
          unaccountable? Why did one group win nearly every seat on Council, every election? <strong>Kumin woke
          up in his 50s and realized he didn't live in a democracy — even at the local level.</strong>
        </p>

        <h2>The Discovery of Electoral Manipulation</h2>
        <p>
          Kumin started reading about the history of election manipulation. He traced predetermined elections back
          to the US Constitution, when the Founders instituted 94% voter suppression. At age 62 he discovered that
          73% of the signers of the Declaration of Independence were slavers, that James Madison was a third-generation
          slaver who owned about 120 slaves, that Washington inherited his first slaves when he was 11.
        </p>
        <p>
          The slavers embedded their value system into laws still with us today — expressed by the rights of oil and
          gas companies to drill fracking wells near children's schools. Property rights and greed are treated as
          more important than health, safety, and the health of the planet. Predatory Capitalists control government
          at all levels in nearly every state.
        </p>

        <h2>Formation of Best Democracy</h2>
        <p>
          On August 20, 2015, Drew Spencer from FairVote gave a presentation by Skype to a group of friends
          interested in election issues in Kumin's garden in North Boulder. Two weeks later, Kumin started Best
          Democracy on Facebook. September 6, 2015 is considered the organization's founding date.
        </p>
        <p>
          When Kumin attempted to introduce Proportional Representation into the Boulder County Democratic Party
          platform, he was met with polite deflection. Common Cause, FairVote, the League of Women Voters — none
          of the major voter reform organizations were promoting Proportional Representation in Boulder, Boulder
          County, or Colorado. This led to the formal formation of Best Democracy.
        </p>
        <blockquote>
          "Entrenched powers use their power to entrench themselves further." — Joseph Stiglitz
        </blockquote>

        <h2>This Website</h2>
        <p>
          This website was first published on March 24, 2018. It is Kumin's personal research, analysis, and
          proposed remedies for broken election systems. Each of us comes to the conclusion that our election
          systems are broken through different routes.
        </p>
        <p>
          If we kick the can down the road, it's someone else's problem. It took 133 years for women to win the
          right to vote. It took 93 years to abolish slavery after the British abolished it in 1772. It took
          another 100 years to abolish Jim Crow. Our systems are designed to obstruct change. It will take quite
          a while to bring real democracy to the United States.
        </p>

        <h2>Get Involved</h2>
        <p>
          The first step is education. Tell your friends and family about Best Democracy, Proportional
          Representation, and Single Transferable Vote. Let them know there's a superb alternative election system.
          Join the discussion. Pro Rep solves a lot of problems with our elections, destroys gerrymandering and other
          forms of vote manipulation, and gives everyone a seat at the table.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/auth/register" className="btn-primary">Join Best Democracy</Link>
          <Link href="/contact" className="btn-secondary">Contact Jesse</Link>
          <Link href="/hybrid-proportional-representation" className="btn-secondary">Learn About Pro Rep</Link>
        </div>

        <div className="not-prose mt-10 bg-bd-cream border border-gray-200 rounded-sm p-6">
          <h3 className="font-display text-xl font-bold text-bd-navy mb-2">Contact</h3>
          <p className="text-bd-slate text-sm">
            Email: <a href="mailto:jesse@bestdemocracy.org" className="text-bd-cobalt hover:underline">jesse@bestdemocracy.org</a>
            <br />4396 Snowberry Ct., Boulder, CO 80304
            <br /><a href="https://www.bestdemocracy.org" target="_blank" rel="noopener noreferrer" className="text-bd-cobalt hover:underline">bestdemocracy.org</a>
          </p>
        </div>
      </article>
    </>
  );
}
