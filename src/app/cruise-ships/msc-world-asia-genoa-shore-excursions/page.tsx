import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getScheduleEntriesForShipYear } from "@/data/schedules";
import { MSC_WORLD_ASIA_PAGE_PATH, MSC_WORLD_ASIA_SHIP_NAME } from "@/data/ship-pages";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { MscWorldAsiaScheduleGroups } from "@/components/MscWorldAsiaScheduleGroups";
import { subjectImages } from "@/lib/images";
import type { FAQ } from "@/data/types";

const path = MSC_WORLD_ASIA_PAGE_PATH;
const PRODUCT_PATH = SIGNATURE_EXPERIENCE_PATH;
const ANALYTICS_ID = "msc-world-asia-genoa";

const faqs: FAQ[] = [
  {
    question: "Is Genoa a port of call for MSC World Asia in 2027?",
    answer:
      "Yes. MSC World Asia is scheduled for repeated Genoa calls during 2027. MSC itself lists the ship's Mediterranean programme from winter 2026, and our Genoa schedule contains the individual calls relevant to this page.",
  },
  {
    question: "Can I book a Genoa shore excursion independently of MSC?",
    answer:
      "Yes. Independent shore excursions are an alternative to cruise-line excursions. Check that the excursion is appropriate for your ship's arrival and departure times before booking.",
  },
  {
    question: "Where will I meet my Genoa excursion?",
    answer:
      "Use the meeting instructions supplied with your specific booking rather than relying on a generic location online. Genoa is a working cruise port and arrangements can vary.",
  },
  {
    question: "Will the excursion get me back to MSC World Asia on time?",
    answer:
      "The excursion is planned for cruise passengers and around the relevant port day. You should nevertheless check the specific tour details and your latest MSC World Asia itinerary before booking, particularly if MSC has changed the scheduled arrival or departure time.",
  },
  {
    question: "What happens if MSC World Asia changes its Genoa itinerary?",
    answer:
      "Contact us as soon as you know about the change. What happens next will depend on the timing and the terms applying to your booking.",
  },
  {
    question: "Should I explore Genoa or take a shore excursion?",
    answer:
      "Both can make an excellent cruise day. Genoa itself rewards independent exploration, particularly if you enjoy history, architecture and food. A shore excursion makes more sense if your priority is using your limited port time to see more of the Ligurian coast.",
  },
];

export const metadata = buildMetadata({
  title: "MSC World Asia Genoa Shore Excursions 2027 & 2028",
  description:
    "Cruising to Genoa on MSC World Asia? Plan your day ashore with Genoa shore excursions, port information and MSC World Asia Genoa dates for 2027 and 2028.",
  path,
  keywords: [
    "MSC World Asia Genoa",
    "MSC World Asia Genoa shore excursions",
    "MSC World Asia Genoa excursions",
    "MSC World Asia Genoa tours",
    "MSC World Asia Genoa port",
    "MSC World Asia Genoa 2027",
    "MSC World Asia Genoa 2028",
  ],
  image: subjectImages.portofino.src,
  imageAlt: subjectImages.portofino.alt,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Genoa Ship Schedules", path: "/ship-schedules/genoa" },
  { name: "MSC World Asia Genoa", path },
];

export default function MscWorldAsiaGenoaPage() {
  const dates2027 = getScheduleEntriesForShipYear("genoa", MSC_WORLD_ASIA_SHIP_NAME, 2027);
  const dates2028 = getScheduleEntriesForShipYear("genoa", MSC_WORLD_ASIA_SHIP_NAME, 2028);
  const hero = subjectImages.portofino;

  return (
    <div data-page={ANALYTICS_ID} data-analytics={ANALYTICS_ID}>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          webPageSchema({
            title: "MSC World Asia Genoa Shore Excursions",
            description:
              "Cruising to Genoa on MSC World Asia? Plan your day ashore with Genoa shore excursions, port information and MSC World Asia Genoa dates for 2027 and 2028.",
            path,
          }),
        ]}
      />

      <section className="relative overflow-hidden text-white">
        <img
          src={hero.src}
          alt={hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="section-eyebrow mb-3 text-coastal-100">MSC WORLD ASIA • GENOA</p>
          <h1 className="home-hero-heading max-w-3xl">MSC World Asia Genoa Shore Excursions</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Your day in Genoa deserves more than a coach window.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            MSC World Asia calls at Genoa throughout 2027 and 2028. If you&apos;re planning what to do when your ship
            arrives, this guide brings together the things that actually matter: your Genoa port day, what you can
            comfortably see, and our small-group shore excursion designed around cruise passengers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={PRODUCT_PATH} className="btn-accent" data-analytics-cta={`${ANALYTICS_ID}-hero-product`}>
              Explore our Genoa shore excursion
            </Link>
            <a
              href="#msc-world-asia-dates-2027"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Check MSC World Asia Genoa dates
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title mt-10">Arriving in Genoa on MSC World Asia?</h2>
          <div className="prose-body mt-6">
            <p>
              Genoa isn&apos;t simply a gateway port. Step beyond the cruise terminal and you&apos;re in one of
              Italy&apos;s great maritime cities, with grand palaces, narrow medieval lanes and the old harbour — while
              the Ligurian coast beyond Genoa opens the door to some of the most beautiful towns on the Italian Riviera.
            </p>
            <p>
              The challenge on a cruise day isn&apos;t finding somewhere worth visiting. It&apos;s deciding how much you
              can realistically fit into the hours you have ashore.
            </p>
            <p>
              That&apos;s why we&apos;ve built this page specifically for MSC World Asia passengers. We already track
              the ship&apos;s scheduled Genoa calls, so you can start with your cruise date and plan a day that works
              around the ship rather than trying to adapt a generic day tour.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">Our pick for MSC World Asia passengers</h2>
          <div className="card-signature mt-8 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[240px]">
                <img
                  src={subjectImages.highlights.src}
                  alt={subjectImages.highlights.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-maple-700">
                  SMALL-GROUP GENOA SHORE EXCURSION
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Discover the Italian Riviera from Genoa
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  Leave the crowds of the cruise terminal behind and make your Genoa call part of the holiday rather
                  than simply another day in port.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Our Genoa shore excursion is designed for cruise passengers who want to see more of this remarkable
                  stretch of Liguria without spending their day following a large coach group.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Travel in a small group, discover the Riviera beyond Genoa and enjoy a more personal way to spend
                  your hours ashore — with the day&apos;s timing built around returning to your ship.
                </p>
                <Link
                  href={PRODUCT_PATH}
                  className="btn-accent mt-8 inline-flex self-start"
                  data-analytics-cta={`${ANALYTICS_ID}-card-product`}
                >
                  View Genoa shore excursion
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Small group",
                text: "A more personal alternative to a large cruise-line coach.",
              },
              {
                title: "Cruise-day focused",
                text: "Planned for passengers visiting Genoa by cruise ship.",
              },
              {
                title: "Back-to-ship planning",
                text: "Your port time matters. The day is planned around your ship's call.",
              },
              {
                title: "Local experience",
                text: "See more than the view from the cruise terminal.",
              },
            ].map((item) => (
              <div key={item.title} className="card-feature">
                <h3 className="font-display text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">Why book independently from MSC World Asia?</h2>
          <div className="prose-body mt-6">
            <p>Booking an excursion outside the cruise line doesn&apos;t have to mean organising your whole day yourself.</p>
            <p>For many passengers, the attraction is simple: fewer people and a more personal day ashore.</p>
            <p>
              Instead of joining a full-size cruise coach, a small-group excursion gives you a chance to experience
              Genoa and the Italian Riviera at a different pace while still treating your ship&apos;s departure time as
              the most important deadline of the day.
            </p>
            <p>
              Before booking any independent excursion, always check the arrival and departure times shown in your
              current MSC itinerary. Cruise schedules can change, and the information supplied by MSC for your sailing
              should always take precedence.
            </p>
          </div>
        </div>
      </section>

      <section id="msc-world-asia-dates-2027" className="section-padding bg-coastal-50 scroll-mt-24">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">MSC World Asia Genoa dates – 2027</h2>
          <p className="section-subtitle">
            MSC World Asia is scheduled to call regularly at Genoa during 2027.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Find your sailing date below, then explore the Genoa excursion available for your port day.
          </p>
          <MscWorldAsiaScheduleGroups year={2027} entries={dates2027} productPath={PRODUCT_PATH} />
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            Can&apos;t see your date? Cruise schedules change. Check your current MSC itinerary and{" "}
            <Link href="/enquire" className="font-medium text-coastal-800 underline-offset-2 hover:underline">
              contact us
            </Link>{" "}
            if Genoa has been added to your sailing.
          </p>
        </div>
      </section>

      <section id="msc-world-asia-dates-2028" className="section-padding bg-white scroll-mt-24">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">MSC World Asia Genoa dates – 2028</h2>
          <p className="section-subtitle">
            Planning further ahead? These are the MSC World Asia calls currently held in our Genoa cruise schedule for
            2028.
          </p>
          <MscWorldAsiaScheduleGroups year={2028} entries={dates2028} productPath={PRODUCT_PATH} />
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            We keep future cruise schedules under review, but always confirm the latest timings in your MSC booking
            before making independent arrangements ashore.
          </p>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">How much can you see during a Genoa port day?</h2>
          <div className="prose-body mt-6">
            <p>Genoa can tempt you into trying to do too much.</p>
            <p>
              The historic centre, Porto Antico and palaces of Via Garibaldi can fill a day by themselves. Head along
              the Ligurian coast and another collection of possibilities opens up.
            </p>
            <p>
              For MSC World Asia passengers, we&apos;d rather recommend a good cruise day than the longest possible
              itinerary. The right choice depends on the hours your particular sailing gives you in Genoa.
            </p>
            <p>
              If your priority is exploring independently, stay closer to Genoa and give yourself time to enjoy the
              city. If you want to use the call to experience more of the Italian Riviera, that&apos;s where a
              well-planned shore excursion becomes much more valuable.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/guides/one-day-on-the-riviera" className="btn-secondary text-sm">
              One day on the Riviera
            </Link>
            <Link href="/cruise-port-guide" className="btn-secondary text-sm">
              Genoa cruise port guide
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">Starting your excursion from Genoa cruise port</h2>
          <div className="prose-body mt-6">
            <p>Genoa is a major Mediterranean cruise port and MSC has a particularly strong presence here.</p>
            <p>
              Your booking information will explain the meeting arrangements for your particular excursion. Don&apos;t
              rely on generic directions found elsewhere online: terminals, berths and operational arrangements can
              change.
            </p>
            <p>
              Once you&apos;ve booked, keep your ship name — MSC World Asia — and sailing date with your reservation so
              your excursion can be matched to the correct port call.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">What if MSC changes our arrival time?</h2>
          <div className="prose-body mt-6">
            <p>Cruise itineraries occasionally change before sailing or even during a cruise.</p>
            <p>
              If MSC changes your Genoa schedule, check the terms of your excursion and contact us as soon as you
              become aware of the change. We would much rather know early and help establish what is possible than have
              you worrying about it on the morning you arrive.
            </p>
          </div>
          <Link href="/enquire" className="btn-secondary mt-8 inline-flex text-sm">
            Contact us
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <FAQSection faqs={faqs} title="MSC World Asia Genoa FAQs" />
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-maple-300">YOUR MSC WORLD ASIA DAY IN GENOA</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Make your hours in Genoa count</h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            You&apos;re only here for the day. See what you can do beyond the cruise terminal and find the Genoa shore
            excursion that fits your MSC World Asia call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={PRODUCT_PATH} className="btn-accent" data-analytics-cta={`${ANALYTICS_ID}-final-product`}>
              Explore our Genoa shore excursion
            </Link>
            <Link
              href="/guides"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              View all Genoa cruise guides
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <p className="text-xs leading-relaxed text-gray-500">
            MSC World Asia is operated by MSC Cruises. This website is an independent shore-excursion guide and is not
            affiliated with, endorsed by or operated by MSC Cruises. Cruise schedules are provided for planning purposes
            and may change. Always confirm your current itinerary directly with your cruise line.
          </p>
          <div className="mt-10">
            <PlanningLinks heading="Keep planning your Genoa cruise" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href={PRODUCT_PATH} className="text-coastal-800 underline-offset-2 hover:underline">
              Ultimate Italian Riviera Day
            </Link>
            <Link href="/ship-schedules/genoa" className="text-coastal-800 underline-offset-2 hover:underline">
              Genoa ship schedules
            </Link>
            <Link href="/cruise-port-guide" className="text-coastal-800 underline-offset-2 hover:underline">
              Genoa cruise port guide
            </Link>
            <Link href="/guides/one-day-on-the-riviera" className="text-coastal-800 underline-offset-2 hover:underline">
              One day on the Riviera
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
