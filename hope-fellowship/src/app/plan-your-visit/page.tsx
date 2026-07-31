import type { Metadata } from "next";
import { VisitHero } from "@/components/visit/visit-hero";
import { VisitorPageNavigation } from "@/components/visit/visitor-page-navigation";
import { VisitInfoPanel } from "@/components/visit/visit-info-panel";
import { DirectionsPanel } from "@/components/visit/directions-panel";
import { BeforeYouArrive } from "@/components/visit/before-you-arrive";
import { FamilyInformationPanel } from "@/components/visit/family-information-panel";
import { VisitorAssistanceCard } from "@/components/visit/visitor-assistance-card";
import { VisitorFaq } from "@/components/visit/visitor-faq";
import { WatchOnlineInvitation } from "@/components/visit/watch-online-invitation";
import { VisitorConnectionPreview } from "@/components/visit/visitor-connection-preview";
import { FinalInvitation } from "@/components/home/final-invitation";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Plan your visit to Hope Fellowship Church at 23 Molynes Road, Kingston. Find Sunday worship times, directions and helpful visitor information.",
  alternates: {
    canonical: "/plan-your-visit",
  },
};

export default function PlanYourVisitPage() {
  return (
    <>
      <VisitHero
        eyebrow="Plan Your First Visit"
        heading="We Look Forward to Welcoming You"
        description="Find the essential information you need before joining us for Sunday Worship."
        primaryLabel="Get Directions"
        primaryHref={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("23 Molynes Road, Kingston 10, Jamaica")}`}
        primaryExternal
        secondaryLabel="Watch Online"
        secondaryHref="/watch"
      />
      <VisitorPageNavigation />
      <VisitInfoPanel />
      <Reveal>
        <DirectionsPanel />
      </Reveal>
      <Reveal>
        <BeforeYouArrive />
      </Reveal>
      <Reveal>
        <FamilyInformationPanel />
      </Reveal>
      <Reveal>
        <VisitorAssistanceCard />
      </Reveal>
      <Reveal>
        <VisitorFaq />
      </Reveal>
      <Reveal>
        <WatchOnlineInvitation />
      </Reveal>
      <Reveal>
        <VisitorConnectionPreview />
      </Reveal>
      <FinalInvitation />
    </>
  );
}
