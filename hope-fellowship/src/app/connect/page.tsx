import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Connect",
  description: "Take your next step and connect with Hope Fellowship.",
};

const nextSteps = [
  "Learn more about the church",
  "Become a member",
  "Join a ministry",
  "Volunteer",
  "Receive church updates",
];

export default function ConnectPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Connect"
        title="Take Your Next Step"
        description="Whatever step you're looking to take, we want to help you get there. The full connection form will be available once public forms are built."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <ContentCard className="max-w-2xl">
          <h2 className="text-lg font-bold text-text">Ways to Connect</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-text">
            {nextSteps.map((step) => (
              <li key={step} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
        </ContentCard>

        <div className="mt-6 max-w-2xl">
          <PhaseNotice>
            The full connection card (contact details, attendance info, areas of interest) will be
            built as a validated, secure form in Phase 6. In the meantime, please reach us via the
            Contact page.
          </PhaseNotice>
        </div>
      </PageContainer>
    </>
  );
}
