import { PlayCircle } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { EmptyState } from "@/components/ui/states";
import { formatShortDate } from "@/lib/datetime";
import type { VideoSummary } from "@/lib/youtube/types";

interface LatestVideosSectionProps {
  videos: VideoSummary[];
}

/** Recent uploads grid — handles an empty result cleanly, per the brief. */
export function LatestVideosSection({ videos }: LatestVideosSectionProps) {
  return (
    <PageContainer as="section" className="py-14 sm:py-16">
      <SectionHeading eyebrow="Recent Messages" title="Catch Up on What You Missed" />

      {videos.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="Recent messages will appear here soon"
            description="Once messages are uploaded to our YouTube channel, they'll show up here automatically."
          />
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.videoId}
              href={video.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm transition-shadow duration-150 hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {video.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external, unpredictable YouTube CDN URLs
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-text">
                    <PlayCircle className="h-8 w-8" aria-hidden="true" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <PlayCircle
                    className="h-10 w-10 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 text-sm font-bold text-text">{video.title}</p>
                <p className="mt-1.5 text-xs text-muted-text">{formatShortDate(video.publishedAt)}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
