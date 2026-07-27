import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { EmptyState } from "@/components/ui/states";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Browse Hope Fellowship's sermon library.",
};

export default function SermonsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Sermon Library"
        title="Watch & Revisit the Word"
        description="Search, filter and catch up on past messages. This library will connect to the church's YouTube channel in a later phase."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <EmptyState
          title="No sermons yet"
          description="The sermon library will populate automatically once YouTube integration is complete."
        />
        <div className="mt-6">
          <PhaseNotice>
            Search, filtering by speaker/series/scripture, and transcripts are planned for the
            Sermon Library phase (Phase 5).
          </PhaseNotice>
        </div>
      </PageContainer>
    </>
  );
}
