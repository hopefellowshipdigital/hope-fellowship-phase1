import { Clock, MapPin, PlayCircle } from "lucide-react";
import { PrimaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";

export function SundayInfoPanel() {
  const schedule = siteConfig.serviceSchedule[0];
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <div className="relative z-10">
      <PageContainer>
        <div className="-mt-12 flex flex-col gap-6 rounded-[var(--radius-lg)] bg-ivory px-6 py-7 shadow-lg sm:-mt-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              This Sunday
            </p>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xl font-bold text-primary sm:text-2xl">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                {schedule.label} · {schedule.time}
              </span>
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-text">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {siteConfig.address}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <PrimaryButton href="/new-here" className="justify-center">
              Plan Your Visit
            </PrimaryButton>
            <TextButton
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center sm:justify-start"
            >
              Get Directions
            </TextButton>
            <TextButton href="/watch" className="inline-flex items-center justify-center gap-1.5 sm:justify-start">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Watch Online
            </TextButton>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
