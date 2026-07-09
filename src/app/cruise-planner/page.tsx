import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GenoaCruisePlanner } from "@/components/GenoaCruisePlanner";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/cruise-planner";
const description =
  "Build a personalised Italian Riviera cruise plan from Genoa. Enter your arrival and departure times, party size, interests, mobility, budget and travel style — get tailored excursions, guides and a realistic day plan.";

export const metadata = buildMetadata({
  title: "Italian Riviera Cruise Planner — Genoa Port Day Itinerary",
  description,
  path,
  keywords: ["Genoa cruise planner", "Italian Riviera cruise day plan", "Genoa port day itinerary", "Portofino from Genoa planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Italian Riviera Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Italian Riviera Cruise Planner", description, path })]} />
      <PageHero
        title="Italian Riviera Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial itinerary recommendations from Ultimate Italian Riviera Day to Portofino, Camogli, Ligurian food and independent train days."
        imageSrc={siteImages.hero.src}
        imageAlt={siteImages.hero.alt}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <GenoaCruisePlanner />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
