import { Clock, MapPin } from "lucide-react";
import { YouTubeIcon } from "@/components/ui/social-icons";
import { PrimaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";

/** Standing "when's the next service" reminder near the bottom of the page. */
export function NextServiceInfo() {
  const schedule = siteConfig.serviceSchedule[0];
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section className="bg-muted/60 py-14 sm:py-16" aria-labelledby="next-service-heading">
      <PageContainer className="flex flex-col items-center gap-4 text-center">
        <p id="next-service-heading" className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
          Join Us Next Time
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-2xl font-bold text-primary sm:text-3xl">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-5 w-5" aria-hidden="true" />
            {schedule.label} · {schedule.time}
          </span>
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-text hover:text-primary"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {siteConfig.address}
        </a>
      </PageContainer>
    </section>
  );
}

/** Final "don't miss the next one" nudge toward subscribing on YouTube. */
export function SubscribeInvitation() {
  return (
    <section className="bg-midnight py-14 text-white sm:py-16" aria-labelledby="subscribe-heading">
      <PageContainer className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent">
          <YouTubeIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 id="subscribe-heading" className="max-w-md text-2xl font-bold sm:text-3xl">
          Never Miss a Message
        </h2>
        <p className="max-w-sm text-sm text-white/70 sm:text-base">
          Subscribe to our YouTube channel to get notified the moment we go live.
        </p>
        <PrimaryButton
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 bg-accent text-accent-foreground hover:bg-accent-dark"
        >
          Subscribe on YouTube
        </PrimaryButton>
      </PageContainer>
    </section>
  );
}
