"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * SiteHeader — transparent over the hero image, transitioning to a solid
 * navy background with backdrop blur once the page scrolls. The logo
 * always sits on its own white badge regardless of header state, so it
 * stays legible over any hero photo.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-primary/97 shadow-md backdrop-blur-sm"
          : "bg-gradient-to-b from-midnight/70 via-midnight/30 to-transparent"
      )}
    >
      <div className="section-container flex h-20 items-center justify-between sm:h-24">
        <Link
          href="/"
          className="flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="flex items-center rounded-lg bg-white px-3 py-2 shadow-md sm:px-3.5 sm:py-2.5">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={1095}
              height={715}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </span>
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
