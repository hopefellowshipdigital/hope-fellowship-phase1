import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { PrimaryButton } from "@/components/ui/buttons";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Watch Online",
  description: "Watch Hope Fellowship's livestream and recent messages online.",
};

export default function WatchPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Watch Online"
        title="Worship With Us Live"
        description="This will become a full digital worship environment — livestream, scripture, prayer requests and giving all in one place. For now, here's the foundation."
      >
        <div className="mt-6">
          <LiveStatusBadge status="offline" />
        </div>
      </SimplePageHero>

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-border bg-muted text-muted-text">
          <PlayCircle className="h-12 w-12" aria-hidden="true" />
          <span className="text-sm font-medium">Livestream player — awaiting YouTube integration</span>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PhaseNotice>
            Automatic live detection, countdown, live chat and replay are planned for the Watch
            Live phase (Phase 4).
          </PhaseNotice>
          <PrimaryButton href="/sermons" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary-dark">
            Browse Sermons
          </PrimaryButton>
        </div>
      </PageContainer>
    </>
  );
}
