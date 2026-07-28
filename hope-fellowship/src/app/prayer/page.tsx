import type { Metadata } from "next";
import { PrayerSection } from "@/components/sections/prayer-section";
import { PageContainer } from "@/components/ui/layout-primitives";
import { SimplePageHero } from "@/components/sections/simple-page-hero";

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
        description="Whatever you're carrying, our prayer and pastoral teams want to walk with you. Reach out below and we'll be in touch."
      />

      <PrayerSection />

      <PageContainer as="section" className="pb-14 sm:pb-16">
        <p className="text-center text-sm text-muted-text">
          If you are experiencing a medical or safety emergency, please contact your local
          emergency services right away.
        </p>
      </PageContainer>
    </>
  );
}
