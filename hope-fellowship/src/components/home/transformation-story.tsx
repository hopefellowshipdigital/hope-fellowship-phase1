import { ArrowRight } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages } from "@/data/homepage-images";
import { siteConfig } from "@/config/site";

export function TransformationStory() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="transformation-heading">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <PhotoSlot
            {...homepageImages.transformation}
            className="aspect-[4/3] w-full rounded-[var(--radius-lg)] shadow-md"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              Community Impact
            </p>
            <h2 id="transformation-heading" className="mt-3 text-3xl font-bold text-text sm:text-4xl">
              Faith That Transforms Lives
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-text sm:text-lg">
              {siteConfig.missionStatement}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <TextButton href="/about" className="inline-flex items-center gap-1.5">
                Discover Our Mission
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
              <TextButton href="/connect" className="inline-flex items-center gap-1.5">
                Get Involved
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
