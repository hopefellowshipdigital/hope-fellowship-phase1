import { Gift } from "lucide-react";
import { PrimaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";

export function GivingSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="giving-heading">
      <PageContainer>
        <div className="flex flex-col items-center gap-5 rounded-[var(--radius-lg)] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Gift className="h-7 w-7 text-accent" aria-hidden="true" />
          </div>
          <h2 id="giving-heading" className="max-w-xl text-3xl font-bold sm:text-4xl">
            Give Cheerfully, Sow Faithfully
          </h2>
          <p className="max-w-lg text-primary-foreground/75">
            Your generosity helps Hope Fellowship reach our community and beyond — supporting
            worship, ministry, outreach and stewardship. Online giving is coming soon.
          </p>
          <PrimaryButton href="/give">Giving Information</PrimaryButton>
        </div>
      </PageContainer>
    </section>
  );
}
