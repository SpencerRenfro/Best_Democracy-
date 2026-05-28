// src/app/accessibility/page.tsx
import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Best Democracy is committed to digital accessibility for people with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Accessibility Statement"
        subtitle="Best Democracy is committed to ensuring digital accessibility for people with disabilities."
        dark={false}
      />
      <article className="max-w-3xl mx-auto px-6 py-16 prose-bd">
        <p>Best Democracy is committed to ensuring this website is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with <strong>WCAG 2.1 Level AA</strong> guidelines.</p>

        <h2>Measures Taken</h2>
        <ul>
          <li>Semantic HTML5 elements with appropriate ARIA landmarks and roles</li>
          <li>Skip-to-content link for keyboard and screen-reader users</li>
          <li>All images have descriptive alt text or are marked decorative</li>
          <li>Color contrast ratios meet or exceed 4.5:1 for normal text (AA)</li>
          <li>All interactive elements are keyboard-accessible with visible focus indicators</li>
          <li>Form inputs have associated labels and error messages use <code>role="alert"</code></li>
          <li>No flashing or strobing content</li>
          <li>Content is structured with proper heading hierarchy (h1 → h2 → h3)</li>
          <li>Links have descriptive text (no "click here")</li>
          <li>Page language is declared (<code>lang="en"</code>)</li>
          <li>Time-sensitive content uses <code>&lt;time&gt;</code> elements with machine-readable dates</li>
        </ul>

        <h2>Known Limitations</h2>
        <p>Some third-party content embedded on this site (e.g., external video links, Meetup widgets) may not fully meet accessibility standards. We work to provide accessible alternatives where possible.</p>

        <h2>Feedback</h2>
        <p>We welcome feedback on the accessibility of Best Democracy. If you experience any accessibility barriers, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:jesse@bestdemocracy.org">jesse@bestdemocracy.org</a></li>
        </ul>
        <p>We aim to respond to accessibility feedback within 5 business days.</p>

        <h2>Technical Specifications</h2>
        <p>This website relies on the following technologies for conformance:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS (Tailwind CSS)</li>
          <li>WAI-ARIA</li>
          <li>JavaScript (React / Next.js)</li>
        </ul>

        <p className="text-sm text-bd-muted mt-8">This statement was created on May 27, 2026.</p>
      </article>
    </>
  );
}
