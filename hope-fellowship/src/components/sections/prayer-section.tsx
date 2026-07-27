import { HandHeart, LifeBuoy, MessageCircleHeart } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { ContentCard } from "@/components/ui/cards";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { prayerActions } from "@/data/homepage";
import type { PrayerAction } from "@/types";
import { ArrowRight } from "lucide-react";

const iconMap: Record<PrayerAction["icon"], typeof HandHeart> = {
  "hand-heart": HandHeart,
  "life-buoy": LifeBuoy,
  "message-circle-heart": MessageCircleHeart,
};

export function PrayerSection() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20" aria-labelledby="prayer-heading">
      <PageContainer>
        <SectionHeading
          eyebrow="Prayer & Support"
          title="We Are Here for You"
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {prayerActions.map((action) => {
            const Icon = iconMap[action.icon];
            return (
              <ContentCard key={action.id} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text">{action.title}</h3>
                <p className="text-sm text-muted-text">{action.description}</p>
                <TextButton href={action.href} className="mt-1">
                  {action.title}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </TextButton>
              </ContentCard>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
