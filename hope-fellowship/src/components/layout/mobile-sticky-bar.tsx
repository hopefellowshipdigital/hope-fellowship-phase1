import Link from "next/link";
import { HandHeart, MessageCircle, PlayCircle, Gift } from "lucide-react";
import { mobileQuickActions } from "@/data/navigation";
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
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-4">
        {mobileQuickActions.map((item, index) => {
          const Icon = iconMap[item.label] ?? PlayCircle;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-muted-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                  index === 0 && "text-primary"
                )}
              >
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
