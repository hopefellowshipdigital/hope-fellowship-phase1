import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  aspect?: "video" | "square" | "portrait";
  className?: string;
}

const aspectClasses: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/**
 * PlaceholderImage — stands in for real photography/video until Hope
 * Fellowship supplies official media. Always visibly labeled so it's
 * never mistaken for finished content.
 */
export function PlaceholderImage({ label, aspect = "video", className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-dashed border-border bg-muted text-muted-text",
        aspectClasses[aspect],
        className
      )}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-4 text-center text-sm font-medium">{label}</span>
    </div>
  );
}
