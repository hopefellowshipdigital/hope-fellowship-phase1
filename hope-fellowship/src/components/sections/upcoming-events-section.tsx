import { Calendar, Clock, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, TextButton } from "@/components/ui/buttons";
import { ContentCard } from "@/components/ui/cards";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { InstagramIcon } from "@/components/ui/social-icons";
import { upcomingEvents } from "@/data/events";
import { siteConfig } from "@/config/site";

/** Renders one event record — kept ready for when real events are added
 *  to src/data/events.ts. */
function EventCard({ event }: { event: (typeof upcomingEvents)[number] }) {
  return (
    <ContentCard className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-text">{event.title}</h3>
        <p className="mt-2 text-sm text-muted-text">{event.description}</p>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-muted-text">
        <li className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
          {event.date}
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
          {event.time}
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {event.location}
        </li>
      </ul>
      <TextButton href={event.href} className="mt-auto">
        Learn More
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </TextButton>
    </ContentCard>
  );
}

export function UpcomingEventsSection() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20" aria-label="Upcoming events">
      <PageContainer>
        {upcomingEvents.length > 0 ? (
          <>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="What's Happening" title="Upcoming Events" />
              <TextButton href="/events" className="shrink-0">
                View All Events
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-14 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-dark">
              What&apos;s Happening
            </p>
            <h2 id="events-heading" className="max-w-xl text-3xl font-bold text-text sm:text-4xl">
              Stay Connected to What&apos;s Happening
            </h2>
            <p className="max-w-md text-base text-muted-text">
              Upcoming services, programmes and community events will be shared here.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/connect" className="bg-primary text-primary-foreground hover:bg-primary-dark">
                Connect With Us
              </PrimaryButton>
              <TextButton
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="h-4 w-4" />
                Follow Us on Instagram
              </TextButton>
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
