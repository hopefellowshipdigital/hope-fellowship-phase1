import { PageContainer } from "@/components/ui/layout-primitives";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { CountdownTimer } from "./countdown-timer";
import { AddToCalendarButton } from "./add-to-calendar-button";
import { formatJamaicaDateTime } from "@/lib/datetime";
import type { NormalizedBroadcast } from "@/lib/youtube/types";

interface WatchHeroProps {
  broadcast: NormalizedBroadcast;
}

const stateCopy = {
  offline: {
    heading: "Worship With Us From Anywhere",
    description:
      "Join Hope Fellowship for worship, the Word, and community — wherever you are. Watch our latest message below, or visit our YouTube channel for more.",
  },
  upcoming: {
    heading: "Join Our Next Service",
    description: "Our next service is coming up soon. Save your spot and join us online when it begins.",
  },
  live: {
    heading: "We're Live Right Now",
    description: "Worship with us right now, wherever you are.",
  },
  replay: {
    heading: "Watch the Service Replay",
    description: "Missed it live? Watch the replay whenever it suits you.",
  },
} as const;

/**
 * Watch page hero — status-driven heading, live badge, and (for
 * "upcoming") a countdown with Add to Calendar. This never claims the
 * church is live unless the state genuinely is "live".
 */
export function WatchHero({ broadcast }: WatchHeroProps) {
  const content = stateCopy[broadcast.state];
  const displayTitle = broadcast.title ?? content.heading;

  return (
    <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(246,211,50,0.10),_transparent_55%)]" />
      <PageContainer className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">Watch Online</p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{content.heading}</h1>
          {broadcast.state === "live" && <LiveStatusBadge status="live" />}
          {broadcast.state === "upcoming" && <LiveStatusBadge status="upcoming" />}
        </div>

        <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">{content.description}</p>

        {broadcast.state === "upcoming" && broadcast.title && (
          <p className="mt-5 text-sm font-semibold text-white/90">{displayTitle}</p>
        )}

        {broadcast.state === "upcoming" && broadcast.scheduledStartTime && (
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end">
            <CountdownTimer targetIso={broadcast.scheduledStartTime} />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-white/60">{formatJamaicaDateTime(broadcast.scheduledStartTime)}</p>
              <AddToCalendarButton
                title={broadcast.title ?? "Hope Fellowship Worship Service"}
                scheduledStartTime={broadcast.scheduledStartTime}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
              />
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
