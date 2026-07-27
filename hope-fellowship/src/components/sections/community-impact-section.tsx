import { GraduationCap, HeartHandshake, HomeIcon, Users2 } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";

const impactAreas = [
  { id: "outreach", title: "Outreach", icon: HeartHandshake },
  { id: "education", title: "Education Support", icon: GraduationCap },
  { id: "family", title: "Family Support", icon: HomeIcon },
  { id: "testimonies", title: "Testimonies", icon: Users2 },
];

export function CommunityImpactSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="community-impact-heading">
      <PageContainer>
        <SectionHeading
          eyebrow="Community Impact"
          title="Faith in Action, Beyond Our Walls"
          description="This section will showcase real outreach and community stories once they're supplied — shown here as a provisional layout."
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area) => (
            <div
              key={area.id}
              className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-border bg-muted/50 px-5 py-8 text-center"
            >
              <area.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-text">{area.title}</p>
              <p className="text-xs text-muted-text">Stories coming soon</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
