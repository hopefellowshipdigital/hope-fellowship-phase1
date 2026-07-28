import { PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { broadcastConfig } from "@/config/broadcast";
import { siteConfig } from "@/config/site";

const stateContent = {
  offline: {
    heading: "Worship With Us From Anywhere",
    copy: "Can't make it in person? Catch up on our latest message, or visit our YouTube channel for more.",
    mediaLabel: "Watch our latest message",
  },
  upcoming: {
    heading: "Join Our Next Service",
    copy: "Our next service is coming up soon — join us online when it begins.",
    mediaLabel: "Our next service will begin soon",
  },
  live: {
    heading: "We're Live — Join the Service Now",
    copy: "Wherever you are, you're part of the service. Join us right now.",
    mediaLabel: "We're live right now",
  },
  replay: {
    heading: "Watch the Service Replay",
    copy: "Missed it live? Watch the replay whenever it suits you.",
    mediaLabel: "Replay available now",
  },
} as const;

export function WatchPreviewSection() {
  const { state } = broadcastConfig;
  const content = stateContent[state];

  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20" aria-labelledby="watch-heading">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Watch Online
            </p>
            <h2 id="watch-heading" className="text-3xl font-bold sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 text-base text-primary-foreground/75 sm:text-lg">{content.copy}</p>

            {state === "live" ? (
              <>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/watch">Watch Live</PrimaryButton>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <TextButton href="/connect" className="text-primary-foreground hover:text-accent">
                    Connect
                  </TextButton>
                  <TextButton href="/prayer" className="text-primary-foreground hover:text-accent">
                    Request Prayer
                  </TextButton>
                  <TextButton href="/give" className="text-primary-foreground hover:text-accent">
                    Give
                  </TextButton>
                </div>
              </>
            ) : (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/watch">
                  {state === "replay" ? "Watch Replay" : state === "upcoming" ? "Watch Online" : "Latest Message"}
                </PrimaryButton>
                <SecondaryButton href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
                  Visit Our YouTube Channel
                </SecondaryButton>
              </div>
            )}
          </div>

          <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white/5 p-5">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-white/15 bg-black/20 text-primary-foreground/70">
              <PlayCircle className="h-12 w-12" aria-hidden="true" />
              <span className="text-sm font-medium">{content.mediaLabel}</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">
                {state === "upcoming" && broadcastConfig.upcomingTitle
                  ? broadcastConfig.upcomingTitle
                  : "Hope Fellowship Worship Service"}
              </p>
              {state === "live" && <LiveStatusBadge status="live" />}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
