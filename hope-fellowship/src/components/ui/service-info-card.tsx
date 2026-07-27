import { Clock, MapPin, Navigation, PlayCircle } from "lucide-react";
import type { ServiceInfoCardData } from "@/types";
import { ContentCard } from "@/components/ui/cards";
import { TextButton } from "@/components/ui/buttons";
import { ArrowRight } from "lucide-react";

const iconMap = {
  clock: Clock,
  "map-pin": MapPin,
  "play-circle": PlayCircle,
  navigation: Navigation,
};

export function ServiceInfoCard({ data }: { data: ServiceInfoCardData }) {
  const Icon = iconMap[data.icon];

  return (
    <ContentCard className="flex h-full flex-col gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-text">{data.title}</h3>
        <p className="mt-1.5 text-sm text-muted-text">
          {data.description}
          {data.isPlaceholder && (
            <span className="ml-1.5 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-text align-middle">
              Placeholder
            </span>
          )}
        </p>
      </div>
      <TextButton href={data.actionHref} className="mt-auto">
        {data.actionLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </TextButton>
    </ContentCard>
  );
}
