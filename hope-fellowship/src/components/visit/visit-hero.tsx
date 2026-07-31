import { Clock, MapPin } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { visitImages } from "@/data/visit-images";
import { siteConfig } from "@/config/site";

interface VisitHeroProps {
  eyebrow: string;
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel: string;
  secondaryHref: string;
  showRegistrationNote?: boolean;
}

export function VisitHero({
  eyebrow,
  heading,
  description,
  primaryLabel,
  primaryHref,
  primaryExternal,
  secondaryLabel,
  secondaryHref,
  showRegistrationNote,
}: VisitHeroProps) {
  const schedule = siteConfig.serviceSchedule[0];
  const hasPhoto = Boolean(visitImages.hero.photo);

  return (
    <section className="relative overflow-hidden bg-midnight">
      {!hasPhoto && (
        // No real photo yet — a confident solid navy hero with a subtle
        // gold glow reads as intentional design, unlike a pale branded
        // placeholder that would wash out under a dark overlay.
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(246,211,50,0.12),_transparent_55%)]" />
      )}

      <div className="relative flex min-h-[360px] items-end pb-14 pt-24 sm:min-h-[420px] sm:pb-16 sm:pt-28">
        <div className="section-container">
          <div className="max-w-xl text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              {heading}
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/75 sm:text-base">{description}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton
                href={primaryHref}
                {...(primaryExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {primaryLabel}
              </PrimaryButton>
              <SecondaryButton
                href={secondaryHref}
                className="border-white/40 text-white hover:border-white/70"
              >
                {secondaryLabel}
              </SecondaryButton>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-5">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                {schedule.label} · {schedule.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                23 Molynes Road, Kingston
              </span>
            </div>

            {showRegistrationNote && (
              <p className="mt-4 text-sm text-white/60">
                No registration required — you&apos;re welcome to simply come.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
