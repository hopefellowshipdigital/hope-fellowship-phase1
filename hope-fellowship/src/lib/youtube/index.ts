// Public surface of the YouTube service layer. Pages and components
// should import from "@/lib/youtube" rather than reaching into individual
// files, so the internal structure (client/channel/broadcasts/videos) can
// change without breaking call sites.

export { getBroadcastData } from "./broadcasts";
export { getRecentVideos, getVideoDetails } from "./videos";
export { resolveChannelId } from "./channel";
export type { NormalizedBroadcast, VideoSummary, BroadcastState, ManualBroadcastOverride } from "./types";
export { YouTubeConfigError, YouTubeApiError, YouTubeQuotaError, isQuotaError } from "./errors";
