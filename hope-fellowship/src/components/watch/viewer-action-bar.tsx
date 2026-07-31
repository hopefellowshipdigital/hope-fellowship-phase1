import { HandHeart, HeartHandshake, Sparkles, Users } from "lucide-react";
import { YouTubeIcon } from "@/components/ui/social-icons";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/buttons";
import { siteConfig } from "@/config/site";

interface ViewerActionBarProps {
  /** Emphasizes Watch/Prayer/Connect/Give more strongly during a live service. */
  isLive: boolean;
}

/**
 * The interaction area near the video — every action links to a real,
 * working route (or the YouTube channel for Subscribe). No fake forms or
 * dead buttons.
 */
export function ViewerActionBar({ isLive }: ViewerActionBarProps) {
  // During a live service, Prayer/Connect/Give get the stronger primary
  // treatment; otherwise "I'm New" stays the single strongest action.
  const EmphasisButton = isLive ? PrimaryButton : SecondaryButton;
  const emphasisClass = isLive
    ? "bg-accent text-accent-foreground hover:bg-accent-dark"
    : "border-white/30 text-white hover:border-white/60";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <PrimaryButton href="/new-here" className="bg-accent text-accent-foreground hover:bg-accent-dark">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        I&apos;m New
      </PrimaryButton>
      <EmphasisButton href="/prayer" className={emphasisClass}>
        <HandHeart className="h-4 w-4" aria-hidden="true" />
        Request Prayer
      </EmphasisButton>
      <SecondaryButton href="/connect" className="border-white/30 text-white hover:border-white/60">
        <HeartHandshake className="h-4 w-4" aria-hidden="true" />
        I Made a Decision
      </SecondaryButton>
      <EmphasisButton href="/connect" className={emphasisClass}>
        <Users className="h-4 w-4" aria-hidden="true" />
        Connect With Us
      </EmphasisButton>
      <EmphasisButton href="/give" className={emphasisClass}>
        Give
      </EmphasisButton>
      <TextButton
        href={siteConfig.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-accent"
      >
        <YouTubeIcon className="h-4 w-4" aria-hidden="true" />
        Subscribe on YouTube
      </TextButton>
    </div>
  );
}
