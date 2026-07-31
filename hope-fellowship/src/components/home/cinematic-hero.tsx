import { ArrowRight, Clock, MapPin } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages } from "@/data/homepage-images";
import { siteConfig } from "@/config/site";
import type { SiteMode } from "@/types";

export function CinematicHero({ mode }: { mode: SiteMode }) {
  const isLive = mode === "live";
  const schedule = siteConfig.serviceSchedule[0];
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section className="relative overflow-hidden bg-midnight">
      <PhotoSlot
        {...homepageImages.hero}
        priority
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
      />

      {/* Layered overlay: darkest at the top (for header legibility) and
          along the left/bottom (for text legibility), lighter toward the
          right so the photo itself still reads. */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/35 to-midnight/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/40 to-transparent" />

      <div className="relative flex min-h-[560px] items-end pb-16 pt-16 sm:min-h-[640px] sm:pb-20 sm:pt-20 lg:min-h-[700px]">
        <div className="section-container">
          <div className="max-w-xl text-left">
            {isLive ? (
              <LiveStatusBadge status="live" />
            ) : (
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm">
                Welcome to Hope Fellowship
              </p>
            )}

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              {isLive ? "We're Live — Join Us Now." : "Hope Lives Here."}
            </h1>

            <p className="mt-3 text-base font-semibold text-white/90 sm:text-lg">
              {isLive ? "The service is happening right now." : "Come worship, connect and grow with us."}
            </p>

            <p className="mt-4 max-w-md text-sm text-white/75 sm:text-base">
              {isLive
                ? "Wherever you are, you're part of the service. Watch, worship and connect with us right now."
                : "Experience a welcoming community where faith is strengthened, lives are transformed and everyone has a place to belong."}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {isLive ? (
                <>
                  <PrimaryButton href="/watch">Watch Live</PrimaryButton>
                  <SecondaryButton href="/prayer" className="border-white/40 text-white hover:border-white/70">
                    Request Prayer
                  </SecondaryButton>
                </>
              ) : (
                <>
                  <PrimaryButton href="/plan-your-visit">Plan Your Visit</PrimaryButton>
                  <SecondaryButton href="/watch" className="border-white/40 text-white hover:border-white/70">
                    Watch Online
                  </SecondaryButton>
                </>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-5">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                {schedule.label} · {schedule.time}
              </span>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                23 Molynes Road, Kingston
              </a>
            </div>

            {!isLive && (
              <a
                href="/new-here"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 underline-offset-4 hover:text-accent hover:underline"
              >
                New here? We would love to welcome you.
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
