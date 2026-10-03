import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { excursions } from "@/data/excursions";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Enquire / Contact",
  description: "Get in touch about Italian Riviera cruise planning — shore excursions, Portofino, Camogli and port-day questions. We're happy to help you plan.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquire", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Enquire / Contact", description: "Get in touch about Italian Riviera cruise planning.", path })]} />
      <PageHero title="Enquire / Contact" subtitle="Questions about your Italian Riviera port day, shore excursions or cruise planner? Tell us a little and we'll point you in the right direction." compact />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <EnquiryForm excursions={excursions.map((e) => ({ slug: e.slug, title: e.title }))} fallbackEmail={SITE.email} />
          <p className="mt-6 text-sm text-gray-600">Or email us directly at {SITE.email}</p>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
