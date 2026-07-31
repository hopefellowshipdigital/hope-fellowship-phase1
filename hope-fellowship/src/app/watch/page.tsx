import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { WatchHero } from "@/components/watch/watch-hero";
import { VideoAndChatSection } from "@/components/watch/video-and-chat-section";
import { ViewerActionBar } from "@/components/watch/viewer-action-bar";
import { CurrentServiceInfo } from "@/components/watch/current-service-info";
import { PrayerSection } from "@/components/sections/prayer-section";
import { LatestVideosSection } from "@/components/watch/latest-videos-section";
import { NextServiceInfo, SubscribeInvitation } from "@/components/watch/service-schedule-sections";
import { getWatchPageData } from "@/lib/youtube/watch-data";

const baseTitle = "Watch Online | Hope Fellowship Church Jamaica";
const baseDescription =
  "Watch Hope Fellowship Church services online from Kingston, Jamaica. Join the livestream, request prayer, connect with the church and explore recent messages.";

// Revalidate the page itself frequently so the Next.js page cache doesn't
// outlive the underlying YouTube data cache (see src/lib/youtube for the
// actual quota-aware caching strategy — this is just the page shell).
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { broadcast } = await getWatchPageData();

  // Only build dynamic OG data when we have a real, specific broadcast to
  // describe — never invent a title/image when the data isn't there.
  const hasSpecificBroadcast = Boolean(broadcast.title && broadcast.thumbnail);

  return {
    title: baseTitle,
    description: baseDescription,
    openGraph: hasSpecificBroadcast
      ? {
          title: `${broadcast.title} | Hope Fellowship Church`,
          description: baseDescription,
          images: broadcast.thumbnail ? [{ url: broadcast.thumbnail }] : undefined,
        }
      : {
          title: baseTitle,
          description: baseDescription,
        },
  };
}

export default async function WatchPage() {
  const { broadcast, recentVideos } = await getWatchPageData();
  const isLive = broadcast.state === "live";

  return (
    <>
      <WatchHero broadcast={broadcast} />

      <div className="bg-midnight pb-4">
        <VideoAndChatSection broadcast={broadcast} />
        <PageContainer className="pb-14 sm:pb-16">
          <ViewerActionBar isLive={isLive} />
        </PageContainer>
      </div>

      <CurrentServiceInfo broadcast={broadcast} />
      <PrayerSection />
      <LatestVideosSection videos={recentVideos} />
      <NextServiceInfo />
      <SubscribeInvitation />
    </>
  );
}
