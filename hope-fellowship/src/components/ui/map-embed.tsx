import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MapEmbedProps {
  className?: string;
}

/**
 * MapEmbed — a keyless Google Maps embed (no API key or billing setup
 * required) pointed at the confirmed church address. Lazy-loaded so it
 * doesn't slow down initial page load.
 */
export function MapEmbed({ className }: MapEmbedProps) {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;

  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-lg)] shadow-md", className)}>
      <iframe
        src={embedUrl}
        title={`Map showing ${siteConfig.name}'s location`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full border-0 sm:aspect-video"
      />
    </div>
  );
}
