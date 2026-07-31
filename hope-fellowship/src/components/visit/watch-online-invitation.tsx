import { PlayCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { PageContainer } from "@/components/ui/layout-primitives";
import { LiveStatusBadge } from "@/components/ui/live-status-badge";
import { getBroadcastData } from "@/lib/youtube";
import { siteConfig } from "@/config/site";

const stateCopy = {
  offline: "Prefer to experience a service online first? Watch our latest message any time.",
  upcoming: "Our next service is coming up soon — join us online when it begins.",
  live: "We're live right now — join the service online this moment.",
  replay: "Missed the live service? Watch the replay whenever it suits you.",
} as const;

export async function WatchOnlineInvitation() {
  const { state } = await getBroadcastData();

  return (
    <section className="py-16 sm:py-20" aria-labelledby="watch-invitation-heading">
      <PageContainer>
        <div className="flex flex-col items-center gap-5 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-12 text-center shadow-sm sm:px-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
            <PlayCircle className="h-6 w-6" aria-hidden="true" />
          </div>
          {state === "live" && <LiveStatusBadge status="live" />}
          <h2 id="watch-invitation-heading" className="max-w-lg text-2xl font-bold text-text sm:text-3xl">
            Not Ready to Visit in Person Yet?
          </h2>
          <p className="max-w-md text-sm text-muted-text sm:text-base">{stateCopy[state]}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/watch" className="bg-primary text-primary-foreground hover:bg-primary-dark">
              Watch Online
            </PrimaryButton>
            <SecondaryButton
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary/20 text-primary hover:border-primary/50"
            >
              Visit Our YouTube Channel
            </SecondaryButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
