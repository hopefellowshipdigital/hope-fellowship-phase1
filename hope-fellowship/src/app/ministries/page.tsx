import type { Metadata } from "next";
import { MinistriesSection } from "@/components/sections/ministries-section";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore ministries and find your place at Hope Fellowship.",
};

export default function MinistriesPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Ministries"
        title="Find Your Place"
        description="Every ministry below is a provisional category — real ministry names, leaders and meeting details will replace this content once confirmed."
      />

      <MinistriesSection />

      <PageContainer as="section" className="pb-14 sm:pb-16">
        <PhaseNotice>
          Full ministry management (leader contacts, meeting schedules, sign-ups) is planned for
          a later phase alongside the administrative dashboard.
        </PhaseNotice>
      </PageContainer>
    </>
  );
}
