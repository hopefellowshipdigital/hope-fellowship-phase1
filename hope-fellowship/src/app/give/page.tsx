import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { SimplePageHero } from "@/components/sections/simple-page-hero";

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
        description="Your generosity helps Hope Fellowship reach our community and beyond, supporting worship, ministry, outreach and stewardship."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <ContentCard className="max-w-xl">
          <h2 className="text-lg font-bold text-text">Giving Information</h2>
          <p className="mt-2 text-sm text-muted-text">
            Online giving is coming soon. In the meantime, please contact us for giving
            information.
          </p>
        </ContentCard>
      </PageContainer>
    </>
  );
}
