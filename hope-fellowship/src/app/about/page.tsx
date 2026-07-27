import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

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
        description="[OFFICIAL MISSION STATEMENT] — this page will share Hope Fellowship's story, beliefs and leadership once official content is supplied."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="flex flex-col gap-5">
          <PhaseNotice>
            Leadership names, doctrinal statements, and church history have not been supplied yet
            and are intentionally left out rather than invented. Placeholder sections below show
            where this content will go.
          </PhaseNotice>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-muted/50 p-6">
              <h2 className="text-base font-bold text-text">Our Beliefs</h2>
              <p className="mt-2 text-sm text-muted-text">[OFFICIAL DOCTRINAL STATEMENT]</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-muted/50 p-6">
              <h2 className="text-base font-bold text-text">Our Leadership</h2>
              <p className="mt-2 text-sm text-muted-text">[PASTOR NAME AND LEADERSHIP TEAM]</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
