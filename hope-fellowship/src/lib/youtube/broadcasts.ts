import "server-only";
import { youtubeGet } from "./client";
import { resolveChannelId } from "./channel";
import { getVideoDetails, getRecentVideos } from "./videos";
import { manualOverride } from "@/config/broadcast";
import { getLiveCheckRevalidateSeconds } from "@/config/service-windows";
import type { NormalizedBroadcast } from "./types";

interface SearchListResponse {
  items?: { id: { videoId?: string } }[];
}

/** A branded "we have no data at all" result — the true last resort. */
function brandedOfflineFallback(): NormalizedBroadcast {
  return {
    state: "offline",
    videoId: null,
    title: null,
    description: null,
    thumbnail: null,
    channelTitle: null,
    scheduledStartTime: null,
    actualStartTime: null,
    actualEndTime: null,
    watchUrl: null,
    embedUrl: null,
    isManualOverride: false,
    isFallback: true,
  };
}

function embedUrlFor(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

function watchUrlFor(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * In-memory cache of the last successful broadcast resolution, used as a
 * fallback when a fresh lookup fails (e.g. a transient network error) —
 * see the brief's fallback order: manual video → cached previous result →
 * channel link → branded offline. This persists for the lifetime of a
 * given server instance; it's a best-effort layer on top of, not a
 * replacement for, Next's fetch-level Data Cache in client.ts, which is
 * what actually protects the YouTube quota across requests/instances.
 */
let lastKnownGoodBroadcast: NormalizedBroadcast | null = null;

async function searchBroadcast(channelId: string, eventType: "live" | "upcoming"): Promise<string | null> {
  const result = await youtubeGet<SearchListResponse>(
    "search",
    {
      part: "id",
      channelId,
      eventType,
      type: "video",
      order: "date",
      maxResults: "1",
    },
    { revalidateSeconds: getLiveCheckRevalidateSeconds(), tags: [`broadcast-${eventType}`] }
  );

  return result.items?.[0]?.id.videoId ?? null;
}

/** Builds a NormalizedBroadcast from a manual override, resolving/validating
 *  the referenced video against the real API where a video ID is given. */
async function resolveManualOverride(): Promise<NormalizedBroadcast | null> {
  if (manualOverride.mode === "auto") return null;

  if (manualOverride.mode === "offline") {
    return { ...brandedOfflineFallback(), isManualOverride: true, isFallback: false };
  }

  const videoId = manualOverride.videoId?.trim();
  let details = null;
  if (videoId) {
    try {
      details = await getVideoDetails(videoId);
    } catch {
      // Fall through — an invalid/unreachable manual video ID shouldn't
      // crash the page; treat it like no video ID was given.
      details = null;
    }
  }

  const base: NormalizedBroadcast = {
    state: manualOverride.mode,
    videoId: videoId || null,
    title: manualOverride.title || details?.title || null,
    description: details?.description ?? null,
    thumbnail: details?.thumbnail ?? null,
    channelTitle: details?.channelTitle ?? null,
    scheduledStartTime: manualOverride.scheduledStartTime || details?.scheduledStartTime || null,
    actualStartTime: details?.actualStartTime ?? null,
    actualEndTime: details?.actualEndTime ?? null,
    watchUrl: videoId ? watchUrlFor(videoId) : null,
    embedUrl: videoId ? embedUrlFor(videoId) : null,
    isManualOverride: true,
    isFallback: false,
  };

  return base;
}

/** The real, automatic detection flow: live → upcoming → latest upload. */
async function resolveAutoBroadcast(): Promise<NormalizedBroadcast> {
  const channelId = await resolveChannelId();

  const liveVideoId = await searchBroadcast(channelId, "live");
  if (liveVideoId) {
    const details = await getVideoDetails(liveVideoId);
    if (details) {
      return {
        state: "live",
        videoId: details.videoId,
        title: details.title,
        description: details.description,
        thumbnail: details.thumbnail,
        channelTitle: details.channelTitle,
        scheduledStartTime: details.scheduledStartTime,
        actualStartTime: details.actualStartTime,
        actualEndTime: null,
        watchUrl: watchUrlFor(details.videoId),
        embedUrl: embedUrlFor(details.videoId),
        isManualOverride: false,
        isFallback: false,
      };
    }
  }

  const upcomingVideoId = await searchBroadcast(channelId, "upcoming");
  if (upcomingVideoId) {
    const details = await getVideoDetails(upcomingVideoId);
    if (details) {
      return {
        state: "upcoming",
        videoId: details.videoId,
        title: details.title,
        description: details.description,
        thumbnail: details.thumbnail,
        channelTitle: details.channelTitle,
        scheduledStartTime: details.scheduledStartTime,
        actualStartTime: null,
        actualEndTime: null,
        watchUrl: watchUrlFor(details.videoId),
        embedUrl: embedUrlFor(details.videoId),
        isManualOverride: false,
        isFallback: false,
      };
    }
  }

  // Nothing live or upcoming — fall back to the latest upload. If that
  // upload was itself a completed livestream (has an actualEndTime),
  // present it as a "replay"; otherwise it's just the latest message and
  // the page shows the normal "offline" experience around it.
  const recent = await getRecentVideos(channelId, 1);
  const latest = recent[0];
  if (latest) {
    const details = await getVideoDetails(latest.videoId);
    const wasLivestream = Boolean(details?.actualEndTime);

    return {
      state: wasLivestream ? "replay" : "offline",
      videoId: latest.videoId,
      title: latest.title,
      description: latest.description,
      thumbnail: latest.thumbnail,
      channelTitle: details?.channelTitle ?? null,
      scheduledStartTime: null,
      actualStartTime: details?.actualStartTime ?? null,
      actualEndTime: details?.actualEndTime ?? null,
      watchUrl: latest.watchUrl,
      embedUrl: embedUrlFor(latest.videoId),
      isManualOverride: false,
      isFallback: false,
    };
  }

  // Channel resolved fine but has no videos at all yet.
  return brandedOfflineFallback();
}

/**
 * The single entry point every page should use. Resolves manual override
 * first, then falls back to real YouTube detection, then to the last
 * known-good result, then to a branded offline state — the site never
 * shows a broken or blank Watch experience.
 */
export async function getBroadcastData(): Promise<NormalizedBroadcast> {
  try {
    const manual = await resolveManualOverride();
    if (manual) {
      lastKnownGoodBroadcast = manual;
      return manual;
    }

    const auto = await resolveAutoBroadcast();
    lastKnownGoodBroadcast = auto;
    return auto;
  } catch {
    if (lastKnownGoodBroadcast) {
      return { ...lastKnownGoodBroadcast, isFallback: true };
    }
    return brandedOfflineFallback();
  }
}
