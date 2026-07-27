import Image from "next/image";
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
          className="flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm sm:px-3 sm:py-2">
            <Image
              src="/brand/logo.png"
              alt={`${siteConfig.name} Church`}
              width={1095}
              height={715}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </span>
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
