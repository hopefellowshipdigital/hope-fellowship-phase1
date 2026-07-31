import { Baby, Mail, Phone } from "lucide-react";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function FamilyInformationPanel() {
  return (
    <section className="bg-muted/50 py-16 sm:py-20" aria-labelledby="family-info-heading">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
            <Baby className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              Families & Children
            </p>
            <h2 id="family-info-heading" className="mt-2 text-2xl font-bold text-text sm:text-3xl">
              Families Are Welcome
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-text sm:text-base">
              Contact the church team before your visit for the latest information about children
              and family arrangements.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PrimaryButton href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </PrimaryButton>
              <SecondaryButton
                href={`mailto:${siteConfig.email}`}
                className="border-primary/20 text-primary hover:border-primary/50"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </SecondaryButton>
              <TextButton href="/ministries" className="inline-flex items-center gap-1.5">
                Explore Ministries
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TextButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
