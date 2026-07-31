import { Calendar, PlayCircle } from "lucide-react";
import { YouTubeIcon } from "@/components/ui/social-icons";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { siteConfig } from "@/config/site";

/**
 * Shown in place of the video player when there is truly no video to show
 * at all (offline, and no latest upload is available yet) — a polished,
 * branded state rather than an empty box.
 */
export function OfflineVideoFallback() {
  const schedule = siteConfig.serviceSchedule[0];

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-black/30 px-6 text-center text-white/80">
      <PlayCircle className="h-12 w-12 text-white/40" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-white">Nothing live right now</p>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-white/60">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          Join us next {schedule.label} at {schedule.time}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <SecondaryButton
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="border-white/30 px-4 py-2 text-sm text-white hover:border-white/60"
        >
          <YouTubeIcon className="h-4 w-4" aria-hidden="true" />
          Visit YouTube Channel
        </SecondaryButton>
        <TextButton href="/sermons" className="justify-center text-white hover:text-accent">
          Explore Messages
        </TextButton>
        <PrimaryButton href="/plan-your-visit" className="bg-accent px-4 py-2 text-sm text-accent-foreground hover:bg-accent-dark">
          Plan Your Visit
        </PrimaryButton>
      </div>
    </div>
  );
}
