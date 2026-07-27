import type { ReactNode } from "react";
import { AlertTriangle, Inbox, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StateWrapperProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const wrapperClasses =
  "flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-border bg-muted/60 px-6 py-14 text-center";

/** EmptyState — shown where a list or record has nothing to display yet. */
export function EmptyState({ title, description, action, className }: StateWrapperProps) {
  return (
    <div className={cn(wrapperClasses, className)}>
      <Inbox className="h-8 w-8 text-muted-text" aria-hidden="true" />
      <h3 className="text-lg font-bold text-text">{title}</h3>
      {description && <p className="max-w-sm text-sm text-muted-text">{description}</p>}
      {action}
    </div>
  );
}

/** LoadingState — shown while data is being fetched from a future API. */
export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-14 text-center" role="status">
      <Loader2 className="h-7 w-7 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" />
      <span className="text-sm font-medium text-muted-text">{label}</span>
    </div>
  );
}

/** ErrorState — shown when a future API call or form submission fails. */
export function ErrorState({ title, description, action, className }: StateWrapperProps) {
  return (
    <div
      className={cn(wrapperClasses, "border-error/30 bg-error/5", className)}
      role="alert"
    >
      <AlertTriangle className="h-8 w-8 text-error" aria-hidden="true" />
      <h3 className="text-lg font-bold text-text">{title}</h3>
      {description && <p className="max-w-sm text-sm text-muted-text">{description}</p>}
      {action}
    </div>
  );
}
