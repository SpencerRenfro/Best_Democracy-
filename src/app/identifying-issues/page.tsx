// src/app/identifying-issues/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Identifying Election Issues',
  description: 'How predetermined election outcomes are designed — the 12 methods the Cartel uses to control elections and obstruct democracy.',
};

const issues = [
  { n: 1,  title: 'Voter Suppression',          desc: 'Voter ID requirements, purges, off-year elections, restrictive poll access, gerrymandered districts — predetermining outcomes by preselecting the voter pool.' },
  { n: 2,  title: 'Candidate Suppression',       desc: 'High ballot-access requirements, financial hurdles, caucuses and primaries that eliminate most candidates. Matt Jones won a nomination with 0.17% of 1% of active voters.' },
  { n: 3,  title: 'Exclude All Minority Votes',  desc: 'Single Member Districts and At-Large block voting produce winner-take-all results that exclude large voter blocks. Millions live under laws created by governments they never elected.' },
  { n: 4,  title: 'Manipulate Vote Counting',    desc: 'First Past the Post fails to match voter intent with outcomes. The Spoiler Effect enables minority governments. The Electoral College skews results to rural conservative states.' },
  { n: 5,  title: 'Concentrate Power',           desc: 'Legislative bodies in the US are small compared to proportional-representation countries. Individual offices like Senate Majority Leader have outsized leverage.' },
  { n: 6,  title: 'Property Rights Over People', desc: 'Slavers\' property rights of owning slaves superseded human rights. Today: predatory corporate property rights to pollute, frack near schools, supersede health and safety.' },
  { n: 7,  title: 'Obstruct Change',             desc: 'Article V of the Constitution, Dillon\'s Rule, and a web of state preemption laws make reform nearly impossible. 700+ attempts to abolish the Electoral College have all failed.' },
  { n: 8,  title: 'Control Information',         desc: 'Concentrated media ownership, fake news channels, disabled net neutrality, limited debate access controlled by the duopoly, social media manipulation.' },
  { n: 9,  title: 'Pack the Courts',             desc: 'Pack the Supreme Court and circuit courts with reactionaries producing biased decisions: Dred Scott, Plessy v. Ferguson, Citizens United, Buckley v. Valeo.' },
  { n: 10, title: 'Manage Campaign Finance',     desc: 'Equate money with free speech. Opaque dark money donors. Politicians become beholden to large donors and write tax law favoring wealthy elites.' },
  { n: 11, title: 'Negate Direct Democracy',     desc: 'Proposition 71, financed by the oil and gas industry, made citizen initiatives much more difficult and expensive — putting them out of reach of grassroots organizations.' },
  { n: 12, title: 'Voting Integrity Attacks',    desc: 'Voting machines with no paper trail. Hacking into election registration databases. The cartel has no interest in transparent, verifiable elections.' },
];

export default function IdentifyingIssuesPage() {
  return (
    <>
      <PageHero
        tag="Observation"
        title="How to Design Predetermined Election Outcomes"
        subtitle="A very small number of people in two organizations control a massive industry called Government. They maintain a multi-layered web of impediments to change."
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <blockquote className="pullquote">
          "If elections were open to all classes of people, the property of landed proprietors would be insecure. Our government ought to be so constituted as to protect the minority of the opulent against the majority."
          <footer className="not-italic text-sm font-medium text-bd-navy mt-3">— James Madison, 26 June 1787</footer>
        </blockquote>

        <p className="text-bd-slate text-lg leading-relaxed mb-12">
          Strategic decisions were made at the US Constitutional Convention in 1787 by a group of wealthy white men,
          most of whom owned slaves, without full public consideration of the alternatives. Nearly every electoral
          system in the US designed since has distorted representation, concentrated power, and excluded people.
        </p>

        <h2 className="section-title mb-8">The 12 Methods of Electoral Control</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map(({ n, title, desc }) => (
            <div key={n} className="card bg-white p-6 flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-bd-navy text-bd-gold font-display font-black text-lg flex items-center justify-center" aria-hidden>
                {n}
              </span>
              <div>
                <h3 className="font-display font-bold text-bd-navy mb-2">{title}</h3>
                <p className="text-bd-slate text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-bd-navy text-white p-10 rounded-sm text-center">
          <h2 className="font-display text-3xl font-bold mb-4 text-bd-gold">The Cure</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Proportional Representation in Multi Member Districts disperses concentrated power and includes nearly everyone.
            When elected officials ignore problems, Direct Democracy offers citizens the opportunity to address issues directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hybrid-proportional-representation" className="btn-gold">Hybrid Pro Rep</Link>
            <Link href="/direct-democracy" className="btn-secondary border-white text-white hover:bg-white hover:text-bd-navy">Direct Democracy</Link>
            <Link href="/home-rule" className="btn-secondary border-white text-white hover:bg-white hover:text-bd-navy">Home Rule</Link>
          </div>
        </div>
      </section>
    </>
  );
}
