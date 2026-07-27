import { Calendar, Clock, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { ContentCard } from "@/components/ui/cards";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { sampleEvents } from "@/data/events";

export function UpcomingEventsSection() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20" aria-labelledby="events-heading">
      <PageContainer>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="What's Happening" title="Upcoming Events" />
          <TextButton href="/events" className="shrink-0">
            View All Events
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </TextButton>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event) => (
            <ContentCard key={event.id} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-text">
                  Sample Content
                </span>
              </div>
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
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
