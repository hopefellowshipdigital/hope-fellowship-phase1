import { CalendarPlus } from "lucide-react";
import { buildGoogleCalendarUrl } from "@/lib/datetime";
import { siteConfig } from "@/config/site";

interface AddToCalendarButtonProps {
  title: string;
  scheduledStartTime: string;
  className?: string;
}

/** Google Calendar "add event" link — no client JS needed, just a URL. */
export function AddToCalendarButton({ title, scheduledStartTime, className }: AddToCalendarButtonProps) {
  const href = buildGoogleCalendarUrl({
    title,
    startIso: scheduledStartTime,
    details: `Join Hope Fellowship Church online: ${siteConfig.url}/watch`,
    location: siteConfig.address,
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 sm:text-base"
      }
    >
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      Add to Calendar
    </a>
  );
}
