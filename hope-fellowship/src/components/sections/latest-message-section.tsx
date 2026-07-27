import { PrimaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { SectionHeading } from "@/components/ui/layout-primitives";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { featuredSermon } from "@/data/sermons";
import { ArrowRight } from "lucide-react";

export function LatestMessageSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="latest-message-heading">
      <PageContainer>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Latest Message" title="Catch Up On the Word" />
          <TextButton href="/sermons" className="shrink-0">
            View All Sermons
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </TextButton>
        </div>

        <div className="mt-8 grid gap-8 rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-sm sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          <PlaceholderImage label={featuredSermon.thumbnailLabel} aspect="video" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-text">
              {featuredSermon.date} • {featuredSermon.scripture}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-text">{featuredSermon.title}</h3>
            <p className="mt-1 text-sm text-muted-text">{featuredSermon.speaker}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={featuredSermon.href} className="bg-primary text-primary-foreground hover:bg-primary-dark">
                Watch Message
              </PrimaryButton>
              <TextButton href="/sermons">View All Sermons</TextButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
