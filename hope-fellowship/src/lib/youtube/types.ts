// Shared types for the server-side YouTube integration. Every YouTube API
// response gets normalized into these shapes before it reaches any
// component — components never see raw YouTube API payloads.

/** The single source of truth for what the Watch Online experience shows. */
export type BroadcastState = "offline" | "upcoming" | "live" | "replay";

/**
 * A normalized, display-ready broadcast result. Whether this came from a
 * manual override, a live YouTube search, or the "latest upload" fallback,
 * every consumer (homepage, /watch, layout components) reads this same
 * shape and never needs to know where it came from.
 */
export interface NormalizedBroadcast {
  state: BroadcastState;
  videoId: string | null;
  title: string | null;
  description: string | null;
  thumbnail: string | null;
  channelTitle: string | null;
  /** ISO 8601 string, or null when not applicable/known. */
  scheduledStartTime: string | null;
  actualStartTime: string | null;
  actualEndTime: string | null;
  watchUrl: string | null;
  embedUrl: string | null;
  /** True when this result came from the manual override config rather
   *  than a live YouTube API lookup. Useful for admin/debug contexts. */
  isManualOverride: boolean;
  /** True when this is a last-resort branded fallback (no API data at
   *  all was available — missing key, quota exceeded, network failure). */
  isFallback: boolean;
}

/** A single item in the "recent videos" list on the Watch page. */
export interface VideoSummary {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string | null;
  publishedAt: string;
  watchUrl: string;
}

/** Manual override modes, matching the brief's required option set. */
export type ManualOverrideMode =
  | "auto"
  | "offline"
  | "upcoming"
  | "live"
  | "replay";

export interface ManualBroadcastOverride {
  mode: ManualOverrideMode;
  /** Required for "upcoming" / "live" / "replay"; optional for others. */
  videoId?: string;
  title?: string;
  /** ISO 8601 string — only meaningful for "upcoming". */
  scheduledStartTime?: string;
}
