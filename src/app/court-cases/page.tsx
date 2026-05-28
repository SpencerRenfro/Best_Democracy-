// src/app/court-cases/page.tsx
import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Notable Court Cases',
  description: 'Key court cases in the history of US election law, voting rights, and democracy — from Somerset v. Stewart to Citizens United.',
};

const cases = [
  { name: 'Somerset v. Stewart',               year: 1772, note: 'Where the shitshow began — abolished slavery in England and Wales, precipitating the American Revolution',    significance: 'Foundation' },
  { name: 'Dillon\'s Rule',                    year: 1868, note: 'States hold power over local governments; Dillon\'s Rule constrains local democracy',                         significance: 'Obstruction' },
  { name: 'Dred Scott v. Sandford',            year: 1857, note: 'Slavers on Supreme Court ruled enslaved people were property, not citizens — contributing to the Civil War', significance: 'Injustice' },
  { name: 'Plessy v. Ferguson',                year: 1896, note: 'Legitimized Jim Crow "separate but equal" doctrine — overturned by Brown v. Board of Education in 1954',     significance: 'Injustice' },
  { name: 'Reynolds v. Sims',                  year: 1964, note: 'Established "one person, one vote" principle for state legislative districts',                               significance: 'Reform' },
  { name: 'Hernandez v. Texas',                year: 1954, note: 'Established that the 14th Amendment protects all racial groups, not just Black Americans',                  significance: 'Reform' },
  { name: 'Buckley v. Valeo',                  year: 1976, note: 'Equated money with free speech — opened the door for unlimited political spending',                         significance: 'Setback' },
  { name: 'Dillard v. Crenshaw County',        year: 1987, note: 'Found hundreds of Alabama districts intentionally employed At-Large methods to discriminate against Black voters; 183 jurisdictions abandoned At-Large elections', significance: 'Reform' },
  { name: 'Brown v. Board of Commissioners',   year: 1989, note: 'At-Large Plurality described as a tool of white supremacists in Chattanooga, TN',                          significance: 'Reform' },
  { name: 'Charleston County v. United States',year: 2004, note: 'At-Large Plurality should have gone away forever after this ruling',                                        significance: 'Reform' },
  { name: 'Citizens United v. FEC',            year: 2010, note: 'Unleashed unlimited dark money into election campaigns — corporations treated as people',                   significance: 'Setback' },
  { name: 'Gill v. Whitford',                  year: 2018, note: 'Gerrymandering case — ultimately punted on partisan gerrymandering, leaving it unresolved at federal level', significance: 'Incomplete' },
  { name: 'Shelby County v. Holder',           year: 2013, note: 'Gutted the Voting Rights Act preclearance requirements — opened floodgates to voter suppression',           significance: 'Setback' },
  { name: 'Hall et al. v. Jones County Board', year: 2017, note: 'Jones County, NC forced to drop At-Large Plurality over the same racist violations as Charleston County',  significance: 'Reform' },
  { name: 'McCutcheon v. FEC',                 year: 2014, note: 'Struck down aggregate campaign contribution limits — further eroding campaign finance regulation',          significance: 'Setback' },
];

const badgeColors: Record<string, string> = {
  Foundation:  'bg-bd-navy text-white',
  Obstruction: 'bg-bd-slate text-white',
  Injustice:   'bg-bd-red text-white',
  Reform:      'bg-bd-green text-white',
  Setback:     'bg-orange-600 text-white',
  Incomplete:  'bg-bd-gold text-white',
};

export default function CourtCasesPage() {
  return (
    <>
      <PageHero
        tag="Resources"
        title="Notable Court Cases"
        subtitle="Key decisions in the history of US election law, voting rights, and democracy — from the case that triggered the American Revolution to Citizens United."
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
                  <h2 className="font-display font-bold text-bd-navy">{c.name}</h2>
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
