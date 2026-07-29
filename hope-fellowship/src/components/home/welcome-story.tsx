import { ArrowRight } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages } from "@/data/homepage-images";
import { siteConfig } from "@/config/site";

export function WelcomeStory() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="welcome-story-heading">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* Asymmetric, staggered image collage — one large image with two
              smaller offset tiles, rather than an equal card grid. */}
          <div className="relative">
            <PhotoSlot
              {...homepageImages.welcomeLarge}
              className="aspect-[4/5] w-full rounded-[var(--radius-lg)] shadow-lg sm:aspect-[5/6]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            <div className="absolute -bottom-8 -right-3 w-2/5 rounded-[var(--radius-md)] shadow-lg ring-4 ring-background sm:-right-4 sm:w-1/3">
              <PhotoSlot
                {...homepageImages.welcomeCandidOne}
                className="aspect-square w-full rounded-[var(--radius-md)]"
                sizes="200px"
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              New Here?
            </p>
            <h2
              id="welcome-story-heading"
              className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl"
            >
              More Than a Service. A Place to Belong.
            </h2>
            <p className="mt-4 text-base text-muted-text sm:text-lg">
              Whether you&apos;re exploring faith for the first time or looking for a new church
              home, there&apos;s a seat for you at Hope Fellowship. No pressure — just people glad
              you&apos;re here.
            </p>
            <p className="font-serif-accent mt-5 border-l-2 border-accent pl-4 text-base text-primary/90">
              &ldquo;{siteConfig.missionStatement}&rdquo;
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <TextButton href="/new-here" className="inline-flex items-center gap-1.5">
                New Here
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
              <TextButton href="/about" className="inline-flex items-center gap-1.5">
                Discover Our Story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
