// src/app/events/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { formatDate } from '@/lib/utils';
import { PageHero } from '@/components/sections/PageHero';
import { Calendar, MapPin, Video, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Best Democracy events — local meetings, virtual presentations, and election reform actions across Colorado.',
};

export const dynamic = 'force-dynamic';

async function getEvents() {
  try {
    return await prisma.event.findMany({
      where: { published: true, startDate: { gte: new Date() } },
      orderBy: { startDate: 'asc' },
      include: { _count: { select: { rsvps: true } } },
    });
  } catch {
    return [];
  }
}

export default async function EventsPage() {
  const session = await auth();
  const events  = await getEvents();

  return (
    <>
      <PageHero
        tag="Community"
        title="Events"
        subtitle="Join us for local meetings, virtual presentations, and organizing sessions. Democracy starts in your community."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {events.length === 0 ? (
          <div className="text-center py-20 text-bd-slate">
            <Calendar size={48} className="mx-auto mb-4 opacity-30" aria-hidden />
            <p className="text-xl font-display font-bold mb-2">No upcoming events</p>
            <p className="mb-6">Check back soon or subscribe to our newsletter for event announcements.</p>
            <Link href="/#newsletter" className="btn-primary">Subscribe to Newsletter</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map(event => (
              <article
                key={event.id}
                className="card bg-white overflow-hidden"
                aria-labelledby={`event-title-${event.id}`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date block */}
                  <div className="bg-bd-navy text-white md:w-36 flex-shrink-0 flex flex-col items-center justify-center p-6 text-center">
                    <p className="font-mono text-bd-gold text-xs tracking-widest uppercase">
                      {new Date(event.startDate).toLocaleString('en-US', { month: 'short' })}
                    </p>
                    <p className="font-display text-5xl font-black">
                      {new Date(event.startDate).getDate()}
                    </p>
                    <p className="font-mono text-xs text-bd-muted">
                      {new Date(event.startDate).getFullYear()}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {event.isVirtual ? (
                        <span className="tag bg-bd-cobalt flex items-center gap-1">
                          <Video size={11} aria-hidden /> Virtual
                        </span>
                      ) : (
                        <span className="tag bg-bd-green flex items-center gap-1">
                          <MapPin size={11} aria-hidden /> In Person
                        </span>
                      )}
                    </div>

                    <h2 id={`event-title-${event.id}`} className="font-display text-xl font-bold text-bd-navy mb-2">
                      <Link href={`/events/${event.id}`} className="hover:text-bd-cobalt transition-colors">
                        {event.title}
                      </Link>
                    </h2>

                    <p className="text-bd-slate text-sm leading-relaxed mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-bd-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} aria-hidden />
                        <time dateTime={event.startDate.toISOString()}>
                          {formatDate(event.startDate, { weekday: 'long', hour: 'numeric', minute: '2-digit' })}
                        </time>
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} aria-hidden /> {event.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Users size={14} aria-hidden /> {event._count.rsvps} going
                      </span>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <Link href={`/events/${event.id}`} className="btn-primary py-2 px-4 text-sm">
                        View Details
                      </Link>
                      {event.meetupUrl && (
                        <a href={event.meetupUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-4 text-sm">
                          RSVP on Meetup
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
