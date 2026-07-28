import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hope Fellowship Church.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:+1${siteConfig.phone.replace(/\D/g, "")}`,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
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
              <a
                href={detail.href}
                {...(detail.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-muted-text hover:text-primary hover:underline"
              >
                {detail.value}
              </a>
            </ContentCard>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
