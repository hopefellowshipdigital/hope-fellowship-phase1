import type { Metadata } from "next";
import { Car, Clock, Shirt, Users } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "New Here",
  description: "Everything you need to know before your first visit to Hope Fellowship.",
};

const visitDetails = [
  { icon: Clock, title: "Service Time", value: siteConfig.serviceTime },
  { icon: Car, title: "Parking", value: "[PARKING INFORMATION]" },
  { icon: Shirt, title: "What to Wear", value: "Come as you are — there's no dress code." },
  { icon: Users, title: "Children's Ministry", value: "[CHILDREN'S MINISTRY INFORMATION]" },
];

export default function NewHerePage() {
  return (
    <>
      <SimplePageHero
        eyebrow="New Here"
        title="Plan Your Visit"
        description="We know visiting somewhere new can feel like a big step. Here's everything you need to know before you come — and you're always welcome to attend without filling out a form."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {visitDetails.map((detail) => (
            <ContentCard key={detail.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                <detail.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-bold text-text">{detail.title}</h2>
                <p className="mt-1 text-sm text-muted-text">{detail.value}</p>
              </div>
            </ContentCard>
          ))}
        </div>

        <div className="mt-8">
          <PhaseNotice>
            The optional Plan Your Visit form will be added once public forms are built (Phase 6).
            Until then, you can reach us from the Contact page — and you&apos;re always welcome to
            simply show up.
          </PhaseNotice>
        </div>
      </PageContainer>
    </>
  );
}
