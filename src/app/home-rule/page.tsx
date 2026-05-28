// src/app/home-rule/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Rule',
  description: 'Home Rule enables self-determination at the local level — 30 of 50 US states are Home Rule states. Learn how it enables democracy to flourish.',
};

export default function HomeRulePage() {
  return (
    <>
      <PageHero
        tag="Remedies"
        title="Home Rule Enables Democracy to Flourish"
        subtitle="Home Rule is self-determination at the local level — an extension of Jefferson's rationale for throwing off tyrannical government."
      />

      <article className="max-w-4xl mx-auto px-6 py-16 prose-bd" aria-label="Home Rule article">
        <h2>Why Home Rule?</h2>
        <p>
          Thomas Jefferson laid out his indictment of King George III in the US Declaration of Independence,
          famously beginning with what purpose government serves — that governments derive their just powers from
          the consent of the governed, and that whenever government becomes destructive of those ends, it is the
          Right of the People to alter or to abolish it.
        </p>
        <blockquote>
          Home Rule is an extension of Jefferson's rationale for throwing off the yoke of tyranical government.
          Home Rule is self determination at the local level. 30 of 50 US states are Home Rule states.
        </blockquote>

        <h2>Home Rule in Colorado</h2>
        <p>
          In Colorado there are two forms of government: Statutory and Home Rule. Statutory governments derive
          their rules from the state. Home Rule governments write their own charter — similar to a state or
          national Constitution — that defines how the government is organized and its regulations. Home Rule
          gives local government more control over their own destiny and pushes power down from the state.
        </p>
        <p>
          96 cities — every major city in Colorado — are Home Rule cities. There are two combined city/county
          governments (Denver and Broomfield), both Home Rule. Two Home Rule counties exist: Pitkin and Weld.
          The other 60 of 64 counties are statutory.
        </p>

        <h2>The Democratic Crisis in Colorado Counties</h2>
        <p>
          Most of Colorado's statutory counties do not have pluralism — they are one-party counties with
          predetermined elections. A 2018 study by Thomas Cronin and Robert Loevy of Colorado College found that
          36 counties are dominated by the Republican Party, 15 by the Democratic Party, and 11 can swing between
          parties. Without pluralism, we do not live in a real democracy.
        </p>

        <h2>Two Major Advantages of Home Rule for Counties</h2>
        <ol>
          <li>
            <strong>Direct Democracy:</strong> Home Rule allows citizens to put ballot initiatives on the ballot
            through signature gathering — just as 99 Colorado cities and 4 Colorado counties do now.
          </li>
          <li>
            <strong>Charter Design:</strong> Writing a charter for a Home Rule county allows the people to decide
            how they are governed. This could include changing the size of the legislative body and adopting
            Mixed Member Proportional (MMP) representation.
          </li>
        </ol>

        <h2>Oil &amp; Gas: A Model for Local Control</h2>
        <p>
          Colorado SB 19-181 abrogated the Colorado Supreme Court precedent that, in the event of a conflict
          between state and local laws on oil and gas, state law prevails. The General Assembly reinstituted a
          sort of legislative home rule over the subject, making state laws the <em>floor</em>, not the ceiling,
          for local regulation.
        </p>

        <h2>What You Can Do</h2>
        <p>
          Home Rule would allow citizens to gather signatures to put initiatives on the county ballot. Statutory
          systems concentrate power in few hands. Home Rule disperses power and is much more inclusive.
        </p>
        <p>
          <strong>Contact your county commissioners</strong> and ask them to put Home Rule on the ballot.
          This is grassroots democracy in action.
        </p>

        <div className="not-prose flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/direct-democracy" className="btn-primary">
            Learn About Direct Democracy <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Your Representatives
          </Link>
        </div>
      </article>
    </>
  );
}
