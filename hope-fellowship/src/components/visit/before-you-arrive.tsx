import { Clock, LogIn, Shirt } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { visitorConfig } from "@/config/visitor";
import { siteConfig } from "@/config/site";

export function BeforeYouArrive() {
  const items = [
    {
      icon: Clock,
      title: "Service Time",
      value: `${siteConfig.serviceTime}. ${visitorConfig.registrationRequired ? "Registration is required." : "No registration is required — simply come as you are able."}`,
    },
    {
      icon: LogIn,
      title: "Arrival",
      value:
        visitorConfig.arrivalGuidance ||
        "For specific arrival guidance, please contact the church team before your visit.",
    },
    {
      icon: Shirt,
      title: "Clothing",
      value: visitorConfig.dressGuidance,
    },
  ];

  return (
    <section className="py-16 sm:py-20" aria-label="Before you arrive">
      <PageContainer>
        <SectionHeading eyebrow="Getting Ready" title="Before You Arrive" />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-text">{item.value}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
