import { PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";

export function WatchPreviewSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20" aria-labelledby="watch-heading">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Watch Online
            </p>
            <h2 id="watch-heading" className="text-3xl font-bold sm:text-4xl">
              Worship With Us From Anywhere
            </h2>
            <p className="mt-4 text-base text-primary-foreground/75 sm:text-lg">
              Our livestream player will appear here once YouTube integration is complete in a
              later phase. For now, this preview shows how the Watch Online experience will look
              and feel.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/watch">Watch Live</PrimaryButton>
              <SecondaryButton href="/sermons">Latest Message</SecondaryButton>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white/5 p-5">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-dashed border-white/25 bg-black/20 text-primary-foreground/70">
              <PlayCircle className="h-12 w-12" aria-hidden="true" />
              <span className="text-sm font-medium">Livestream player — awaiting YouTube integration</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">[SERVICE TITLE]</p>
              <LiveStatusBadge status="offline" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
