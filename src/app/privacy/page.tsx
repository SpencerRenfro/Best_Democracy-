// src/app/privacy/page.tsx
import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Best Democracy privacy policy — we will never sell, rent, or share your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero tag="Legal" title="Privacy Policy" dark={false} />
      <article className="max-w-3xl mx-auto px-6 py-16 prose-bd">
        <p className="text-lg font-medium text-bd-navy">Last updated: May 27, 2026</p>
        <p><strong>We will never sell, rent, or give your name or email address to anyone — ever.</strong> There are no ads on this site. We do not use tracking pixels or sell data to Cambridge Analytica or any similar entity.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Account information:</strong> name, email, and optionally your city/county when you register</li>
          <li><strong>Contact form submissions:</strong> name, email, and your message</li>
          <li><strong>Newsletter subscriptions:</strong> email address and topic interests</li>
          <li><strong>Forum posts and comments:</strong> content you voluntarily submit</li>
          <li><strong>Event RSVPs:</strong> your attendance status for events you register for</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain your account</li>
          <li>To send newsletters you have subscribed to and confirmed</li>
          <li>To notify you of events you have RSVP'd to</li>
          <li>To respond to contact form inquiries</li>
          <li>To improve the website and user experience</li>
        </ul>

        <h2>Data Storage & Security</h2>
        <p>Your data is stored in a secure PostgreSQL database. Passwords are hashed using bcrypt (cost factor 12). We use HTTPS throughout the site. Access to personal data is restricted to site administrators.</p>

        <h2>Cookies</h2>
        <p>We use a single session cookie for authentication purposes only. We do not use advertising cookies, analytics tracking cookies, or third-party cookies.</p>

        <h2>Your Rights</h2>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Correction:</strong> Update your information via your profile settings</li>
          <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
          <li><strong>Unsubscribe:</strong> Unsubscribe from newsletters at any time via the link in any email</li>
        </ul>
        <p>To exercise these rights, contact: <a href="mailto:jesse@bestdemocracy.org">jesse@bestdemocracy.org</a></p>

        <h2>Third-Party Services</h2>
        <p>We may link to third-party services (Meetup, Facebook, YouTube). This privacy policy applies only to bestdemocracy.org. Third-party sites have their own privacy policies.</p>

        <h2>Contact</h2>
        <p>Questions about this privacy policy: <a href="mailto:jesse@bestdemocracy.org">jesse@bestdemocracy.org</a></p>
      </article>
    </>
  );
}
