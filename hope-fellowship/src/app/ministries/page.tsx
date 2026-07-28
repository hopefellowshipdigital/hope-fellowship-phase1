import type { Metadata } from "next";
import { MinistriesSection } from "@/components/sections/ministries-section";
import { SimplePageHero } from "@/components/sections/simple-page-hero";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore ministries and find your place at Hope Fellowship.",
};

export default function MinistriesPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Ministries"
        title="Find Your Place"
        description="There's a place for you to belong, grow and serve at Hope Fellowship."
      />
      <MinistriesSection showExploreAction={false} />
    </>
  );
}
