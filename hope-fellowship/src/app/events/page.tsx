import type { Metadata } from "next";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { SimplePageHero } from "@/components/sections/simple-page-hero";

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
        description="Upcoming services, programmes and community events at Hope Fellowship — announced here as they're scheduled."
      />

      <UpcomingEventsSection />
    </>
  );
}
