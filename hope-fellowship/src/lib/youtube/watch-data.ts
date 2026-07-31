import "server-only";
import { getBroadcastData } from "./broadcasts";
import { resolveChannelId } from "./channel";
import { getRecentVideos } from "./videos";
import type { NormalizedBroadcast, VideoSummary } from "./types";

export interface WatchPageData {
  broadcast: NormalizedBroadcast;
  recentVideos: VideoSummary[];
}

/**
 * Everything the /watch page and homepage Watch section need, fetched
 * once per render rather than once per component — this is what keeps
 * the homepage + /watch from issuing separate, duplicate YouTube requests
 * (each individual call is still cached by client.ts, but centralizing
 * the call site keeps the data flow easy to reason about).
 */
export async function getWatchPageData(): Promise<WatchPageData> {
  const broadcast = await getBroadcastData();

  let recentVideos: VideoSummary[] = [];
  try {
    const channelId = await resolveChannelId();
    recentVideos = await getRecentVideos(channelId, 6);
  } catch {
    // No channel configured yet, or the request failed — the Watch page
    // handles an empty list gracefully, so this is a safe no-op.
    recentVideos = [];
  }

  return { broadcast, recentVideos };
}
