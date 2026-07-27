import { Baby, CircleUserRound, Globe2, HandHeart, Music, Users } from "lucide-react";
import { FeatureCard } from "@/components/ui/cards";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { provisionalMinistries } from "@/data/ministries";
import type { MinistryCategory } from "@/types";

const iconMap: Record<MinistryCategory["icon"], typeof Baby> = {
  baby: Baby,
  users: Users,
  music: Music,
  "hand-heart": HandHeart,
  globe: Globe2,
  "circle-users": CircleUserRound,
};

export function MinistriesSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="ministries-heading">
      <PageContainer>
        <SectionHeading
          eyebrow="Find Your Place"
          title="Ministries for Every Season of Life"
          description="These categories are provisional and will be confirmed with the Hope Fellowship team."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {provisionalMinistries.map((ministry) => {
            const Icon = iconMap[ministry.icon];
            return (
              <FeatureCard
                key={ministry.id}
                icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                title={ministry.title}
                description={ministry.description}
                badge={ministry.isProvisional ? "Provisional" : undefined}
              />
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
