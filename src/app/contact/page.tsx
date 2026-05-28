// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState<'idle'|'success'|'error'>('idle');
  const [msg, setMsg]         = useState('');

  function setField(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setMsg('Thanks for reaching out! We\'ll get back to you soon.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMsg('Something went wrong. Please try again or email jesse@bestdemocracy.org directly.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please try again.');
    }
    setLoading(false);
  }

  const subjects = [
    'General Inquiry',
    'Home Rule in My County',
    'Proportional Representation',
    'Speaking Request',
    'Media Inquiry',
    'Volunteering',
    'Donate / Support',
    'Technical Issue',
  ];

  return (
    <>
      <PageHero
        tag="Contact"
        title="Get In Touch"
        subtitle="Tell us what you think, what your election reform priorities are, or how you'd like to help."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <h2 className="font-display text-2xl font-bold text-bd-navy mb-4">We Want to Hear From You</h2>
          <div className="gold-bar" />
          <div className="space-y-4 text-bd-slate leading-relaxed">
            <p>Send links you think should be on the site. Write an article on your favorite election reform topic. Let us know what resonates with you.</p>
            <p>We want to change how people vote. This is a group effort. Contact us if you have any skills you'd like to put to use.</p>
            <p><strong className="text-bd-navy">We will never sell, rent or give your email address to anyone.</strong> There are no ads on this site.</p>
          </div>

          <div className="mt-8 space-y-3">
            <a href="mailto:jesse@bestdemocracy.org" className="flex items-center gap-3 text-bd-cobalt hover:underline">
              <Mail size={18} aria-hidden /> jesse@bestdemocracy.org
            </a>
            <p className="text-bd-slate text-sm">4396 Snowberry Ct., Boulder, CO 80304</p>
          </div>

          <div className="mt-8 p-6 bg-bd-cream border border-gray-200 rounded-sm">
            <h3 className="font-display font-bold text-bd-navy mb-2">Skills Needed</h3>
            <ul className="text-sm text-bd-slate space-y-1">
              {['Web developer', 'Writer / Editor', 'Social media manager', 'Event organizer', 'Graphic designer', 'Researcher', 'Volunteer coordinator'].map(s => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bd-gold flex-shrink-0" aria-hidden /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
              <p className="text-bd-green text-lg font-medium mb-2">Message Sent!</p>
              <p className="text-bd-slate">{msg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
              {status === 'error' && <p role="alert" className="text-bd-red text-sm bg-red-50 border border-red-200 rounded px-4 py-3">{msg}</p>}

              <div>
                <label htmlFor="contact-name" className="label">Name <span aria-label="required">*</span></label>
                <input id="contact-name" type="text" required value={form.name} onChange={setField('name')} className="input" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="label">Email <span aria-label="required">*</span></label>
                <input id="contact-email" type="email" required value={form.email} onChange={setField('email')} className="input" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="contact-subject" className="label">Subject <span aria-label="required">*</span></label>
                <select id="contact-subject" required value={form.subject} onChange={setField('subject')} className="input">
                  <option value="">Select a subject…</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="label">Message <span aria-label="required">*</span></label>
                <textarea id="contact-message" required rows={8} value={form.message} onChange={setField('message')} className="input resize-y" placeholder="How can we help?" maxLength={5000} />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center" aria-busy={loading}>
                <Send size={16} aria-hidden />
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
