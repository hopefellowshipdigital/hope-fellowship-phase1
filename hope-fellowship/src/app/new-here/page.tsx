import type { Metadata } from "next";
import { Car, Clock, Shirt, Users } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PrimaryButton } from "@/components/ui/buttons";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "New Here",
  description: "Everything you need to know before your first visit to Hope Fellowship.",
};

const visitDetails = [
  { icon: Clock, title: "Service Time", value: siteConfig.serviceTime },
  { icon: Car, title: "Parking", value: "Parking details will be shared here soon." },
  { icon: Shirt, title: "What to Wear", value: "Come as you are — there's no dress code." },
  {
    icon: Users,
    title: "Children's Ministry",
    value: "Children's ministry details will be shared here soon.",
  },
];

export default function NewHerePage() {
  return (
    <>
      <SimplePageHero
        eyebrow="New Here"
        title="Plan Your Visit"
        description="We know visiting somewhere new can feel like a big step. Here's everything you need to know before you come — and you're always welcome to attend without any advance notice."
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

        <div className="mt-8 flex flex-col items-start gap-4 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-text">
            Have a question before you visit? We&apos;d love to hear from you.
          </p>
          <PrimaryButton
            href="/contact"
            className="shrink-0 bg-primary text-primary-foreground hover:bg-primary-dark"
          >
            Contact Us
          </PrimaryButton>
        </div>
      </PageContainer>
    </>
  );
}
