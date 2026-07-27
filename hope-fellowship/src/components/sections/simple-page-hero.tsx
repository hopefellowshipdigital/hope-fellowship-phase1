import type { ReactNode } from "react";
import { PageContainer } from "@/components/ui/layout-primitives";

interface SimplePageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

/**
 * SimplePageHero — consistent heading pattern for the placeholder routes
 * built in Phase 1. Each page still gets a proper <h1>, description, and
 * spacing so the route is genuinely usable while its full feature set is
 * built out in a later phase.
 */
export function SimplePageHero({ eyebrow, title, description, children }: SimplePageHeroProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <PageContainer>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          {description}
        </p>
        {children}
      </PageContainer>
    </section>
  );
}

/** PhaseNotice — labels a section of a page as awaiting a later build phase. */
export function PhaseNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-dashed border-border bg-muted/60 px-5 py-4 text-sm text-muted-text">
      {children}
    </div>
  );
}
