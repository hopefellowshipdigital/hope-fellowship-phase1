"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

interface DesktopLiveChatProps {
  videoId: string;
}

/**
 * YouTube live chat embed for desktop widths. Hidden entirely on mobile —
 * see mobile-chat-actions.tsx for the touch-friendly alternative.
 *
 * The chat embed requires an explicit `embed_domain` matching the actual
 * hosting domain, so this reads `window.location.hostname` at runtime
 * rather than hardcoding a preview URL that would break in production.
 */
export function DesktopLiveChat({ videoId }: DesktopLiveChatProps) {
  const [embedDomain, setEmbedDomain] = useState<string | null>(null);

  useEffect(() => {
    // window.location.hostname is only available client-side and cannot
    // be computed during server rendering — this one-time read after
    // mount is the standard SSR-safe pattern for browser-only globals.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmbedDomain(window.location.hostname);
  }, []);

  // Nothing to embed against yet (still on the server, or hostname not
  // available for some reason) — render nothing rather than a broken iframe.
  if (!embedDomain) {
    return (
      <div
        className="hidden aspect-[3/4] w-full animate-pulse rounded-[var(--radius-lg)] bg-white/5 lg:block motion-reduce:animate-none"
        aria-hidden="true"
      />
    );
  }

  const chatSrc = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${embedDomain}`;

  return (
    <div className="hidden h-full min-h-[420px] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-black/20 lg:flex">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm font-semibold text-white/80">
        <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
        Live Chat
      </div>
      <iframe
        src={chatSrc}
        title="Hope Fellowship live chat"
        className="w-full flex-1"
        onError={(e) => {
          // Live chat can be disabled per-broadcast — hide the iframe's
          // container cleanly rather than showing a broken embed.
          const container = e.currentTarget.parentElement;
          if (container) container.style.display = "none";
        }}
      />
    </div>
  );
}
