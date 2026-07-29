import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { homepageImages } from "@/data/homepage-images";

export function FinalInvitation() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-white sm:py-32" aria-labelledby="final-invitation-heading">
      <PhotoSlot {...homepageImages.finalInvitation} className="absolute inset-0 h-full w-full opacity-25" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/70" />

      <PageContainer className="relative text-center">
        <h2 id="final-invitation-heading" className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          There Is a Place for You at Hope Fellowship.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/75 sm:text-lg">
          Whether you&apos;re joining us in person or online, we would love to connect with you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/new-here">Plan Your Visit</PrimaryButton>
          <SecondaryButton href="/connect" className="border-white/30 text-white hover:border-white/60">
            Connect With Us
          </SecondaryButton>
        </div>
      </PageContainer>
    </section>
  );
}
