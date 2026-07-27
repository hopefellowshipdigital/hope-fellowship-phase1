"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AnnouncementBarProps {
  message: string;
}

/**
 * AnnouncementBar — dismissible for the current page visit (component
 * state only, not persisted). To disable it entirely, remove this
 * component from the layout rather than editing its content.
 */
export function AnnouncementBar({ message }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="section-container flex items-center justify-center gap-3 py-2.5 text-center text-sm">
        <p className="font-medium">{message}</p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-4 inline-flex h-7 w-7 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
