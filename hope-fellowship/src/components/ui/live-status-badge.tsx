import { cn } from "@/lib/utils";

type LiveStatus = "live" | "upcoming" | "offline";

const statusConfig: Record<LiveStatus, { label: string; className: string; pulse: boolean }> = {
  live: {
    label: "Live Now",
    className: "bg-live text-white",
    pulse: true,
  },
  upcoming: {
    label: "Starting Soon",
    className: "bg-accent text-accent-foreground",
    pulse: false,
  },
  offline: {
    label: "Offline",
    className: "bg-muted text-muted-text",
    pulse: false,
  },
};

export function LiveStatusBadge({ status = "offline" }: { status?: LiveStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide",
        config.className
      )}
    >
      {config.pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
      )}
      {config.label}
    </span>
  );
}
