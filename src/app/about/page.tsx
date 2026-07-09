import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Genoa Shore Excursions",
  description: "About Genoa Shore Excursions — an independent Italian Riviera cruise planning authority for passengers arriving into Genoa on Mediterranean sailings.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Genoa Shore Excursions", description: "About Genoa Shore Excursions.", path })]} />
      <PageHero title="About Genoa Shore Excursions" subtitle="An independent planning authority built for cruise passengers — your gateway to the Italian Riviera from Genoa cruise port." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Genoa. Whether you have one day ashore or want to understand Portofino, Santa Margherita, Camogli and Ligurian food before you sail, our goal is to make your port day simple and confident.
            </p>
            <p>
              We focus on the practical decisions that shape a good Riviera cruise day: how far Portofino is from the terminal, whether Camogli or Santa Margherita suits your hours, when a guided excursion beats the train, and how to build a realistic return-to-ship buffer on busy summer coastal roads.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic Italy tourism. We highlight harbour walks, Ligurian food traditions, village logistics and honest editorial comparisons when you must choose one anchor destination. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Have a question we haven&apos;t answered? <a href="/enquire">Get in touch</a> and we&apos;ll help you plan.
            </p>
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
