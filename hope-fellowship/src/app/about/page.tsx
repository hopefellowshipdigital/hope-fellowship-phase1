import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hope Fellowship Church's mission and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="About Us"
        title="Our Story & Mission"
        description={siteConfig.missionStatement}
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="flex flex-col gap-5">
          <PhaseNotice>
            A full doctrinal statement and church history have not been supplied yet and are
            intentionally left out rather than invented.
          </PhaseNotice>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-muted/50 p-6">
              <h2 className="text-base font-bold text-text">Our Beliefs</h2>
              <p className="mt-2 text-sm text-muted-text">[OFFICIAL DOCTRINAL STATEMENT]</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-base font-bold text-text">Our Leadership</h2>
              <p className="mt-2 text-sm text-muted-text">
                {siteConfig.pastorName} — Senior Pastor
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
