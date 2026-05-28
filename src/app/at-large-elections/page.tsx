import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowRight, Scale, Users, Vote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'At-Large Elections',
  description: 'At-Large Plurality elections waste votes, distort representation, and concentrate power. Boulder, Colorado shows how the system works.',
};

const boulderStats = [
  { value: '48.5%', label: 'of total votes', note: 'PLAN Boulder-backed candidates in 2017' },
  { value: '80%', label: 'of open seats', note: '4 of 5 city council seats won' },
  { value: '100%', label: 'of the power', note: 'control of the council majority' },
];

const courtCases = [
  {
    name: 'Dillard v. Crenshaw County',
    year: '1987',
    note: 'A federal district court found that hundreds of Alabama jurisdictions intentionally used at-large election methods to discriminate against Black voters.',
  },
  {
    name: 'Brown v. Board of Commissioners',
    year: '1989',
    note: 'At-Large Plurality was described as a tool of white supremacists in Chattanooga, Tennessee.',
  },
  {
    name: 'Charleston County v. United States',
    year: '2004',
    note: 'The US Supreme Court left standing findings against an at-large county council election system under the Voting Rights Act.',
  },
  {
    name: 'Jones County, North Carolina',
    year: '2017',
    note: 'Jones County was forced to abandon At-Large Plurality after a lawsuit over the same kind of discriminatory structure.',
  },
];

const controlMethods = [
  'Distort who votes through voter suppression, gerrymandered districts, and off-year or non-November elections.',
  'Present voters with a narrow, predetermined choice through candidate suppression and party suppression.',
  'Distort representation through one vote per district, Single Member Districts, At-Large Plurality block voting, and the US Senate.',
  'Distort results through vote counting systems such as First Past the Post and the Electoral College.',
];

const remedies = [
  'Implement Home Rule or charter authority in every local government.',
  'Require candidates and elected officials to acknowledge that election systems are broken and need remedies.',
  'Establish Good Governance Boards in county and municipal governments.',
  'Define the specific representation issues that need to be remedied.',
  'Implement proven proportional representation systems.',
];

export default function AtLargeElectionsPage() {
  return (
    <>
      <PageHero
        tag="Observation"
        title="What's the Matter with Boulder?"
        subtitle="At-Large Plurality, also called block voting, epitomizes corrupt election design: it wastes votes, over-rewards organized factions, and excludes large blocks of voters from representation."
      />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">2017 Boulder City Council Election</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-bd-navy md:text-4xl">
            A minority of votes produced a supermajority of seats.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {boulderStats.map(({ value, label, note }) => (
              <div key={value} className="card p-6">
                <p className="font-display text-5xl font-black text-bd-cobalt">{value}</p>
                <p className="mt-2 font-bold text-bd-navy">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-bd-slate">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-bd-slate">
            With 48.5% of the total votes, PLAN Boulder-backed candidates won 80% of the open city council seats,
            which gave them 100% of the power. The remaining 51.5% of votes were wasted votes.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>At-Large Plurality Is a Proven Method of Discrimination</h2>
        <p>
          At-Large Plurality elections are also known as block voting. Courts have repeatedly found that this
          system can violate the Voting Rights Act of 1965 because it lets a dominant group convert a narrow
          electoral advantage into nearly total control of a legislative body.
        </p>
        <p>
          White supremacists used At-Large Plurality to discriminate against Black voters, and the method became
          a favored replacement after more explicit forms of suppression were challenged. The same structure can
          marginalize any minority, not only a racial minority. It can exclude ideological, geographic, renter,
          student, working-class, or other demographic groups from having a seat at the table.
        </p>

        <div className="not-prose my-10 grid gap-4">
          {courtCases.map(({ name, year, note }) => (
            <div key={name} className="border-l-4 border-bd-gold bg-white p-5 shadow-sm">
              <p className="font-display text-lg font-bold text-bd-navy">{name}</p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-bd-muted">{year}</p>
              <p className="mt-2 text-sm leading-relaxed text-bd-slate">{note}</p>
            </div>
          ))}
        </div>

        <blockquote>
          These are people who for various philosophical reasons enjoy giving concentrated power to a select few...
          most commonly because they perceive this concentration of disproportional power as benefitting themselves
          or their allies.
          <footer>Kelsey Hannan</footer>
        </blockquote>

        <h2>Elites Use Electoral Systems to Marginalize Competition</h2>
        <p>
          Elected officials do not need to represent people who have been structurally excluded from representation.
          If excluded communities cannot affect who governs, their issues can be ignored. That is how election
          design becomes a tool of policy control.
        </p>
        <p>
          Boulder is useful as a case study. If fair representation can be brought to one Home Rule city, the same
          strategy can be adapted for thousands of other Home Rule cities and counties across the country.
        </p>

        <h2>Dillon's Rule and State Preemption</h2>
        <p>
          State preemption laws obstruct change and grassroots democracy at the local level. Under Dillon's Rule,
          if there is reasonable doubt whether a power has been conferred to a local government, then the power has
          not been conferred. In practice, states often hold back control over local elections, freezing local
          systems in rules designed for the past.
        </p>

        <h2>How One-Party Rule Is Implemented</h2>
        <p>
          Most decision making can be controlled at the point when executive and legislative members are chosen:
          elections. Conflated elections and decision making can be predetermined through four primary election
          design variables.
        </p>
        <ol>
          {controlMethods.map(method => <li key={method}>{method}</li>)}
        </ol>
        <p>
          These variables create multi-layered systems that control outcomes and obstruct change. The issues with
          US elections and government are systemic and persistent, so the remedy must also be systemic.
        </p>

        <blockquote>
          If you don't have a seat at the table, you're probably on the menu.
          <footer>Sen. Elizabeth Warren</footer>
        </blockquote>

        <h2>Boulder Starts With Voter Suppression</h2>
        <p>
          Boulder holds city council elections every two years in odd-numbered years, when voter participation is
          lowest. Most odd-year participation is roughly 35% to 40%. There is also a socio-economic component:
          renter and student participation is much lower than participation by older and wealthier homeowners.
        </p>
        <p>
          About 51% of Boulder residents rent, and about 32% are students at the University of Colorado. Very few
          renters vote in off-year elections. Compounded by At-Large Plurality, renters and students have been
          consistently left without meaningful representation on Boulder City Council.
        </p>

        <h2>At-Large Plurality Compounds the Distortion</h2>
        <p>
          Boulder elects five council members every two years: four four-year terms and one two-year term. To
          maintain control, an organized faction only needs to maintain a 5-4 majority. That majority gives 100%
          control over council decisions, even when the winning faction receives less than a majority of votes.
        </p>
        <p>
          At-Large Plurality behaves like Single Member Districts by producing winner-take-all outcomes. More
          voter choice, normally a democratic good, can fracture opposition votes and create a Spoiler Effect. In
          2017, New Urbanist candidates received more votes than PLAN Boulder-backed candidates but won only 20%
          of the seats.
        </p>

        <h2>A Short History of Boulder City Council</h2>
        <p>
          Boulder City Council has not been expanded since 1917, when the city's population was about 10,000 and
          the council size was fixed at nine seats. Boulder used a rough-grain Single Transferable Vote system
          from 1917 to 1947, electing three seats every two years.
        </p>
        <p>
          Voters switched from STV to At-Large Plurality in 1947 during the Red Scare, when fear of left-wing
          candidates was used to justify a system that excludes minority voices. The question now is whether that
          exclusion still reflects our values.
        </p>
      </article>

      <section className="bg-bd-cream px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Remedies</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-bd-navy md:text-4xl">
                Proportional Representation through Direct Democracy
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-bd-slate">
                Non-representative and unaccountable elected officials will not remedy themselves. Home Rule cities
                and counties can change charters and ordinances by ballot initiative, making local reform the most
                practical path.
              </p>
            </div>
            <div className="grid gap-4">
              {remedies.map((remedy, index) => (
                <div key={remedy} className="card flex gap-4 p-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-bd-navy font-display text-lg font-black text-bd-gold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-bd-slate">{remedy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Boulder's Three Primary Representation Issues</h2>
        <ul>
          <li><strong>Electoral system:</strong> Replace At-Large Plurality with a proportional system.</li>
          <li><strong>Size and distribution of council:</strong> Expand the council and use districts to guarantee geographic diversity.</li>
          <li><strong>Council compensation:</strong> Pay a living wage so public service is available to every social class.</li>
        </ul>

        <h2>Why Not Ranked Choice Voting in Single Member Districts?</h2>
        <p>
          Ranked Choice Voting in Single Member Districts can help with the Spoiler Effect, and wards can improve
          geographic distribution. But neither produces proportional representation. Single Member Districts still
          ask one person to represent the full spectrum of views in a district and can waste nearly half the votes.
        </p>
        <p>
          Single Transferable Vote transfers from both winning and losing candidates and wastes very few votes.
          It solves more problems than single-winner Ranked Choice Voting.
        </p>

        <h2>The Remedy: Return to an Enhanced STV</h2>
        <p>
          Boulder can return to an enhanced version of STV, adding districting to guarantee geographic diversity.
          A 21-member council, arranged as three districts with seven members each, would create roughly 5% grain
          representation, comparable to New Zealand.
        </p>
        <p>
          At-Large Plurality systems are designed to deliver predetermined distorted results, concentrate power,
          reduce competition and voter choice, and exclude large blocks of voters from representation. Proportional
          representation disperses power and gives voters a real seat at the table.
        </p>

        <div className="not-prose mt-10 grid gap-4 sm:grid-cols-3">
          <Link href="/single-transferable-vote" className="card group p-6">
            <Vote className="text-bd-cobalt" size={26} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">Single Transferable Vote</h3>
            <p className="mt-2 text-sm text-bd-slate">A proven proportional system for local elections.</p>
            <ArrowRight className="mt-4 text-bd-gold transition-transform group-hover:translate-x-1" size={18} aria-hidden />
          </Link>
          <Link href="/home-rule" className="card group p-6">
            <Scale className="text-bd-cobalt" size={26} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">Home Rule</h3>
            <p className="mt-2 text-sm text-bd-slate">Local charter power makes reform possible.</p>
            <ArrowRight className="mt-4 text-bd-gold transition-transform group-hover:translate-x-1" size={18} aria-hidden />
          </Link>
          <Link href="/contact" className="card group p-6">
            <Users className="text-bd-cobalt" size={26} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-bold text-bd-navy">Take Action</h3>
            <p className="mt-2 text-sm text-bd-slate">Ask local officials to support fair elections.</p>
            <ArrowRight className="mt-4 text-bd-gold transition-transform group-hover:translate-x-1" size={18} aria-hidden />
          </Link>
        </div>
      </article>
    </>
  );
}
