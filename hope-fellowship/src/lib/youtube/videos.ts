import "server-only";
import { youtubeGet } from "./client";
import { resolveUploadsPlaylistId } from "./channel";
import { cacheDurations } from "@/config/service-windows";
import type { VideoSummary } from "./types";

interface PlaylistItemsResponse {
  items?: {
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      resourceId: { videoId: string };
      thumbnails?: { high?: { url: string }; medium?: { url: string }; default?: { url: string } };
    };
  }[];
}

function bestThumbnail(thumbnails?: {
  high?: { url: string };
  medium?: { url: string };
  default?: { url: string };
}): string | null {
  return thumbnails?.high?.url ?? thumbnails?.medium?.url ?? thumbnails?.default?.url ?? null;
}

/**
 * Returns up to `limit` of the channel's most recent uploads, via the
 * uploads playlist (1 unit) rather than search.list (100 units) — this is
 * the "quota-efficient method" the brief calls for.
 */
export async function getRecentVideos(channelId: string, limit = 6): Promise<VideoSummary[]> {
  const uploadsPlaylistId = await resolveUploadsPlaylistId(channelId);
  if (!uploadsPlaylistId) return [];

  const result = await youtubeGet<PlaylistItemsResponse>(
    "playlistItems",
    {
      part: "snippet",
      playlistId: uploadsPlaylistId,
      maxResults: String(limit),
    },
    { revalidateSeconds: cacheDurations.latestVideo, tags: ["recent-videos"] }
  );

  return (result.items ?? [])
    .filter((item) => Boolean(item.snippet.resourceId?.videoId))
    .map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: bestThumbnail(item.snippet.thumbnails),
      publishedAt: item.snippet.publishedAt,
      watchUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));
}

interface VideoListResponse {
  items?: {
    id: string;
    snippet: {
      title: string;
      description: string;
      channelTitle: string;
      publishedAt: string;
      thumbnails?: { high?: { url: string }; medium?: { url: string }; default?: { url: string } };
      liveBroadcastContent?: string;
    };
    liveStreamingDetails?: {
      scheduledStartTime?: string;
      actualStartTime?: string;
      actualEndTime?: string;
    };
  }[];
}

export interface VideoDetails {
  videoId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnail: string | null;
  publishedAt: string;
  scheduledStartTime: string | null;
  actualStartTime: string | null;
  actualEndTime: string | null;
}

/** Full details for a single, known video ID — used both for real
 *  YouTube results and to validate a manually-configured video ID. */
export async function getVideoDetails(videoId: string): Promise<VideoDetails | null> {
  const result = await youtubeGet<VideoListResponse>(
    "videos",
    { part: "snippet,liveStreamingDetails", id: videoId },
    { revalidateSeconds: cacheDurations.latestVideo, tags: [`video-${videoId}`] }
  );

  const item = result.items?.[0];
  if (!item) return null;

  return {
    videoId: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    channelTitle: item.snippet.channelTitle,
    thumbnail: bestThumbnail(item.snippet.thumbnails),
    publishedAt: item.snippet.publishedAt,
    scheduledStartTime: item.liveStreamingDetails?.scheduledStartTime ?? null,
    actualStartTime: item.liveStreamingDetails?.actualStartTime ?? null,
    actualEndTime: item.liveStreamingDetails?.actualEndTime ?? null,
  };
}
