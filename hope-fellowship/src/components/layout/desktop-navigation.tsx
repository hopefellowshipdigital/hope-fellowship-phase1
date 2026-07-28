"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {primaryNavigation.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
              item.emphasized
                ? "bg-accent text-accent-foreground hover:bg-accent-dark"
                : isActive
                  ? "bg-white/10 text-primary-foreground"
                  : "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
