import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { PhaseNotice, SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hope Fellowship Church.",
};

const contactDetails = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
];

export default function ContactPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question? We'd love to hear from you."
      />

      <PageContainer as="section" className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {contactDetails.map((detail) => (
            <ContentCard key={detail.label} className="flex flex-col items-center gap-3 text-center">
              <detail.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="text-sm font-bold text-text">{detail.label}</h2>
              <p className="text-sm text-muted-text">{detail.value}</p>
            </ContentCard>
          ))}
        </div>

        <div className="mt-6">
          <PhaseNotice>
            A validated contact form will be added in Phase 6. Until then, please use the
            placeholder details above once they&apos;re confirmed and replaced with real information.
          </PhaseNotice>
        </div>
      </PageContainer>
    </>
  );
}
