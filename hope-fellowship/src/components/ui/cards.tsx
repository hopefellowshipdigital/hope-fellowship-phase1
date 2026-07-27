import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

/** ContentCard — the base surface used by every card-style component. */
export function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm transition-shadow duration-150 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

/** FeatureCard — icon + title + description, used for ministries and
 *  similar categorized listings. */
export function FeatureCard({ icon, title, description, badge, className }: FeatureCardProps) {
  return (
    <ContentCard className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-text">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-text">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-text">{description}</p>
      </div>
    </ContentCard>
  );
}
