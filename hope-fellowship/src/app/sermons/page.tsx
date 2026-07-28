import type { Metadata } from "next";
import { SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { EmptyState } from "@/components/ui/states";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

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
        description="Catch up on past messages from Hope Fellowship. Our full sermon library is on its way — in the meantime, find our messages on YouTube."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <EmptyState
          title="Our sermon library is being prepared"
          description="Messages will appear here soon. For now, visit our YouTube channel to watch recent services."
          action={
            <SecondaryButton
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary/20 text-primary hover:border-primary/50"
            >
              Visit Our YouTube Channel
            </SecondaryButton>
          }
        />
      </PageContainer>
    </>
  );
}
