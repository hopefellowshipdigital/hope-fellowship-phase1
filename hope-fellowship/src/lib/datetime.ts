import { SITE_TIMEZONE } from "@/config/service-windows";

/** Formats an ISO timestamp as "Sunday, March 3 · 9:00 AM" in Jamaica time. */
export function formatJamaicaDateTime(isoString: string): string {
  const date = new Date(isoString);

  const datePart = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIMEZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return `${datePart} · ${timePart}`;
}

/** Formats an ISO timestamp as a short date, e.g. "Mar 3, 2026". */
export function formatShortDate(isoString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIMEZONE,
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoString));
}

/** Builds a Google Calendar "add event" link for a scheduled service. */
export function buildGoogleCalendarUrl(options: {
  title: string;
  startIso: string;
  /** Defaults to 90 minutes after start when not given. */
  endIso?: string;
  details?: string;
  location?: string;
}): string {
  const start = new Date(options.startIso);
  const end = options.endIso ? new Date(options.endIso) : new Date(start.getTime() + 90 * 60 * 1000);

  const toGCalFormat = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: options.title,
    dates: `${toGCalFormat(start)}/${toGCalFormat(end)}`,
    details: options.details ?? "",
    location: options.location ?? "",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
