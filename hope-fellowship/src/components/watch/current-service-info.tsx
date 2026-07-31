import { Clock, MapPin } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { ContentCard } from "@/components/ui/cards";
import { siteConfig } from "@/config/site";
import { formatJamaicaDateTime } from "@/lib/datetime";
import type { NormalizedBroadcast } from "@/lib/youtube/types";

interface CurrentServiceInfoProps {
  broadcast: NormalizedBroadcast;
}

/** Details about the service currently being featured — live, replay, or
 *  the standing Sunday info when there's nothing specific to point to. */
export function CurrentServiceInfo({ broadcast }: CurrentServiceInfoProps) {
  const schedule = siteConfig.serviceSchedule[0];
  const hasSpecificService = (broadcast.state === "live" || broadcast.state === "replay") && broadcast.title;

  return (
    <PageContainer as="section" className="py-14 sm:py-16">
      <SectionHeading
        eyebrow={broadcast.state === "live" ? "Live Now" : broadcast.state === "replay" ? "Replay" : "About This Service"}
        title={hasSpecificService ? (broadcast.title as string) : "Sunday Worship at Hope Fellowship"}
      />

      <ContentCard className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 text-sm text-muted-text sm:text-base">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            {schedule.label} · {schedule.time}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteConfig.address}
          </span>
        </div>
        {broadcast.state === "replay" && broadcast.actualStartTime && (
          <p className="text-sm text-muted-text">Recorded {formatJamaicaDateTime(broadcast.actualStartTime)}</p>
        )}
      </ContentCard>
    </PageContainer>
  );
}
