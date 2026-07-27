import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {primaryNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
            item.emphasized
              ? "bg-accent text-accent-foreground hover:bg-accent-dark"
              : "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
