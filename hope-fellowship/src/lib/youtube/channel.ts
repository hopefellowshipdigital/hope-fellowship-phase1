import "server-only";
import { youtubeGet } from "./client";
import { YouTubeConfigError } from "./errors";
import { cacheDurations } from "@/config/service-windows";

interface ChannelListResponse {
  items?: { id: string }[];
}

/**
 * Resolves the channel's stable UC... ID.
 *
 * Preference order:
 *  1. `YOUTUBE_CHANNEL_ID` env var, if set — this is the fast path and
 *     avoids an API call entirely.
 *  2. `YOUTUBE_CHANNEL_HANDLE` env var (e.g. "@hopefellowshipchurchjamaic5212"),
 *     resolved via the API and cached for a long time (see
 *     cacheDurations.channelResolution) since a channel's ID never changes.
 *
 * Throws YouTubeConfigError if neither is configured, or if the handle
 * can't be resolved.
 */
export async function resolveChannelId(): Promise<string> {
  const configuredId = process.env.YOUTUBE_CHANNEL_ID?.trim();
  if (configuredId) return configuredId;

  const handle = process.env.YOUTUBE_CHANNEL_HANDLE?.trim();
  if (!handle) {
    throw new YouTubeConfigError(
      "Neither YOUTUBE_CHANNEL_ID nor YOUTUBE_CHANNEL_HANDLE is configured."
    );
  }

  const normalizedHandle = handle.startsWith("@") ? handle : `@${handle}`;

  const result = await youtubeGet<ChannelListResponse>(
    "channels",
    { part: "id", forHandle: normalizedHandle },
    { revalidateSeconds: cacheDurations.channelResolution, tags: ["channel-id"] }
  );

  const id = result.items?.[0]?.id;
  if (!id) {
    throw new YouTubeConfigError(`Could not resolve a channel ID for handle "${normalizedHandle}".`);
  }

  return id;
}

interface ChannelContentDetailsResponse {
  items?: { contentDetails: { relatedPlaylists: { uploads: string } } }[];
}

/**
 * Resolves the channel's "uploads" playlist ID — the cheapest way to fetch
 * recent videos (1 unit via channels.list, vs. 100 units for search.list).
 */
export async function resolveUploadsPlaylistId(channelId: string): Promise<string | null> {
  const result = await youtubeGet<ChannelContentDetailsResponse>(
    "channels",
    { part: "contentDetails", id: channelId },
    { revalidateSeconds: cacheDurations.channelResolution, tags: ["channel-id"] }
  );

  return result.items?.[0]?.contentDetails.relatedPlaylists.uploads ?? null;
}
