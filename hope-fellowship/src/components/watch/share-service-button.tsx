"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

interface ShareServiceButtonProps {
  title: string;
  url: string;
}

/**
 * Full-width, labeled share action (as opposed to the icon-only
 * ShareButton used elsewhere) — uses the Web Share API where available,
 * falling back to copying the link with visible confirmation text.
 */
export function ShareServiceButton({ title, url }: ShareServiceButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or share failed — fall through to clipboard copy.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access unavailable — nothing more we can do silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Share2 className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Link Copied" : "Share Service"}
    </button>
  );
}
