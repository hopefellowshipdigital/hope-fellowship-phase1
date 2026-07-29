import type { Metadata } from "next";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { SundayInfoPanel } from "@/components/home/sunday-info-panel";
import { WelcomeStory } from "@/components/home/welcome-story";
import { WatchExperience } from "@/components/home/watch-experience";
import { NextStepMosaic } from "@/components/home/next-step-mosaic";
import { FeaturedMessage } from "@/components/home/featured-message";
import { TransformationStory } from "@/components/home/transformation-story";
import { ChurchLifeSection } from "@/components/home/church-life-section";
import { FinalInvitation } from "@/components/home/final-invitation";
import { Reveal } from "@/components/ui/reveal";
import { SITE_MODE } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <CinematicHero mode={SITE_MODE} />
      <SundayInfoPanel />
      <Reveal>
        <WelcomeStory />
      </Reveal>
      <WatchExperience />
      <Reveal>
        <NextStepMosaic />
      </Reveal>
      <Reveal>
        <FeaturedMessage />
      </Reveal>
      <Reveal>
        <TransformationStory />
      </Reveal>
      <ChurchLifeSection />
      <FinalInvitation />
    </>
  );
}
