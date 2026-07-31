import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages } from "@/data/homepage-images";

interface FinalInvitationProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * FinalInvitation — the homepage's approved closing section. Every prop
 * defaults to the exact approved homepage copy/links, so using this
 * component elsewhere with no props renders identically; other pages can
 * override the copy/CTAs to avoid redundancy (e.g. not offering "Plan
 * Your Visit" on the page that already is Plan Your Visit).
 */
export function FinalInvitation({
  heading = "There Is a Place for You at Hope Fellowship.",
  description = "Whether you're joining us in person or online, we would love to connect with you.",
  primaryLabel = "Plan Your Visit",
  primaryHref = "/plan-your-visit",
  secondaryLabel = "Connect With Us",
  secondaryHref = "/connect",
}: FinalInvitationProps) {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-white sm:py-32" aria-labelledby="final-invitation-heading">
      <PhotoSlot {...homepageImages.finalInvitation} className="absolute inset-0 h-full w-full opacity-25" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/70" />

      <PageContainer className="relative text-center">
        <h2 id="final-invitation-heading" className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/75 sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
          <SecondaryButton href={secondaryHref} className="border-white/30 text-white hover:border-white/60">
            {secondaryLabel}
          </SecondaryButton>
        </div>
      </PageContainer>
    </section>
  );
}
