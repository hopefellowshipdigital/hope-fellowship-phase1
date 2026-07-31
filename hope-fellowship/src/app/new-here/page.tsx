import type { Metadata } from "next";
import { VisitHero } from "@/components/visit/visit-hero";
import { VisitorPageNavigation } from "@/components/visit/visitor-page-navigation";
import { WelcomeIntroduction } from "@/components/visit/welcome-introduction";
import { VisitInfoPanel } from "@/components/visit/visit-info-panel";
import { WhatToExpectSection } from "@/components/visit/what-to-expect";
import { VisitorJourney } from "@/components/visit/visitor-journey";
import { FamilyInformationPanel } from "@/components/visit/family-information-panel";
import { WatchOnlineInvitation } from "@/components/visit/watch-online-invitation";
import { VisitorFaq } from "@/components/visit/visitor-faq";
import { VisitorAssistanceCard } from "@/components/visit/visitor-assistance-card";
import { FinalInvitation } from "@/components/home/final-invitation";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "New Here",
  description:
    "Planning your first visit to Hope Fellowship Church in Kingston, Jamaica? Find Sunday worship times, location details, directions and information about what to expect.",
  alternates: {
    canonical: "/new-here",
  },
};

export default function NewHerePage() {
  return (
    <>
      <VisitHero
        eyebrow="New to Hope Fellowship?"
        heading="There Is a Place for You Here"
        description="Visiting a church for the first time can feel like a big step. We want to make your experience as welcoming, clear and comfortable as possible."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Watch Online"
        secondaryHref="/watch"
        showRegistrationNote
      />
      <VisitorPageNavigation />
      <Reveal>
        <WelcomeIntroduction />
      </Reveal>
      <VisitInfoPanel />
      <Reveal>
        <WhatToExpectSection />
      </Reveal>
      <Reveal>
        <VisitorJourney />
      </Reveal>
      <Reveal>
        <FamilyInformationPanel />
      </Reveal>
      <Reveal>
        <WatchOnlineInvitation />
      </Reveal>
      <Reveal>
        <VisitorFaq />
      </Reveal>
      <Reveal>
        <VisitorAssistanceCard />
      </Reveal>
      <FinalInvitation
        heading="Ready to Plan the Details?"
        description="Find service times, directions and everything else you need for your first visit."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
