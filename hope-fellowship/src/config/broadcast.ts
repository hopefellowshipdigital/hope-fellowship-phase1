import type { BroadcastDisplayState } from "@/types";

/**
 * WATCH ONLINE BROADCAST STATE
 * -----------------------------
 * Manually controls what the Watch Online areas of the site show, until
 * real YouTube API-driven live detection is built in a later phase.
 *
 * Change `state` to preview each experience:
 *  - "offline"  → normal day-to-day state; invites people to the latest
 *                 message and the YouTube channel.
 *  - "upcoming" → an upcoming service has a scheduled start time.
 *  - "live"     → a service is live right now.
 *  - "replay"   → a service just ended and the replay is available.
 */
export const broadcastConfig: {
  state: BroadcastDisplayState;
  featuredVideoId: string;
  upcomingTitle: string;
  scheduledStart: string;
} = {
  state: "offline",
  featuredVideoId: "",
  upcomingTitle: "",
  scheduledStart: "",
};
