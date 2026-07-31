import { ArrowRight } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";

const actions = [
  { label: "Connect With Us", href: "/connect" },
  { label: "Request Prayer", href: "/prayer" },
  { label: "Explore Ministries", href: "/ministries" },
];

export function VisitorConnectionPreview() {
  return (
    <section className="bg-muted/50 py-16 sm:py-20" aria-label="Stay connected after your visit">
      <PageContainer>
        <SectionHeading
          eyebrow="After Your Visit"
          title="Stay Connected After Your Visit"
          description="We would love to help you learn more about Hope Fellowship, request prayer and discover your next step."
        />
        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
          {actions.map((action) => (
            <TextButton key={action.href} href={action.href} className="inline-flex items-center gap-1.5">
              {action.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TextButton>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
