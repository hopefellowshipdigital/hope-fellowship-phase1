import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { DaybreakArc } from "@/components/ui/daybreak-arc";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import type { SiteMode } from "@/types";

export function Hero({ mode }: { mode: SiteMode }) {
  const isLive = mode === "live";

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <DaybreakArc className="absolute inset-0 h-full w-full" />

      <div className="section-container relative flex flex-col items-center gap-10 py-16 text-center sm:py-20 lg:py-28">
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

        {/* Static fallback visual — keeps the hero meaningful before an
            official photo or video is supplied, and avoids autoplaying
            media on mobile connections. */}
        <div className="mt-4 w-full max-w-3xl sm:hidden">
          <PlaceholderImage
            label="Hope Fellowship service photo will appear here"
            aspect="video"
            className="border-white/20 bg-white/5 text-primary-foreground/70"
          />
        </div>
      </div>
    </section>
  );
}
