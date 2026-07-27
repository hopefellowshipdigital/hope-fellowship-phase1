import type { Metadata } from "next";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Events",
  description: "See what's happening at Hope Fellowship.",
};

export default function EventsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Events"
        title="What's Happening"
        description="The cards below are sample content showing how events will be presented. Real Hope Fellowship events will replace them once the events feature is connected to the database."
      />

      <UpcomingEventsSection />

      <PageContainer as="section" className="pb-14 sm:pb-16">
        <PhaseNotice>
          Registration, calendar exports and WhatsApp sharing are planned for the Events phase
          (Phase 10).
        </PhaseNotice>
      </PageContainer>
    </>
  );
}
