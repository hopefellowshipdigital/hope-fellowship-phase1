import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-base font-bold text-text">Our Beliefs</h2>
            <p className="mt-2 text-sm text-muted-text">
              More about our story, beliefs and history will be shared here soon.
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-base font-bold text-text">Our Leadership</h2>
            <p className="mt-2 text-sm text-muted-text">
              {siteConfig.pastorName} — Senior Pastor
            </p>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
