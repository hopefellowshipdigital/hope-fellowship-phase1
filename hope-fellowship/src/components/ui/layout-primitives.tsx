import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

/** Consistent max-width + responsive padding wrapper used on every page. */
export function PageContainer({ children, className, as = "div" }: PageContainerProps) {
  const Tag = as;
  return <Tag className={cn("section-container", className)}>{children}</Tag>;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * SectionHeading — the eyebrow/title/description pattern repeated at the
 * top of nearly every homepage section. `tone="light"` is used on the
 * dark navy hero/live sections where text needs to read on a dark ground.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-accent-dark" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          tone === "dark" ? "text-text" : "text-primary-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg",
            tone === "dark" ? "text-muted-text" : "text-primary-foreground/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
