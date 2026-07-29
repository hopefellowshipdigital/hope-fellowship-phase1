import Link from "next/link";
import { ArrowRight, Calendar, Gift, HandHeart, PlayCircle, Users } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages, type RecommendedPhoto } from "@/data/homepage-images";
import { cn } from "@/lib/utils";

function LargeTile({
  href,
  label,
  title,
  description,
  photo,
  tone,
}: {
  href: string;
  label: string;
  title: string;
  description: string;
  photo?: RecommendedPhoto;
  tone?: "navy";
}) {
  if (photo) {
    return (
      <Link
        href={href}
        className="group relative col-span-2 row-span-2 flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-[360px]"
      >
        <PhotoSlot
          {...photo}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent" />
        <div className="relative p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{label}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mt-1.5 max-w-xs text-sm text-white/75">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group relative col-span-2 row-span-2 flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] bg-primary p-6 shadow-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-primary-dark sm:min-h-[360px] sm:p-7",
        tone === "navy" && "bg-midnight hover:bg-midnight"
      )}
    >
      <Users className="h-9 w-9 text-accent" aria-hidden="true" />
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">{label}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-1.5 max-w-xs text-sm text-white/75">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

function CompactTile({
  href,
  icon: Icon,
  title,
  description,
  size = "medium",
}: {
  href: string;
  icon: typeof PlayCircle;
  title: string;
  description: string;
  size?: "medium" | "small";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col justify-between rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2",
        size === "medium" ? "min-h-[170px]" : "min-h-[140px]"
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-base font-bold text-text">{title}</h3>
        <p className="mt-1 text-xs text-muted-text">{description}</p>
      </div>
    </Link>
  );
}

export function NextStepMosaic() {
  return (
    <section className="bg-sand/40 py-20 sm:py-28" aria-label="Take your next step">
      <PageContainer>
        <SectionHeading eyebrow="Get Involved" title="Take Your Next Step" />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          <LargeTile
            href="/new-here"
            label="Start Here"
            title="New Here"
            description="Everything you need to know before your first visit."
            photo={homepageImages.welcomeCandidTwo}
          />
          <LargeTile
            href="/ministries"
            label="Belong"
            title="Find a Ministry"
            description="Discover where you can grow, serve and connect."
            tone="navy"
          />

          <CompactTile
            href="/watch"
            icon={PlayCircle}
            title="Watch Messages"
            description="Catch up online, anytime."
          />
          <CompactTile
            href="/events"
            icon={Calendar}
            title="Attend an Event"
            description="See what's happening next."
          />
          <CompactTile
            href="/prayer"
            icon={HandHeart}
            title="Request Prayer"
            description="We're here for you."
            size="small"
          />
          <CompactTile
            href="/give"
            icon={Gift}
            title="Give"
            description="Sow into the ministry."
            size="small"
          />
        </div>
      </PageContainer>
    </section>
  );
}
