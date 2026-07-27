import { PageContainer } from "@/components/ui/layout-primitives";
import { ServiceInfoCard } from "@/components/ui/service-info-card";
import { serviceInfoCards } from "@/data/homepage";

export function ServiceInfoSection() {
  return (
    <section className="py-14 sm:py-16" aria-label="Service information">
      <PageContainer>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceInfoCards.map((card) => (
            <ServiceInfoCard key={card.id} data={card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
