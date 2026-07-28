import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { PageContainer } from "@/components/ui/layout-primitives";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { broadcastConfig } from "@/config/broadcast";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Watch Online",
  description: "Watch Hope Fellowship's livestream and recent messages online.",
};

const stateCopy = {
  offline: {
    heading: "Worship With Us Live",
    description:
      "Join Hope Fellowship for worship, the Word, and community — wherever you are. Watch our latest message below, or visit our YouTube channel for more.",
    mediaLabel: "Watch our latest message",
  },
  upcoming: {
    heading: "Join Our Next Service",
    description: "Our next service is coming up soon. Join us online when it begins.",
    mediaLabel: "Our next service will begin soon",
  },
  live: {
    heading: "We're Live Right Now",
    description: "Worship with us right now, wherever you are.",
    mediaLabel: "We're live right now",
  },
  replay: {
    heading: "Watch the Service Replay",
    description: "Missed it live? Watch the replay whenever it suits you.",
    mediaLabel: "Replay available now",
  },
} as const;

export default function WatchPage() {
  const { state } = broadcastConfig;
  const content = stateCopy[state];

  return (
    <>
      <SimplePageHero eyebrow="Watch Online" title={content.heading} description={content.description}>
        {state === "live" && (
          <div className="mt-6">
            <LiveStatusBadge status="live" />
          </div>
        )}
      </SimplePageHero>

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-border bg-muted text-muted-text">
          <PlayCircle className="h-12 w-12" aria-hidden="true" />
          <span className="text-sm font-medium">{content.mediaLabel}</span>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/sermons" className="bg-primary text-primary-foreground hover:bg-primary-dark">
            Browse Sermons
          </PrimaryButton>
          <SecondaryButton
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/20 text-primary hover:border-primary/50"
          >
            Visit Our YouTube Channel
          </SecondaryButton>
        </div>
      </PageContainer>
    </>
  );
}
