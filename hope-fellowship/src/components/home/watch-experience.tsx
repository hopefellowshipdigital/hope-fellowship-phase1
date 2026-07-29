import { PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { ShareButton } from "@/components/ui/share-button";
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

export function WatchExperience() {
  const { state } = broadcastConfig;
  const content = stateContent[state];

  return (
    <section className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28" aria-labelledby="watch-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(246,211,50,0.10),_transparent_55%)]" />

      <PageContainer className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">
              Watch Online
            </p>
            <h2 id="watch-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 max-w-md text-base text-white/70 sm:text-lg">{content.copy}</p>

            {state === "live" ? (
              <>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/watch">Watch Live</PrimaryButton>
                  <SecondaryButton href="/give" className="border-white/30 text-white hover:border-white/60">
                    Give
                  </SecondaryButton>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  <TextButton href="/connect" className="text-white hover:text-accent">
                    Connect
                  </TextButton>
                  <TextButton href="/prayer" className="text-white hover:text-accent">
                    Request Prayer
                  </TextButton>
                </div>
              </>
            ) : (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/watch">
                  {state === "replay" ? "Watch Replay" : state === "upcoming" ? "Watch Online" : "Latest Message"}
                </PrimaryButton>
                <SecondaryButton
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Visit Our YouTube Channel
                </SecondaryButton>
              </div>
            )}
          </div>

          <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-white/10 bg-black/30 text-white/60">
              <PlayCircle className="h-12 w-12" aria-hidden="true" />
              <span className="text-sm font-medium">{content.mediaLabel}</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white/90">Hope Fellowship Worship Service</p>
              <div className="flex items-center gap-3">
                {state === "live" && <LiveStatusBadge status="live" />}
                <ShareButton
                  title="Hope Fellowship Worship Service"
                  url={`${siteConfig.url}/watch`}
                  className="text-white/60 hover:bg-white/10 hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
