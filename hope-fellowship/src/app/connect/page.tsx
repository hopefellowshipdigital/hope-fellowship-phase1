import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PrimaryButton } from "@/components/ui/buttons";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

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
        description="Whatever step you're looking to take, we want to help you get there. Reach out any way that's easiest for you."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <ContentCard>
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

          <ContentCard className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-text">Reach Out Directly</h2>
            <p className="text-sm text-muted-text">
              Call, WhatsApp, or email us — we&apos;d love to hear from you and help you take your
              next step.
            </p>
            <a
              href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2.5 text-sm font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 text-sm font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <PrimaryButton
              href="/contact"
              className="mt-1 self-start bg-primary text-primary-foreground hover:bg-primary-dark"
            >
              Contact Us
            </PrimaryButton>
          </ContentCard>
        </div>
      </PageContainer>
    </>
  );
}
