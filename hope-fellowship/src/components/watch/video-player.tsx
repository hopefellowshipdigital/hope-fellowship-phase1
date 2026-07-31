"use client";

import { useState } from "react";
import { ExternalLink, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoId: string | null;
  title: string;
  watchUrl: string | null;
  className?: string;
}

/**
 * Reusable 16:9 YouTube player. Renders a skeleton until the iframe loads,
 * an accessible branded fallback when there's no valid video ID, and
 * always includes an "Open on YouTube" escape hatch. Uses
 * youtube-nocookie.com and does not autoplay with sound.
 */
export function VideoPlayer({ videoId, title, watchUrl, className }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);

  if (!videoId) {
    return (
      <div
        className={cn(
          "flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-white/10 bg-black/30 text-white/60",
          className
        )}
      >
        <PlayCircle className="h-12 w-12" aria-hidden="true" />
        <span className="text-sm font-medium">No video available right now</span>
      </div>
    );
  }

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] bg-black", className)}>
      {!loaded && (
        <div
          className="absolute inset-0 flex animate-pulse flex-col items-center justify-center gap-3 bg-white/5 text-white/50 motion-reduce:animate-none"
          aria-hidden="true"
        >
          <PlayCircle className="h-12 w-12" />
          <span className="text-sm font-medium">Loading video…</span>
        </div>
      )}
      <iframe
        src={embedSrc}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
      {watchUrl && (
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Open on YouTube
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
