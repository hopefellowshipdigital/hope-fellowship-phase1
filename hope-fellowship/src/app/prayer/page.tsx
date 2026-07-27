import type { Metadata } from "next";
import { PrayerSection } from "@/components/sections/prayer-section";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Prayer",
  description: "Request prayer or pastoral support from Hope Fellowship.",
};

export default function PrayerPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Prayer & Support"
        title="We Are Here for You"
        description="Whatever you're carrying, our prayer and pastoral teams want to walk with you. Submissions here will be kept more confidential than general connection-card data."
      />

      <PrayerSection />

      <PageContainer as="section" className="pb-14 sm:pb-16">
        <PhaseNotice>
          Functional, secure prayer request submission is planned for Phase 6, with restricted
          access for the pastoral and prayer teams only in the admin dashboard.
        </PhaseNotice>
      </PageContainer>
    </>
  );
}
