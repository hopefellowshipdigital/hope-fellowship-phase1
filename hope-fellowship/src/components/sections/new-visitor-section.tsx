import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";

export function NewVisitorSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="new-visitor-heading">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-sm">
            <Image
              src="/images/congregation.jpg"
              alt="The Hope Fellowship Church sanctuary set up for service"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-dark">
              New Here?
            </p>
            <h2 id="new-visitor-heading" className="text-3xl font-bold text-text sm:text-4xl">
              You Are Welcome Here
            </h2>
            <p className="mt-4 text-base text-muted-text sm:text-lg">
              Whether you&apos;re exploring faith for the first time or looking for a new church
              home, we&apos;d love to have you. There&apos;s no dress code, no pressure — just a
              community ready to welcome you exactly as you are.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/new-here" className="bg-primary text-primary-foreground hover:bg-primary-dark">
                Plan Your Visit
              </PrimaryButton>
              <SecondaryButton href="/connect" className="border-primary/20 text-primary hover:border-primary/50">
                Connect With Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
