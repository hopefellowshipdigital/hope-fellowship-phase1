import { ArrowRight, PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { featuredSermon } from "@/data/sermons";
import { siteConfig } from "@/config/site";

export function FeaturedMessage() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="featured-message-heading">
      <PageContainer>
        <div className="grid gap-10 rounded-[var(--radius-lg)] bg-muted/50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:p-12">
          <div className="order-2 flex aspect-video items-center justify-center rounded-[var(--radius-md)] bg-primary/5 text-primary/50 lg:order-1">
            <PlayCircle className="h-14 w-14" aria-hidden="true" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              Featured Message
            </p>

            {featuredSermon ? (
              <>
                <h2 id="featured-message-heading" className="mt-3 text-3xl font-bold text-text sm:text-4xl">
                  {featuredSermon.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-text">
                  {featuredSermon.speaker} · {featuredSermon.date} · {featuredSermon.scripture}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href={featuredSermon.href}>Watch Message</PrimaryButton>
                  <SecondaryButton href="/sermons" className="border-primary/20 text-primary hover:border-primary/50">
                    Explore All Messages
                  </SecondaryButton>
                </div>
              </>
            ) : (
              <>
                <h2 id="featured-message-heading" className="mt-3 text-3xl font-bold text-text sm:text-4xl">
                  Catch Up On the Word
                </h2>
                <p className="mt-3 max-w-md text-base text-muted-text">
                  Watch the most recent message from Hope Fellowship, or explore our channel for
                  more.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <SecondaryButton
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary/20 text-primary hover:border-primary/50"
                  >
                    Visit Our YouTube Channel
                  </SecondaryButton>
                  <TextButton href="/sermons" className="inline-flex items-center gap-1.5">
                    Explore All Messages
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </TextButton>
                </div>
              </>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
