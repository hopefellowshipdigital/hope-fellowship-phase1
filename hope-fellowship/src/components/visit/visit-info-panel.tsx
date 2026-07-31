import { Clock, Mail, MapPin, Phone, PlayCircle } from "lucide-react";
import { PrimaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";

/**
 * VisitInfoPanel — the visitor-page equivalent of the homepage's
 * SundayInfoPanel, with additional call/email actions relevant to
 * someone planning a visit. Distinct component (not the homepage panel
 * with extra props) to keep each one's responsibility clear.
 */
export function VisitInfoPanel() {
  const schedule = siteConfig.serviceSchedule[0];
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section className="py-8 sm:py-10" aria-label="Quick visit information">
      <PageContainer>
        <div className="flex flex-col gap-6 rounded-[var(--radius-lg)] bg-ivory px-6 py-7 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              Quick Visit Information
            </p>
            <p className="mt-1.5 inline-flex items-center gap-2 text-xl font-bold text-primary sm:text-2xl">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              {schedule.label} · {schedule.time}
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-text">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {siteConfig.address}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:shrink-0 sm:justify-end">
            <PrimaryButton href={directionsUrl} target="_blank" rel="noopener noreferrer" className="justify-center">
              Get Directions
            </PrimaryButton>
            <TextButton
              href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1.5"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </TextButton>
            <TextButton href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </TextButton>
            <TextButton href="/watch" className="inline-flex items-center gap-1.5">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Watch Online
            </TextButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
