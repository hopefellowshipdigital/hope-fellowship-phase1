import { cn } from "@/lib/utils";

/**
 * DaybreakArc — the site's signature visual motif: a horizon line with a
 * rising glow, echoing "Hope" as dawn breaking and a coastline horizon
 * without leaning on literal palm-tree/flag iconography. Used once, large,
 * behind the hero — restraint keeps it a signature rather than a pattern.
 */
export function DaybreakArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <radialGradient id="daybreak-glow" cx="50%" cy="100%" r="75%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
          <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="daybreak-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="500" fill="url(#daybreak-glow)" />
      <path
        d="M 0 360 Q 600 260 1200 360"
        fill="none"
        stroke="url(#daybreak-line)"
        strokeWidth="2"
      />
    </svg>
  );
}
