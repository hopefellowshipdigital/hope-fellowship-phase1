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
import { getBroadcastData } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Home",
};

// Keeps the homepage's live indicators reasonably fresh without refetching
// YouTube data on every single visitor request — the underlying YouTube
// calls are already cached more precisely in src/lib/youtube.
export const revalidate = 60;

export default async function HomePage() {
  // Fetched once here and passed down, so the homepage never issues more
  // than one YouTube-derived data request per render, however many
  // sections end up reflecting it.
  const broadcast = await getBroadcastData();

  return (
    <>
      <CinematicHero broadcast={broadcast} />
      <SundayInfoPanel />
      <Reveal>
        <WelcomeStory />
      </Reveal>
      <WatchExperience broadcast={broadcast} />
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
