import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Give",
  description: "Support the ministry of Hope Fellowship through giving.",
};

export default function GivePage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Give"
        title="Give Cheerfully, Sow Faithfully"
        description="Your generosity helps Hope Fellowship reach our community and beyond. Real giving instructions will replace the placeholders below once confirmed by the church office."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <ContentCard className="max-w-xl">
          <h2 className="text-lg font-bold text-text">Giving Information</h2>
          <p className="mt-2 text-sm text-muted-text">[GIVING INFORMATION]</p>
        </ContentCard>

        <div className="mt-6 max-w-xl">
          <PhaseNotice>
            No payment processing is implemented in Phase 1. Any future online-giving integration
            will use a secure, approved payment provider and will never be built as a placeholder
            &ldquo;fake&rdquo; form.
          </PhaseNotice>
        </div>
      </PageContainer>
    </>
  );
}
