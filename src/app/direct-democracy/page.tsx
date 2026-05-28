import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowRight, ExternalLink, FileText, MousePointerClick, Scale, ShieldCheck, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Direct Democracy',
  description: 'Direct Democracy and electronic ballot initiatives bring citizens into the policy process and create competition for legislators.',
};

const ballotAdvantages = [
  {
    title: 'People in the Driver Seat',
    text: 'Initiatives put people in the driver seat. More people vote in states with initiatives. In Switzerland, national initiatives since 1891 have helped create the highest newspaper readership in the world.',
    href: 'http://www.evanravitz.com/vote/fossedal/',
    linkLabel: 'Switzerland example',
  },
  {
    title: 'Competition for Legislators',
    text: 'Initiatives break the monopoly legislators have on changing policy and create direct competition for lawmakers.',
    href: 'https://www.ncsl.org/research/elections-and-campaigns/initiative-and-referendum-processes.aspx',
    linkLabel: 'NCSL initiative process',
  },
  {
    title: 'Counterweight to Big Money',
    text: 'Initiatives can counteract big dark money influence over representatives. People favor grassroots initiatives over big-money initiatives.',
    href: 'http://www.ppic.org/publication/interest-group-influence-in-the-california-initiative-process/',
    linkLabel: 'Grassroots initiatives research',
  },
  {
    title: 'Better Collective Decisions',
    text: 'Large, diverse groups of independent people make better decisions. The Wisdom of Crowds explains why.',
    href: 'https://www.nytimes.com/2004/05/22/books/review/the-wisdom-of-crowds-problem-solving-is-a-team-sport.html',
    linkLabel: 'The Wisdom of Crowds',
  },
];

const signerAdvantages = [
  'Digital petitions enable signing 24/7 from anywhere.',
  'Digital petitions enable reading the entire proposal online before signing, not just the title.',
  'Digital petitions enable signers to change their minds and unsign a petition.',
  'Digital petitions make it easy to determine if you have already signed a particular petition.',
];

const gathererAdvantages = [
  'It is much easier to gather signatures using social media, email, advertisements, and government websites.',
  'There is no possibility of physical harassment like Colorado Initiative 97 and Proposition 112 petitioners experienced.',
  'The need for paid petitioners can disappear, along with problems such as forgery, misrepresentation, stolen petitions, and petitions held hostage for money.',
  'Money now used for paid petitioners can instead help win elections or fund voter deliberation and information, as with Oregon Citizen Initiative Review.',
];

const governmentAdvantages = [
  'Identification can use the same or similar process now used for voter registration, address changes, or party changes.',
  'Online petitioning saves staff time and taxpayer money because workers do not need to manually check petitions and signatures.',
  'An easier and quicker process creates fewer scheduling and time-dependent problems.',
  'There should be fewer lawsuits regarding paid petitioners and harassers.',
];

const democracyAdvantages = [
  'An easier process levels the playing field for people without the huge funds needed to hire paid petitioners.',
  'An easier process creates a greater diversity of ideas on the ballot.',
  'An easier process makes it quicker to fix policy mistakes.',
  'At the state level, online petitioning can overcome Colorado Amendment 71 geographic distribution barriers and make initiatives more equitable.',
];

const securityPoints = [
  'Old paper petitions are public records and can become forgery models for new paper petitions.',
  'Temporary workers inspecting petitions and comparing signatures is not especially scientific or secure.',
  'Petitions are public records identifying signers by name. Votes are secret and anonymous, like online financial transactions.',
  'Petitioning can be added to existing Secretary of State voter registration websites and identification systems.',
  'Databases can be mirrored and synchronized daily on city or county websites.',
];

const resources = [
  { label: 'What I learned', href: 'http://spryeye.blogspot.com/2017/12/why-i-quest-for-direct-democracy-what-i.html' },
  { label: 'Join Best Democracy on Meetup', href: 'https://www.meetup.com/Best-Democracy-Proportional-Representation/' },
  { label: 'Best Democracy on Facebook', href: 'https://www.facebook.com/groups/bestdemocracy/' },
  { label: 'ACE Electoral Knowledge Network: Direct Democracy', href: 'http://aceproject.org/ace-en/focus/direct-democracy/recall' },
  { label: 'Strengthen Direct Democracy on Facebook', href: 'https://www.facebook.com/groups/309502612936293/' },
  { label: 'Official Obstruction of Boulder’s Voter-Approved Online Petitioning', href: 'https://docs.google.com/presentation/d/1Fa5lljd-R5yFs9lciXM9MnEdjeYgGw8wuUCzOhlTaCY/edit' },
  { label: 'Daily Camera Guest Editorial on Election Reform and Question 2G', href: 'http://www.dailycamera.com/letters/ci_32153284/boulder-campaign-finance-and-elections-working-group-vote' },
  { label: 'Evan Ravitz: Direct Democracy', href: 'http://evanravitz.com/' },
  { label: 'Direct Democracy', href: 'http://www.evanravitz.com/vote/' },
  { label: 'Denver eSign app', href: 'http://303software.com/eSign' },
  { label: 'GoVoteColorado.com', href: 'https://www.sos.state.co.us/voter/pages/pub/home.xhtml' },
  { label: 'Oregon Citizen Initiative Review', href: 'https://healthydemocracy.org/impact/' },
  { label: 'Colorado Initiative 97 petition harassment coverage', href: 'http://www.cpr.org/news/story/protest-actions-against-signature-efforts-another-front-in-colorado-s-oil-gas-ballot' },
  { label: 'Proposition 112', href: 'https://corising.org/' },
  { label: 'Best Democracy Endorses Boulder Ballot Measure 2G', href: 'http://www.dailycamera.com/letters/ci_32153284/boulder-campaign-finance-and-elections-working-group-vote' },
  { label: 'The Wisdom of Crowds', href: 'https://www.nytimes.com/2004/05/22/books/review/the-wisdom-of-crowds-problem-solving-is-a-team-sport.html' },
  { label: 'R.C. Longworth', href: 'http://www.evanravitz.com/vote/bubble/' },
  { label: 'Jack Abramoff', href: 'http://www.washingtonpost.com/wp-dyn/content/article/2005/04/30/AR2005043000783.html' },
  { label: 'Gilens and Page Princeton study', href: 'https://scholar.princeton.edu/sites/default/files/mgilens/files/gilens_and_page_2014_-testing_theories_of_american_politics.doc.pdf' },
  { label: 'People favor grassroots initiatives', href: 'http://www.ppic.org/publication/interest-group-influence-in-the-california-initiative-process/' },
  { label: 'Competition for legislators', href: 'https://www.ncsl.org/research/elections-and-campaigns/initiative-and-referendum-processes.aspx' },
  { label: 'Switzerland national initiatives', href: 'http://www.evanravitz.com/vote/fossedal/' },
];

function ExternalResource({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 border border-gray-200 bg-white p-4 text-sm text-bd-slate transition-colors hover:border-bd-cobalt hover:text-bd-cobalt"
    >
      <span>{label}</span>
      <ExternalLink size={15} className="mt-0.5 flex-shrink-0 text-bd-gold transition-transform group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

function AdvantageList({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof Users }) {
  return (
    <section className="card bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-bd-cobalt/10 text-bd-cobalt">
          <Icon size={20} aria-hidden />
        </span>
        <h3 className="font-display text-xl font-bold text-bd-navy">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm leading-relaxed text-bd-slate">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function DirectDemocracyPage() {
  return (
    <>
      <PageHero
        tag="Remedies"
        title="Bringing Democracy into the 21st Century"
        subtitle="Ballot initiatives and online petition gathering put citizens in the policy process, create competition for legislators, and make direct democracy practical for modern communities."
      />

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <p className="not-prose font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Evan Ravitz</p>

        <h2>Ballot Initiative Advantages</h2>
        <p>
          Initiatives put people in the driver seat. They break the monopoly legislators have on changing policy,
          counteract big dark money's influence over representatives, and create a practical path for citizens to
          fix policy mistakes.
        </p>
        <p>
          No one misunderstands the public as much as its representatives. Elites are frequently disconnected from
          reality. When legislators make mistakes, they often have career incentives to cover them up. Citizens have
          self-interest as an incentive to fix mistakes.
        </p>
        <blockquote>
          The will of the majority is the natural law of every society and the only sure guardian of the rights of
          man; though this may err, yet its errors are honest, solitary and short-lived.
          <footer>Thomas Jefferson</footer>
        </blockquote>
      </article>

      <section className="bg-bd-cream px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Why Initiatives Matter</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-bd-navy md:text-4xl">Citizen lawmaking creates accountability.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {ballotAdvantages.map(({ title, text, href, linkLabel }) => (
              <div key={title} className="card bg-white p-6">
                <h3 className="font-display text-xl font-bold text-bd-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bd-slate">{text}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bd-cobalt hover:underline">
                  {linkLabel} <ExternalLink size={14} aria-hidden />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Electronic Ballot Initiatives</h2>
        <p>
          Best Democracy endorsed Boulder Ballot Measure 2G. Online petition gathering makes direct democracy more
          accessible, less expensive, safer for petitioners, and more secure than the old paper process.
        </p>
      </article>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <AdvantageList title="Advantages for Petition Signers" items={signerAdvantages} icon={MousePointerClick} />
          <AdvantageList title="Advantages for Petition Gatherers" items={gathererAdvantages} icon={Users} />
          <AdvantageList title="Advantages for Government" items={governmentAdvantages} icon={Scale} />
          <AdvantageList title="Advantages for Democracy" items={democracyAdvantages} icon={FileText} />
        </div>
      </section>

      <section className="bg-bd-navy px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Security</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Online petitions are more secure than paper.</h2>
              <p className="mt-5 leading-relaxed text-gray-300">
                Petitioning can be added to existing voter registration websites using identification systems that
                already protect registration records while allowing voters to update addresses and party affiliation.
              </p>
            </div>
            <div className="space-y-3">
              {securityPoints.map(point => (
                <div key={point} className="flex gap-3 bg-white/5 p-4">
                  <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-bd-gold" aria-hidden />
                  <p className="text-sm leading-relaxed text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 prose-bd">
        <h2>Boulder Ballot Measure 2G</h2>
        <p>
          In November 2018, the city of Boulder electorate passed online petition gathering measure 2G, greatly
          increasing the ability of citizens to initiate ballot measures. Since then, city staff has obstructed
          implementation. Evan Ravitz has documented the history of obstruction.
        </p>

        <h2>Why I Quest for Direct Democracy</h2>
        <p>
          The circumstances we are born into, our upbringing, and the communities we choose to live in all help
          shape who we are. None of us arrive where we are in a vacuum. Evan Ravitz's personal story explains how
          his experience with Boulder government and the deaths of Guatemalan friends killed by US-supplied weapons
          pushed him toward direct democracy work.
        </p>

        <h2>What Comes Next</h2>
        <p>
          For more information and to help promote the platform, join Strengthen Direct Democracy, follow Best
          Democracy on Facebook, join Best Democracy on Meetup, and organize local Pro Rep events.
        </p>

        <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="https://www.facebook.com/groups/309502612936293/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Strengthen Direct Democracy <ExternalLink size={16} aria-hidden />
          </a>
          <Link href="/events" className="btn-secondary">
            Organize Local Events <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </article>

      <section className="bg-bd-cream px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">Resources</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-bd-navy">Links and Further Reading</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {resources.map(resource => (
              <ExternalResource key={`${resource.label}-${resource.href}`} {...resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
