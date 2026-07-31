import { Car, MapPin, Navigation, Phone } from "lucide-react";
import { PrimaryButton, TextButton } from "@/components/ui/buttons";
import { CopyAddressButton } from "@/components/ui/copy-address-button";
import { MapEmbed } from "@/components/ui/map-embed";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";

export function DirectionsPanel() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section className="bg-muted/50 py-16 sm:py-20" aria-label="Directions and parking">
      <PageContainer>
        <SectionHeading eyebrow="Find Us" title="Directions & Parking" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text">Address</h3>
                <p className="mt-1 text-sm text-muted-text">{siteConfig.address}</p>
                <CopyAddressButton address={siteConfig.address} className="mt-1.5 text-primary" />
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Car className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text">Parking</h3>
                <p className="mt-1 text-sm text-muted-text">
                  For specific parking questions, please contact the church team before your visit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Navigation className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text">Getting Here</h3>
                <p className="mt-1 text-sm text-muted-text">
                  For public transportation guidance, please contact the church team before your
                  visit.
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={directionsUrl} target="_blank" rel="noopener noreferrer" className="self-start">
                Open in Google Maps
              </PrimaryButton>
              <TextButton
                href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-1.5 self-start"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call the Church
              </TextButton>
            </div>
          </div>

          <MapEmbed />
        </div>
      </PageContainer>
    </section>
  );
}
