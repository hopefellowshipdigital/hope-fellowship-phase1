import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RecommendedPhoto } from "@/data/homepage-images";

interface PhotoSlotProps extends RecommendedPhoto {
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * PhotoSlot — the single place homepage photography renders. When a real
 * photo is configured, it renders as an optimized Next.js Image. When one
 * isn't yet available, it shows a refined branded placeholder (not a
 * broken-looking dashed box) with the recommended shot documented in the
 * corner, so it's obvious to a future editor what to shoot or source.
 */
export function PhotoSlot({ photo, recommended, className, sizes, priority }: PhotoSlotProps) {
  if (photo) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          style={{ objectFit: "cover", objectPosition: photo.focalPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-primary/8 via-sand to-muted p-6 text-center",
        className
      )}
    >
      <ImageIcon className="h-7 w-7 text-primary/40" aria-hidden="true" />
      <p className="max-w-[220px] text-xs font-medium text-muted-text">{recommended}</p>
    </div>
  );
}
