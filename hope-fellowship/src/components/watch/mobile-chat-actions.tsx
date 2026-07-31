import { ExternalLink, MessageCircle } from "lucide-react";
import { YouTubeIcon } from "@/components/ui/social-icons";
import { ShareServiceButton } from "./share-service-button";
import { siteConfig } from "@/config/site";

interface MobileChatActionsProps {
  videoId: string;
  title: string;
}

/**
 * Touch-friendly alternative to embedded live chat, shown only below the
 * desktop breakpoint (the DesktopLiveChat embed is hidden there via CSS).
 * Links open the YouTube app when available, falling back to the mobile
 * web site.
 */
export function MobileChatActions({ videoId, title }: MobileChatActionsProps) {
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const chatUrl = `https://www.youtube.com/live_chat?v=${videoId}`;

  return (
    <div className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-4 lg:hidden">
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark"
      >
        <span className="inline-flex items-center gap-2">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Open Live Chat on YouTube
        </span>
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-full border border-white/25 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
      >
        <span className="inline-flex items-center gap-2">
          <YouTubeIcon className="h-4 w-4" aria-hidden="true" />
          Open Stream in YouTube
        </span>
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
      <ShareServiceButton title={title} url={`${siteConfig.url}/watch`} />
    </div>
  );
}
