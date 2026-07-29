import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { TextButton } from "@/components/ui/buttons";
import { socialIconMap } from "@/components/ui/social-icons";
import { homepageImages } from "@/data/homepage-images";
import { socialLinks } from "@/data/navigation";
import { upcomingEvents } from "@/data/events";
import { ArrowRight } from "lucide-react";

export function ChurchLifeSection() {
  // If real events are ever added to src/data/events.ts, this section
  // steps aside automatically — the Events page keeps its own full
  // listing regardless.
  if (upcomingEvents.length > 0) return null;

  return (
    <section className="bg-sand/40 py-20 sm:py-28" aria-label="Church life and community">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-3">
            <PhotoSlot
              {...homepageImages.churchLifeOne}
              className="aspect-square w-full rounded-[var(--radius-md)] shadow-sm"
              sizes="(min-width: 1024px) 22vw, 45vw"
            />
            <PhotoSlot
              {...homepageImages.churchLifeTwo}
              className="mt-6 aspect-square w-full rounded-[var(--radius-md)] shadow-sm"
              sizes="(min-width: 1024px) 22vw, 45vw"
            />
          </div>

          <div>
            <SectionHeading eyebrow="Church Life" title="Stay Connected to What's Happening" />
            <p className="mt-3 max-w-md text-base text-muted-text">
              Upcoming services, programmes and community moments — follow along on social media
              for the latest.
            </p>

            <ul className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary transition-colors hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <TextButton href="/connect" className="mt-6 inline-flex items-center gap-1.5">
              Connect With Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TextButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
