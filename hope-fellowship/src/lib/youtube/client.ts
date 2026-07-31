import "server-only";
import { YouTubeApiError, YouTubeConfigError, YouTubeQuotaError } from "./errors";

// Server-only guard: this module reads `YOUTUBE_API_KEY`, which must never
// reach the browser. Importing "server-only" makes any accidental import
// from client code fail the build rather than silently bundling the key.

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

function getApiKey(): string {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    throw new YouTubeConfigError(
      "YOUTUBE_API_KEY is not set. YouTube-driven features will fall back to the manual/offline state until it is configured."
    );
  }
  return key;
}

interface YouTubeRequestOptions {
  /** Seconds to cache this specific request for via Next's fetch cache. */
  revalidateSeconds: number;
  /** Cache tags, so callers can selectively invalidate related requests. */
  tags?: string[];
}

/**
 * Low-level GET against the YouTube Data API v3. Every higher-level
 * function in this directory (channel.ts, broadcasts.ts, videos.ts) goes
 * through this so caching, error normalization, and key handling live in
 * exactly one place.
 */
export async function youtubeGet<T>(
  endpoint: string,
  params: Record<string, string>,
  options: YouTubeRequestOptions
): Promise<T> {
  const apiKey = getApiKey();

  const url = new URL(`${YOUTUBE_API_BASE}/${endpoint}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set("key", apiKey);

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      // Next.js Data Cache — this is what gives us quota-aware, shared
      // (not per-visitor) caching without any extra infrastructure. See
      // src/lib/youtube/README-caching.md for the full strategy.
      next: {
        revalidate: options.revalidateSeconds,
        tags: ["youtube", ...(options.tags ?? [])],
      },
    });
  } catch {
    throw new YouTubeApiError("Network request to YouTube Data API failed.");
  }

  if (!response.ok) {
    let reason: string | undefined;
    try {
      const body = (await response.json()) as {
        error?: { errors?: { reason?: string }[]; message?: string };
      };
      reason = body.error?.errors?.[0]?.reason;
      if (reason === "quotaExceeded" || reason === "dailyLimitExceeded") {
        throw new YouTubeQuotaError(body.error?.message ?? "YouTube API quota exceeded.");
      }
      throw new YouTubeApiError(
        body.error?.message ?? `YouTube API request failed with status ${response.status}.`,
        response.status,
        reason
      );
    } catch (err) {
      if (err instanceof YouTubeApiError) throw err;
      throw new YouTubeApiError(`YouTube API request failed with status ${response.status}.`, response.status);
    }
  }

  return (await response.json()) as T;
}
