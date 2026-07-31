import type { ManualBroadcastOverride } from "@/lib/youtube/types";

/**
 * MANUAL BROADCAST OVERRIDE
 * -------------------------
 * Real live/upcoming/replay detection now comes from the YouTube Data API
 * (see src/lib/youtube/broadcasts.ts) — this file is only for manually
 * forcing a specific state, which is still useful for:
 *
 *   - Previewing a state before it happens naturally
 *   - Covering for a YouTube API outage or misconfiguration
 *   - Featuring a specific video regardless of what's actually live
 *
 * Until a secure admin dashboard exists (a future phase), this is edited
 * directly in this file and deployed like any other change.
 *
 * mode:
 *  - "auto"     → (default) use real YouTube detection. Ignores every
 *                 other field below.
 *  - "offline"  → force the offline/browse-latest-message experience.
 *  - "upcoming" → force the "starting soon" experience. Set videoId (if
 *                 known), title, and scheduledStartTime.
 *  - "live"     → force the live experience. Set videoId.
 *  - "replay"   → force the replay experience for a specific video. Set
 *                 videoId.
 */
export const manualOverride: ManualBroadcastOverride = {
  mode: "auto",
  videoId: "",
  title: "",
  scheduledStartTime: "",
};
