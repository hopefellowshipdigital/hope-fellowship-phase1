import { PageContainer } from "@/components/ui/layout-primitives";
import { VideoPlayer } from "./video-player";
import { DesktopLiveChat } from "./desktop-live-chat";
import { MobileChatActions } from "./mobile-chat-actions";
import { OfflineVideoFallback } from "./offline-video-fallback";
import type { NormalizedBroadcast } from "@/lib/youtube/types";

interface VideoAndChatSectionProps {
  broadcast: NormalizedBroadcast;
}

/**
 * Video + chat layout: roughly 2/3 video, 1/3 chat on desktop when live,
 * collapsing to a single column (with mobile chat actions instead of an
 * embedded chat) below the desktop breakpoint.
 */
export function VideoAndChatSection({ broadcast }: VideoAndChatSectionProps) {
  const isLive = broadcast.state === "live";
  const hasVideo = Boolean(broadcast.videoId);
  const displayTitle = broadcast.title ?? "Hope Fellowship Worship Service";

  return (
    <PageContainer as="section" className="pb-14 sm:pb-16">
      {!hasVideo ? (
        <OfflineVideoFallback />
      ) : isLive ? (
        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-2">
            <VideoPlayer videoId={broadcast.videoId} title={displayTitle} watchUrl={broadcast.watchUrl} />
          </div>
          <div className="lg:col-span-1">
            <DesktopLiveChat videoId={broadcast.videoId as string} />
            <div className="mt-4">
              <MobileChatActions videoId={broadcast.videoId as string} title={displayTitle} />
            </div>
          </div>
        </div>
      ) : (
        <VideoPlayer videoId={broadcast.videoId} title={displayTitle} watchUrl={broadcast.watchUrl} />
      )}
    </PageContainer>
  );
}
