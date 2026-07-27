import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-primary shadow-md">
      <div className="section-container flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex flex-col leading-tight text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="font-display text-xl font-extrabold sm:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {siteConfig.location}
          </span>
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
