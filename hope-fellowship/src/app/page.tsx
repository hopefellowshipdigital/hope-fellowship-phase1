import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServiceInfoSection } from "@/components/sections/service-info-section";
import { NewVisitorSection } from "@/components/sections/new-visitor-section";
import { WatchPreviewSection } from "@/components/sections/watch-preview-section";
import { LatestMessageSection } from "@/components/sections/latest-message-section";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { MinistriesSection } from "@/components/sections/ministries-section";
import { PrayerSection } from "@/components/sections/prayer-section";
import { CommunityImpactSection } from "@/components/sections/community-impact-section";
import { GivingSection } from "@/components/sections/giving-section";
import { StayConnectedSection } from "@/components/sections/stay-connected-section";
import { Reveal } from "@/components/ui/reveal";
import { SITE_MODE } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero mode={SITE_MODE} />
      <ServiceInfoSection />
      <Reveal>
        <NewVisitorSection />
      </Reveal>
      <WatchPreviewSection />
      <Reveal>
        <LatestMessageSection />
      </Reveal>
      <Reveal>
        <UpcomingEventsSection />
      </Reveal>
      <Reveal>
        <MinistriesSection />
      </Reveal>
      <Reveal>
        <PrayerSection />
      </Reveal>
      <Reveal>
        <CommunityImpactSection />
      </Reveal>
      <Reveal>
        <GivingSection />
      </Reveal>
      <Reveal>
        <StayConnectedSection />
      </Reveal>
    </>
  );
}
