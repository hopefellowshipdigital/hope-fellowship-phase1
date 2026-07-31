import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";

const steps = [
  {
    number: "1",
    title: "Choose a Sunday",
    description: "Join Hope Fellowship for Sunday Worship at 9:00 AM.",
  },
  {
    number: "2",
    title: "Get Directions",
    description: "Use the map and directions tools to find 23 Molynes Road.",
  },
  {
    number: "3",
    title: "Arrive and Connect",
    description: "A member of the church team can assist you when you arrive.",
  },
  {
    number: "4",
    title: "Take Your Next Step",
    description: "Explore ministries, request prayer, watch messages or stay connected.",
  },
];

export function VisitorJourney() {
  return (
    <section className="py-16 sm:py-20" aria-label="Your simple visitor journey">
      <PageContainer>
        <SectionHeading eyebrow="How It Works" title="Your Simple Visitor Journey" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  className="absolute left-6 top-12 hidden h-px w-full border-t border-dashed border-primary/25 lg:block"
                  aria-hidden="true"
                />
              )}
              <h3 className="mt-4 text-base font-bold text-text">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted-text">{step.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
