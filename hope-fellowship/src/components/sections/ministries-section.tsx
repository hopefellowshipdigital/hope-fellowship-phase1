import { Baby, CircleUserRound, Globe2, HandHeart, Music, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
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

interface MinistriesSectionProps {
  /** Hide the "Explore All Ministries" link when this section is already
   *  rendered on the Ministries page itself. */
  showExploreAction?: boolean;
}

export function MinistriesSection({ showExploreAction = true }: MinistriesSectionProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="ministries-heading">
      <PageContainer>
        <SectionHeading eyebrow="Find Your Place" title="Ministries for Every Season of Life" />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {provisionalMinistries.map((ministry) => {
            const Icon = iconMap[ministry.icon];
            return (
              <FeatureCard
                key={ministry.id}
                icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                title={ministry.title}
                description={ministry.description}
              />
            );
          })}
        </div>

        {showExploreAction && (
          <div className="mt-8 text-center">
            <TextButton href="/ministries" className="inline-flex items-center gap-1.5">
              Explore All Ministries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TextButton>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
