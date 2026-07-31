// Centralized "when do we expect to be live" configuration, used to widen
// or narrow YouTube polling frequency. Keeping this separate from the
// caching logic means adding a new recurring service later (e.g. a
// Wednesday night gathering) is a one-line change here, not a change to
// src/lib/youtube.
//
// Only the confirmed Sunday 9:00 AM service is configured — do not invent
// additional recurring services without confirmation from the church.

export const SITE_TIMEZONE = "America/Jamaica";

export interface ServiceWindow {
  /** 0 = Sunday, 1 = Monday, ... 6 = Saturday (matches Date#getDay in the
   *  site's configured timezone). */
  dayOfWeek: number;
  /** Window start, 24h "HH:mm", in SITE_TIMEZONE. */
  startTime: string;
  /** Window end, 24h "HH:mm", in SITE_TIMEZONE. */
  endTime: string;
  label: string;
}

export const serviceWindows: ServiceWindow[] = [
  {
    dayOfWeek: 0, // Sunday
    startTime: "08:30",
    endTime: "11:00",
    label: "Sunday Worship",
  },
];

/** Returns the current wall-clock time in SITE_TIMEZONE as
 *  { dayOfWeek, minutesSinceMidnight }, without pulling in a date library. */
function getCurrentJamaicaTime(now: Date): { dayOfWeek: number; minutesSinceMidnight: number } {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const weekdayShort = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = weekdays.indexOf(weekdayShort);

  // Intl's 24h format can report midnight as "24:00" in some environments —
  // normalize so minutesSinceMidnight always lands in [0, 1440).
  const normalizedHour = hour === 24 ? 0 : hour;

  return { dayOfWeek: dayOfWeek === -1 ? 0 : dayOfWeek, minutesSinceMidnight: normalizedHour * 60 + minute };
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** True when `now` falls inside any configured service window. */
export function isWithinServiceWindow(now: Date = new Date()): boolean {
  const current = getCurrentJamaicaTime(now);

  return serviceWindows.some((window) => {
    if (window.dayOfWeek !== current.dayOfWeek) return false;
    const start = timeToMinutes(window.startTime);
    const end = timeToMinutes(window.endTime);
    return current.minutesSinceMidnight >= start && current.minutesSinceMidnight <= end;
  });
}

/**
 * QUOTA STRATEGY
 * --------------
 * The YouTube Data API v3 free tier grants 10,000 units/day. A single
 * `search.list` call (used to detect live/upcoming broadcasts) costs 100
 * units; `videos.list`, `channels.list`, and `playlistItems.list` cost 1
 * unit each. Left unchecked, polling every visitor's page load would blow
 * through the daily quota in minutes.
 *
 * Instead, every YouTube request goes through Next.js's shared server-side
 * fetch cache (see src/lib/youtube/client.ts), keyed by request — not by
 * visitor. One cache entry serves every visitor until it expires. These
 * durations control how often that shared cache entry is allowed to go
 * stale and trigger a fresh API call:
 *
 *  - Outside a service window: checked infrequently, since a live
 *    broadcast outside the Sunday window would be unusual.
 *  - Inside a service window: checked much more often, since this is
 *    exactly when a broadcast is expected to start or end.
 */
export const cacheDurations = {
  /** Channel ID resolution (handle → UC... ID). Essentially static. */
  channelResolution: 60 * 60 * 24 * 7, // 7 days
  /** Latest-upload / "replay" fallback lookup. */
  latestVideo: 60 * 60, // 1 hour
  /** Live/upcoming broadcast detection, outside a service window. */
  liveCheckOutsideWindow: 60 * 20, // 20 minutes
  /** Live/upcoming broadcast detection, inside a service window. */
  liveCheckInsideWindow: 60 * 2, // 2 minutes
} as const;

/** Picks the right live-check cache duration for right now. */
export function getLiveCheckRevalidateSeconds(now: Date = new Date()): number {
  return isWithinServiceWindow(now) ? cacheDurations.liveCheckInsideWindow : cacheDurations.liveCheckOutsideWindow;
}
