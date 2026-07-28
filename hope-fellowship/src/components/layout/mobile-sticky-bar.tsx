"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HandHeart, MessageCircle, PlayCircle, Gift } from "lucide-react";
import { mobileQuickActions } from "@/data/navigation";
import { SITE_MODE } from "@/config/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof PlayCircle> = {
  Watch: PlayCircle,
  Connect: MessageCircle,
  Prayer: HandHeart,
  Give: Gift,
};

/**
 * MobileStickyBar — persistent bottom action bar on small screens only.
 * Positioned with padding-aware page spacing (see layout.tsx) so it never
 * overlaps page content or the footer.
 */
export function MobileStickyBar() {
  const pathname = usePathname();
  const isLive = SITE_MODE === "live";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-4">
        {mobileQuickActions.map((item) => {
          const Icon = iconMap[item.label] ?? PlayCircle;
          const isActive = pathname.startsWith(item.href);
          const isWatchLive = isLive && item.label === "Watch";
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-col items-center gap-1 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                  isWatchLive
                    ? "text-live"
                    : isActive
                      ? "text-primary"
                      : "text-muted-text"
                )}
              >
                {isWatchLive && (
                  <span className="absolute right-[calc(50%-20px)] top-1 h-2 w-2 rounded-full bg-live motion-safe:animate-pulse" />
                )}
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
