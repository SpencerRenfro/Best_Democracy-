import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Scale, ShieldAlert, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Democratize the Supreme Court',
  description: 'The Supreme Court is the least democratic branch of federal government. Reform can introduce accountability, legitimacy, and fair representation.',
};

const problems = [
  {
    title: 'Lifetime Power',
    text: 'Lifetime appointments concentrate enormous public power in officials voters cannot remove, even as the country changes around them.',
    icon: ShieldAlert,
  },
  {
    title: 'Minority Rule',
    text: 'Presidents who lost the popular vote and senators representing a minority of Americans can shape the Court for generations.',
    icon: Users,
  },
  {
    title: 'Captured Law',
    text: 'A packed Court can protect concentrated wealth and political power while blocking democratic remedies.',
    icon: Scale,
  },
];

const reforms = [
  'Create fixed terms for Supreme Court justices.',
  'Regularize appointments so each presidential term receives the same number of nominations.',
  'Adopt binding ethics rules and real recusal standards.',
  'Expand the Court if necessary to undo partisan court-packing and restore legitimacy.',
  'Pair court reform with broader democratic reforms: proportional representation, voting rights, and campaign finance reform.',
];

export default function DemocratizeSupremeCourtPage() {
  return (
    <>
      <PageHero
        tag="Remedies"
        title="Democratize the Supreme Court"
        subtitle="The least elected branch of government has been used to entrench concentrated power. A democracy needs courts with legitimacy, accountability, and fair rules."
      />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-bd-gold">The Problem</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-bd-navy md:text-4xl">
            Courts can be packed to obstruct democracy.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bd-slate">
            The Supreme Court has repeatedly been used to protect concentrated wealth, racial hierarchy, and
            minority rule. From <em>Dred Scott</em> to <em>Citizens United</em>, the Court has often reinforced the
            same distorted power structures built into the rest of US government.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map(({ title, text, icon: Icon }) => (
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
        <h2>Why Reform Matters</h2>
        <p>
          The Supreme Court is treated as separate from politics, but the appointment process is deeply political.
          When a distorted Senate confirms justices nominated by presidents who can lose the popular vote, the Court
          inherits the same democratic defects as the Electoral College and Senate.
        </p>
        <p>
          Judicial independence matters, but independence should not mean permanent unaccountable power. A Court
          that can veto democratic remedies while following weak ethics rules undermines public trust and democratic
          self-government.
        </p>

        <h2>Reforms</h2>
        <ul>
          {reforms.map(reform => <li key={reform}>{reform}</li>)}
        </ul>

        <blockquote>
          If a court can be captured by minority-rule institutions, then court reform is democracy reform.
        </blockquote>

        <h2>The Larger Remedy</h2>
        <p>
          Court reform should not stand alone. The deeper issue is concentrated power across the entire political
          system. Proportional Representation, Home Rule, Direct Democracy, and fair voting rights all help disperse
          power so courts are not the final firewall against democratic change.
        </p>

        <div className="not-prose mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/court-cases" className="btn-primary">Court Cases</Link>
          <Link href="/hybrid-proportional-representation" className="btn-secondary">Hybrid Pro Rep</Link>
        </div>
      </article>
    </>
  );
}
