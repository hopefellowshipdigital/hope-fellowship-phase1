import { HelpingHand, Mail, Phone } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";

export function VisitorAssistanceCard() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="visitor-assistance-heading">
      <PageContainer>
        <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] bg-primary/5 px-6 py-12 text-center sm:px-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <HelpingHand className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 id="visitor-assistance-heading" className="max-w-lg text-2xl font-bold text-text sm:text-3xl">
            Would You Like Assistance Before Your Visit?
          </h2>
          <p className="max-w-md text-sm text-muted-text sm:text-base">
            Our church team is happy to answer any questions before you come — reach out any way
            that&apos;s easiest for you.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call the Church
            </PrimaryButton>
            <SecondaryButton
              href={`mailto:${siteConfig.email}`}
              className="border-primary/20 text-primary hover:border-primary/50"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email the Church
            </SecondaryButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
