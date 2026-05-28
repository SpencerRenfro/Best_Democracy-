// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, Users, Scale, Vote, Building, BookOpen, Calendar } from 'lucide-react';

const issues = [
  {
    icon: Vote,
    title: 'Distorted Elections',
    desc: 'At-Large Plurality and Single Member Districts waste millions of votes and produce predetermined results that don\'t reflect the electorate.',
    href: '/at-large-elections',
  },
  {
    icon: Building,
    title: 'Unaccountable Senate',
    desc: 'Wyoming\'s 578K residents have equal Senate representation to California\'s 39.5M. One Californian has 1.46% of Wyoming\'s Senate voting power.',
    href: '/abolish-senate',
  },
  {
    icon: Scale,
    title: 'Electoral College',
    desc: 'Designed by slavers to favor slave states, the Electoral College has given us two presidents in recent decades who lost the popular vote.',
    href: '/electoral-college',
  },
  {
    icon: Users,
    title: 'Concentrated Power',
    desc: '82% of Colorado counties are one-party dominant. Most elections are predetermined before a single vote is cast.',
    href: '/identifying-issues',
  },
];

const remedies = [
  { href: '/single-transferable-vote', label: 'Single Transferable Vote', desc: 'Every demographic gets a seat at the table.' },
  { href: '/hybrid-proportional-representation', label: 'Hybrid Proportional Rep', desc: 'The most advanced Pro Rep system in the world.' },
  { href: '/home-rule', label: 'Home Rule', desc: 'Give local communities control over their governance.' },
  { href: '/direct-democracy', label: 'Direct Democracy', desc: 'Citizens drive change through ballot initiatives.' },
  { href: '/abolish-senate', label: 'Reform the Senate', desc: 'End the most distorted legislative body in the world.' },
  { href: '/democratize-supreme-court', label: 'Democratize the Supreme Court', desc: 'Introduce accountability to the least elected branch.' },
];

const quotes = [
  {
    text: 'In a democratic government, the right of decision belongs to the majority, but the right of representation belongs to all.',
    author: 'Ernest Naville',
  },
  {
    text: 'Entrenched powers use their power to entrench themselves further.',
    author: 'Joseph Stiglitz',
  },
  {
    text: 'If you don\'t have a seat at the table, you\'re probably on the menu.',
    author: 'Sen. Elizabeth Warren',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-hero-gradient text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden>
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(200,151,42,0.3) 40px, rgba(200,151,42,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(200,151,42,0.3) 40px, rgba(200,151,42,0.3) 41px)',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="text-bd-gold font-mono text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
              Proportional Representation for Colorado &amp; the United States
            </p>
            <h1
              id="hero-heading"
              className="font-display text-5xl md:text-7xl font-black leading-[0.95] mb-8 animate-fade-up animate-fade-up-delay-1"
            >
              Inclusive<br />
              <span className="text-bd-gold">Democracy</span><br />
              for the 99%
            </h1>
            <div className="gold-bar animate-fade-up animate-fade-up-delay-2" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 animate-fade-up animate-fade-up-delay-2 max-w-2xl">
              Most Americans don't live in a real democracy. Predetermined elections, concentrated power,
              and distorted representation keep us from fair governance. There are proven solutions —
              and it starts locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-fade-up-delay-3">
              <Link href="/hybrid-proportional-representation" className="btn-primary text-base">
                The Solution <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/auth/register" className="btn-secondary border-white text-white hover:bg-white hover:text-bd-navy text-base">
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem overview ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" aria-labelledby="issues-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="issues-heading" className="section-title">The Problem</h2>
            <div className="gold-bar mx-auto" />
            <p className="section-subtitle max-w-2xl mx-auto">
              US election systems were designed by slavers to concentrate power and exclude most
              people from representation. Those distortions persist today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {issues.map(({ icon: Icon, title, desc, href }) => (
              <Link key={href} href={href} className="card p-6 group">
                <div className="w-12 h-12 rounded-sm bg-bd-cobalt/10 flex items-center justify-center mb-4 group-hover:bg-bd-cobalt transition-colors">
                  <Icon size={24} className="text-bd-cobalt group-hover:text-white transition-colors" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-bd-navy mb-2">{title}</h3>
                <p className="text-bd-slate text-sm leading-relaxed">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-bd-cobalt text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────────────────── */}
      <section className="bg-bd-navy py-20 px-6" aria-label="Quote">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl md:text-4xl font-bold text-bd-cream leading-snug">
            "Maybe a bunch of white slave owners from the 1700s did not come up with the best government ever."
          </p>
          <div className="gold-bar mx-auto mt-8" />
          <p className="text-bd-muted mt-4 font-mono text-sm tracking-wide">— Best Democracy</p>
        </div>
      </section>

      {/* ── Remedies ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bd-cream" aria-labelledby="remedies-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="remedies-heading" className="section-title">The Remedies</h2>
            <div className="gold-bar mx-auto" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Proven proportional representation systems used by 94 countries give us a roadmap.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remedies.map(({ href, label, desc }) => (
              <Link key={href} href={href} className="card p-6 bg-white group hover:border-bd-cobalt border-2 border-transparent">
                <h3 className="font-display text-xl font-bold text-bd-navy mb-2 group-hover:text-bd-cobalt transition-colors">
                  {label}
                </h3>
                <p className="text-bd-slate text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 h-0.5 w-0 bg-bd-gold group-hover:w-full transition-all duration-300" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rotating quotes ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white" aria-label="Quotes">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {quotes.map(({ text, author }) => (
            <figure key={author} className="border-l-4 border-bd-gold pl-6">
              <blockquote className="font-body text-bd-slate italic leading-relaxed mb-3">
                "{text}"
              </blockquote>
              <figcaption className="font-mono text-sm text-bd-navy font-medium">— {author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Community CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bd-cobalt text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display text-4xl font-bold mb-6">
            Ready to Help Bring Real Democracy to Colorado?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join Best Democracy to participate in our forum, attend events, and connect with
            thousands of advocates working for election reform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-gold text-base">
              <Users size={18} aria-hidden /> Join Best Democracy
            </Link>
            <Link href="/events" className="border-2 border-white text-white hover:bg-white hover:text-bd-cobalt px-6 py-3 inline-flex items-center gap-2 transition-colors rounded-sm text-base">
              <Calendar size={18} aria-hidden /> Upcoming Events
            </Link>
            <Link href="/blog" className="border-2 border-white text-white hover:bg-white hover:text-bd-cobalt px-6 py-3 inline-flex items-center gap-2 transition-colors rounded-sm text-base">
              <BookOpen size={18} aria-hidden /> Discussion Forum
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
    </>
  );
}
