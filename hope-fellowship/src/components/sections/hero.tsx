import { Clock, MapPin } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { DaybreakArc } from "@/components/ui/daybreak-arc";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { siteConfig } from "@/config/site";
import type { SiteMode } from "@/types";

export function Hero({ mode }: { mode: SiteMode }) {
  const isLive = mode === "live";
  const schedule = siteConfig.serviceSchedule[0];

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <DaybreakArc className="absolute inset-0 h-full w-full" />

      <div className="section-container relative flex flex-col items-center gap-8 py-16 text-center sm:py-20 lg:py-28">
        {isLive ? (
          <LiveStatusBadge status="live" />
        ) : (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Welcome to Hope Fellowship
          </p>
        )}

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
          {isLive ? "We're Live — Join the Service Now" : "A Place to Worship, Connect and Grow"}
        </h1>

        <p className="max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          {isLive
            ? "Wherever you are, you're part of the service. Watch, worship and connect with us right now."
            : "Join a community of faith where lives are transformed through worship, fellowship, discipleship and service."}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {isLive ? (
            <>
              <PrimaryButton href="/watch">Watch Live</PrimaryButton>
              <SecondaryButton href="/prayer">Request Prayer</SecondaryButton>
            </>
          ) : (
            <>
              <PrimaryButton href="/new-here">Plan Your Visit</PrimaryButton>
              <SecondaryButton href="/watch">Watch Online</SecondaryButton>
            </>
          )}
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-primary-foreground/75 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
            {schedule.label} · {schedule.time}
          </span>
          <span className="hidden text-primary-foreground/30 sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            23 Molynes Road, Kingston
          </span>
        </div>

        <p className="text-sm font-semibold text-primary-foreground/60">You are welcome here.</p>
      </div>
    </section>
  );
}
