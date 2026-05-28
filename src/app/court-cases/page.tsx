// src/app/court-cases/page.tsx
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Notable Court Cases',
  description: 'Key court cases in the history of US election law, voting rights, and democracy, from Somerset v. Stewart to Citizens United.',
};

const cases = [
  { name: 'Somerset v. Stewart', year: 1772, note: 'Abolished slavery in England and Wales, precipitating the American Revolution.', significance: 'Foundation', href: 'https://en.wikipedia.org/wiki/Somerset_v_Stewart' },
  { name: 'Dillon\'s Rule', year: 1868, note: 'States hold power over local governments; Dillon\'s Rule constrains local democracy.', significance: 'Obstruction', href: 'https://www.nlc.org/resource/cities-101-delegation-of-power/' },
  { name: 'Dred Scott v. Sandford', year: 1857, note: 'Slavers on the Supreme Court ruled enslaved people were property, not citizens, contributing to the Civil War.', significance: 'Injustice', href: 'https://www.biography.com/people/dred-scott-9477240' },
  { name: 'Plessy v. Ferguson', year: 1896, note: 'Legitimized Jim Crow "separate but equal" doctrine, later overturned by Brown v. Board of Education.', significance: 'Injustice', href: 'https://teachingamericanhistory.org/document/plessy-v-ferguson-2/' },
  { name: 'Hernandez v. Texas', year: 1954, note: 'Established that the 14th Amendment protects all racial groups, not just Black Americans.', significance: 'Reform', href: 'https://www.history.com/this-day-in-history/supreme-court-ruling-hernandez-v-texas' },
  { name: 'Reynolds v. Sims', year: 1964, note: 'Established the "one person, one vote" principle for state legislative districts.', significance: 'Reform', href: 'https://en.wikipedia.org/wiki/Reynolds_v._Sims' },
  { name: 'Buckley v. Valeo', year: 1976, note: 'Equated money with free speech and opened the door for unlimited political spending.', significance: 'Setback', href: 'https://en.wikipedia.org/wiki/Buckley_v._Valeo' },
  { name: 'Dillard v. Crenshaw County', year: 1987, note: 'Found hundreds of Alabama districts intentionally employed at-large methods to discriminate against Black voters.', significance: 'Reform', href: 'https://cumberlandlawreview.files.wordpress.com/2016/10/the-dillard-cases-and-grassroots-black-political-power.pdf' },
  { name: 'Brown v. Board of Commissioners', year: 1989, note: 'At-Large Plurality described as a tool of white supremacists in Chattanooga, Tennessee.', significance: 'Reform', href: 'http://www.timesfreepress.com/news/news/story/2011/oct/13/court-case-dramatically-shifts-form-of/61337/' },
  { name: 'Charleston County v. United States', year: 2004, note: 'A major Voting Rights Act challenge to at-large county council elections.', significance: 'Reform', href: 'https://www.justice.gov/osg/brief/charleston-county-v-united-states-opposition' },
  { name: 'Citizens United v. FEC', year: 2010, note: 'Unleashed unlimited dark money into election campaigns and treated corporations as political speakers.', significance: 'Setback', href: 'https://en.wikipedia.org/wiki/Citizens_United_v._FEC' },
  { name: 'Shelby County v. Holder', year: 2013, note: 'Gutted Voting Rights Act preclearance requirements and opened the floodgates to voter suppression.', significance: 'Setback', href: 'https://en.wikipedia.org/wiki/Shelby_County_v._Holder' },
  { name: 'McCutcheon v. FEC', year: 2014, note: 'Struck down aggregate campaign contribution limits, further eroding campaign finance regulation.', significance: 'Setback', href: 'https://thinkprogress.org/how-the-supreme-court-just-legalized-money-laundering-by-rich-campaign-donors-8dc44ee06f49/' },
  { name: 'Hall et al. v. Jones County Board', year: 2017, note: 'Jones County, North Carolina was forced to drop At-Large Plurality over Voting Rights Act violations.', significance: 'Reform', href: 'https://lawyerscommittee.org/lawyers-committee-announces-settlement-major-voting-rights-lawsuit-north-carolina/' },
  { name: 'Gill v. Whitford', year: 2018, note: 'A gerrymandering case that left partisan gerrymandering unresolved at the federal level.', significance: 'Incomplete', href: 'http://www.campaignlegalcenter.org/case/gill-v-whitford' },
];

const badgeColors: Record<string, string> = {
  Foundation: 'bg-bd-navy text-white',
  Obstruction: 'bg-bd-slate text-white',
  Injustice: 'bg-bd-red text-white',
  Reform: 'bg-bd-green text-white',
  Setback: 'bg-orange-600 text-white',
  Incomplete: 'bg-bd-gold text-white',
};

export default function CourtCasesPage() {
  return (
    <>
      <PageHero
        tag="Resources"
        title="Notable Court Cases"
        subtitle="Key decisions in the history of US election law, voting rights, and democracy, from the case that triggered the American Revolution to Citizens United."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-10" aria-label="Legend">
          {Object.entries(badgeColors).map(([label, cls]) => (
            <span key={label} className={`tag ${cls} text-xs`}>{label}</span>
          ))}
        </div>

        <div className="space-y-4">
          {cases.sort((a, b) => a.year - b.year).map(c => (
            <article key={c.name} className="card bg-white p-6 flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="flex-shrink-0 w-16 text-center">
                <p className="font-display text-2xl font-black text-bd-navy">{c.year}</p>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="font-display font-bold text-bd-navy">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-bd-cobalt transition-colors"
                    >
                      {c.name}
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  </h2>
                  <span className={`tag text-xs ${badgeColors[c.significance]}`}>{c.significance}</span>
                </div>
                <p className="text-bd-slate text-sm leading-relaxed">{c.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
