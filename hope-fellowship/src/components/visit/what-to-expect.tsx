import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { whatToExpectItems } from "@/data/what-to-expect";
import { cn } from "@/lib/utils";

/**
 * WhatToExpectSection — an alternating left/right list rather than a grid
 * of identical cards, so the four items read as a deliberate sequence
 * rather than interchangeable tiles.
 */
export function WhatToExpectSection() {
  return (
    <section id="what-to-expect" className="py-16 sm:py-20" aria-label="What to expect">
      <PageContainer>
        <SectionHeading
          eyebrow="First-Time Visitor"
          title="What to Expect"
          description="A few things to help you feel at home before you arrive."
        />

        <div className="mt-10 flex flex-col gap-8">
          {whatToExpectItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col items-start gap-5 sm:flex-row sm:items-center",
                index % 2 === 1 && "sm:flex-row-reverse"
              )}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className={cn(index % 2 === 1 && "sm:text-right")}>
                <h3 className="text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-1.5 max-w-md text-sm text-muted-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
