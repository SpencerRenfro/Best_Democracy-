// src/app/slavery-and-us-elections/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Slavery & US Elections',
  description: 'Where did our election issues originate? The influence of slavery on US electoral systems — and why those distortions persist today.',
};

export default function SlaveryAndUSElectionsPage() {
  return (
    <>
      <PageHero
        tag="Observation"
        title="The Influence of Slavery on US Elections"
        subtitle="If we analyze the creation of US government and electoral systems inside the context of how they were formed, it leads to a clearer understanding of why today's unrepresentative government persists."
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd">
        <blockquote>
          "How can you learn from your mistakes if you can't remember them?"
        </blockquote>

        <h2>Where Did Our Election Issues Originate?</h2>
        <p>
          History can be changed or sanitized — it has happened many times before. There are multiple narratives
          to the United States creation story. The standard public school curriculum presented a narrative in which
          the Founding Fathers' relationship with slavery was minimized because the "Constitution is Great" narrative
          took precedence. The lack of a Bill of Rights was framed as a small oversight, quickly corrected.
        </p>
        <p>
          What the curriculum left out: at the time of the revolution in 1776, only 2–3% of Colonists owned slaves,
          but 73% of the signers of the Declaration of Independence were slavers. George Washington, Thomas Jefferson,
          and James Madison were three of the largest and wealthiest slavers in the Colonies at the time.
        </p>

        <h2>Somerset v. Stewart — The Spark</h2>
        <p>
          In 1772, Lord Mansfield, presiding over the King's Bench (the Supreme Court of England and Wales),
          decided <em>Somerset v. Stewart</em> and peacefully abolished slavery in England and Wales — four years
          before the US Declaration of Independence. Judge Mansfield found no basis in British Common Law for one
          person to own another.
        </p>
        <p>
          Somerset v. Stewart was well publicized in the North American colonies. Within a year, slaves started
          suing in Colonial courts and winning their freedom. This terrified slavers — it was an existential threat
          to their means of disproportionate self-enrichment. The American Revolution, framed as being about tea
          taxes, was in fact far more centrally about protecting the institution of slavery and the enormous wealth
          it generated for a small elite.
        </p>

        <h2>The Slaver Strategy at the Constitutional Convention</h2>
        <p>
          The Constitution, including the federal election system, was crafted over three months in the summer of
          1787. At the end of the convention, 38 older, wealthy, white men — the majority of whom owned slaves —
          voted on its passage. James Madison, a third-generation slaver who owned 120 slaves, came in with a plan
          (the Virginia Plan) and guided the design of the Constitution and electoral system so that he and his
          cohort of slavers would consistently win control of the new government.
        </p>
        <p>The slavers understood electoral system design determines election outcomes. They designed their system to:</p>
        <ol>
          <li><strong>Control who votes:</strong> Only white male landowners over 25 could vote — 94% voter suppression</li>
          <li><strong>Control who voters could vote for:</strong> The first Presidential election had only one candidate</li>
          <li><strong>Control how voters vote:</strong> Winner-take-all systems dominated most states</li>
          <li><strong>Control how votes are counted:</strong> Plurality, Electoral College, Three-Fifths Compromise</li>
          <li><strong>Obstruct change:</strong> Article V of the Constitution made amendments nearly impossible</li>
        </ol>

        <h2>What Slavers Did at the Constitutional Convention</h2>
        <p>
          Articles I, II, and IV deliberately skewed elections to favor slave states and gave slavers authority to
          hunt down runaway slaves in non-slave states. Article V gave slave states veto power over any constitutional
          changes, protecting slavery from abolition.
        </p>
        <p>
          As a direct result, 10 of the first 12 Presidents owned slaves. They in turn packed the US Supreme Court
          with more slavers, producing decisions like <em>Dred Scott</em>. Slavery persisted in the US for 93 years
          after Somerset v. Stewart peacefully abolished it in England.
        </p>

        <h2>The Legacy Persists Today</h2>
        <p>
          The same system — still in use today, what Best Democracy calls the "Slavers' System," including the
          Electoral College — has given us two of our last several presidents who lost the popular vote. The Spoiler
          Effect, another feature of the system, has repeatedly distorted outcomes without reflecting genuine
          voter intent.
        </p>
        <p>
          In much the same way Jim Crow was institutionalized into laws and regulations, entrenched election laws
          still present tremendous obstacles to accurate representation. Archaic obstacles to fair elections should
          be identified, removed, and replaced with more representative electoral systems and methods.
        </p>

        <blockquote>
          "If you don't have a seat at the table, you're probably on the menu." — Sen. Elizabeth Warren
        </blockquote>

        <h2>Why It Matters — And What We Can Do</h2>
        <p>
          Our country needs Champions of Democracy. Understanding the origins of our broken election systems is the
          first step toward fixing them. When enough people realize how and why these systems were designed to exclude
          the majority, we can work together to change them.
        </p>
        <p>
          The cure is Proportional Representation in Multi Member Districts — a system used by 94 countries that
          accurately reflects voter intent and includes nearly everyone.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/hybrid-proportional-representation" className="btn-primary">The Solution: Hybrid Pro Rep</Link>
          <Link href="/identifying-issues" className="btn-secondary">Identifying Election Issues</Link>
        </div>
      </article>
    </>
  );
}
