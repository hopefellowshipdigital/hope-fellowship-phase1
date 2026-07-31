"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "@/components/ui/layout-primitives";
import { cn } from "@/lib/utils";

const links = [
  { label: "New Here", href: "/new-here" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  { label: "What to Expect", href: "/new-here#what-to-expect" },
  { label: "Watch Online", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

export function VisitorPageNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Visitor pages" className="border-b border-border bg-surface">
      <PageContainer>
        <ul className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href.split("#")[0] && !link.href.includes("#");
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-text hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </nav>
  );
}
