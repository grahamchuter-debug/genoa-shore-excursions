import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { ShipScheduleMonthGroups } from "@/components/ShipScheduleMonthGroups";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getScheduleEntriesForShipYear } from "@/data/schedules";
import { MSC_WORLD_EUROPA_PAGE_PATH, MSC_WORLD_EUROPA_SHIP_NAME } from "@/data/ship-pages";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";
import type { FAQ } from "@/data/types";

const path = MSC_WORLD_EUROPA_PAGE_PATH;
const PRODUCT_PATH = SIGNATURE_EXPERIENCE_PATH;
const ANALYTICS_ID = "msc-world-europa-genoa";
const SCHEDULE_ANALYTICS_SOURCE = "msc-world-europa-schedule";

const faqs: FAQ[] = [
  {
    question: "Where does MSC World Europa dock in Genoa?",
    answer:
      "MSC World Europa uses Genoa's cruise port. Exact berth and terminal arrangements can change between sailings, so check the information supplied by MSC for your cruise before arrival.",
  },
  {
    question: "Can you walk from Genoa cruise port into the city?",
    answer:
      "Genoa is one of the Mediterranean ports where exploring the city itself can be practical from the cruise area. How much you choose to walk will depend on what you want to see and your own mobility, so plan your route before leaving the ship.",
  },
  {
    question: "What can I do in Genoa from MSC World Europa?",
    answer:
      "You can spend your port day exploring Genoa itself or use the call to travel beyond the city and experience more of the Italian Riviera. The best choice depends on your sailing times and what you most want from the day.",
  },
  {
    question: "Can I book a Genoa shore excursion independently of MSC?",
    answer:
      "Yes. Independent excursions are an alternative to cruise line excursions. Check that the tour fits comfortably within the current arrival and departure times for your MSC World Europa sailing before booking.",
  },
  {
    question: "How do I know if I have enough time for a Genoa excursion?",
    answer:
      "Start with the latest arrival and departure times in your MSC booking. Remember that your usable time ashore will be shorter than the total time shown in port because you need time to leave the ship and return before sailing.",
  },
  {
    question: "What happens if MSC World Europa changes its Genoa schedule?",
    answer:
      "If you have already arranged an excursion, contact us as soon as you become aware of a significant itinerary or timing change. What happens next will depend on the change and the terms applying to your booking.",
  },
  {
    question: "Is it better to explore Genoa or visit the Italian Riviera?",
    answer:
      "If you enjoy historic streets, architecture and exploring independently, Genoa can easily reward a day ashore. If seeing more of the Ligurian coast is a priority, a planned excursion can help you make better use of your limited port time.",
  },
];

export const metadata = buildMetadata({
  title: "MSC World Europa Genoa Port Guide & Shore Excursions 2027 2028",
  description:
    "Sailing to Genoa on MSC World Europa? Find port information, what to do ashore, independent shore excursion options and your Genoa dates for 2027 and 2028.",
  path,
  keywords: [
    "MSC World Europa Genoa",
    "MSC World Europa Genoa port",
    "MSC World Europa Genoa shore excursions",
    "MSC World Europa Genoa excursions",
    "MSC World Europa Genoa cruise port",
    "MSC World Europa Genoa 2027",
    "MSC World Europa Genoa 2028",
  ],
  image: subjectImages.port.src,
  imageAlt: subjectImages.port.alt,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Genoa Ship Schedules", path: "/ship-schedules/genoa" },
  { name: "MSC World Europa Genoa", path },
];

const planningPanel = [
  { label: "Ship", value: "MSC World Europa" },
  { label: "Port", value: "Genoa, Italy" },
  {
    label: "Your choice",
    value: "Explore Genoa independently or use your port day to see more of the Italian Riviera",
  },
  {
    label: "Our approach",
    value: "Small group shore excursion planned around cruise passengers",
  },
  {
    label: "Most important",
    value: "Always check the latest arrival and departure times shown in your MSC itinerary",
  },
];

const stayInGenoa = [
  "Explore at your own pace",
  "Discover the historic centre",
  "Spend time around the old harbour",
  "Stop when somewhere catches your eye",
  "A good choice if you want a relaxed city day",
];

const seeRiviera = [
  "Travel beyond Genoa",
  "Make more of a full port day",
  "Transport is organised for you",
  "Travel in a smaller group rather than a large cruise coach",
  "A good choice if the Riviera is high on your holiday list",
];

const portDayCards = [
  {
    title: "A shorter Genoa call",
    text: "Keep your plans relatively simple. Exploring Genoa itself can make more sense than spending a large part of the day travelling.",
  },
  {
    title: "A comfortable full port day",
    text: "This gives you more freedom to look beyond Genoa and consider using the call to experience another part of Liguria.",
  },
  {
    title: "The Riviera is your priority",
    text: "If seeing the Italian Riviera is one of the reasons you chose this cruise, a planned shore excursion can help you use the hours available more effectively.",
  },
];

export default function MscWorldEuropaGenoaPage() {
  const dates2027 = getScheduleEntriesForShipYear("genoa", MSC_WORLD_EUROPA_SHIP_NAME, 2027);
  const dates2028 = getScheduleEntriesForShipYear("genoa", MSC_WORLD_EUROPA_SHIP_NAME, 2028);
  const hero = subjectImages.port;

  return (
    <div data-page={ANALYTICS_ID} data-analytics={ANALYTICS_ID}>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          webPageSchema({
            title: "MSC World Europa in Genoa",
            description:
              "Sailing to Genoa on MSC World Europa? Find port information, what to do ashore, independent shore excursion options and your Genoa dates for 2027 and 2028.",
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
          <p className="section-eyebrow mb-3 text-coastal-100">MSC WORLD EUROPA • GENOA</p>
          <h1 className="home-hero-heading max-w-3xl">MSC World Europa in Genoa</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">Make the most of your day ashore</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            If Genoa is one of the stops on your MSC World Europa cruise, this guide is here to answer the questions
            that actually matter. Where will you arrive? Can you explore Genoa independently? How much can you
            comfortably fit into your port day? And when does it make sense to leave the city and discover more of the
            Italian Riviera?
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            We track MSC World Europa&apos;s Genoa calls and run a small group shore excursion designed around cruise
            passengers, so you can plan your day with your actual ship in mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={PRODUCT_PATH} className="btn-accent" data-analytics-cta={`${ANALYTICS_ID}-hero-product`}>
              Explore the Genoa excursion
            </Link>
            <a
              href="#msc-world-europa-dates-2027"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Find your sailing date
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="rounded-2xl border border-coastal-100 bg-gradient-to-br from-coastal-50/90 to-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-xl font-semibold text-gray-900 sm:text-2xl">
              Your MSC World Europa day in Genoa
            </h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {planningPanel.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-coastal-700">{item.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-gray-800">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title mt-10">Where does MSC World Europa dock in Genoa?</h2>
          <div className="prose-body mt-6">
            <p>MSC World Europa arrives at Genoa&apos;s cruise port, putting you close to one of Italy&apos;s great historic maritime cities.</p>
            <p>
              Genoa is different from ports where the cruise terminal is miles from anything interesting. The city itself
              can be part of your day, which gives MSC World Europa passengers a genuine choice. You can stay relatively
              close to the port and explore Genoa, or use your time ashore to head beyond the city into Liguria.
            </p>
            <p>
              Your exact berth and terminal arrangements can change, so use the information supplied by MSC for your
              sailing as the final authority rather than relying on an old terminal number found online.
            </p>
          </div>
          <Link href="/cruise-port-guide" className="btn-secondary mt-8 inline-flex text-sm">
            Genoa cruise port guide
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">Can you walk into Genoa from the cruise port?</h2>
          <div className="prose-body mt-6">
            <p>
              For many cruise passengers, exploring Genoa itself is one of the easiest ways to spend the day ashore
              because the cruise port is close to the city.
            </p>
            <p>
              That does not mean every attraction is immediately outside the ship. Genoa is a large, hilly city and how
              much walking feels comfortable will depend on what you want to see.
            </p>
            <p>
              If your plan is to discover the historic centre, old harbour and some of Genoa&apos;s streets and squares,
              exploring independently can be a very good choice.
            </p>
            <p>
              If your priority is seeing the Italian Riviera beyond Genoa, your limited time in port becomes more
              important and organised transport starts to make much more sense.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">Should you explore Genoa or take a shore excursion?</h2>
          <p className="section-subtitle">
            There is no single right answer. Genoa is worth exploring in its own right, while the coast beyond the city
            gives you a completely different day.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-feature h-full">
              <h3 className="font-display text-lg font-bold text-gray-900">Stay in Genoa</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
                {stayInGenoa.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-coastal-600" aria-hidden="true">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-feature h-full">
              <h3 className="font-display text-lg font-bold text-gray-900">See more of the Italian Riviera</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
                {seeRiviera.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-coastal-600" aria-hidden="true">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-gray-700 leading-relaxed">
            We would rather help you choose the right day than pretend every MSC World Europa passenger needs an
            excursion. If Genoa itself is what you want to see, enjoy the city. If you want your port call to take you
            further into Liguria, that is where our small group excursion comes in.
          </p>
          <Link
            href={PRODUCT_PATH}
            className="btn-accent mt-8 inline-flex"
            data-analytics-cta={`${ANALYTICS_ID}-comparison-product`}
          >
            See our Genoa shore excursion
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-maple-700">SMALL GROUP GENOA SHORE EXCURSION</p>
          <h2 className="section-title mt-3">See more of the Italian Riviera</h2>
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
                <p className="text-sm leading-relaxed text-gray-700">
                  Your MSC World Europa call gives you a limited window ashore. Our Genoa excursion is for passengers who
                  want to use that time to experience more than the city immediately around the cruise port.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Travel in a small group and discover the Riviera beyond Genoa, with the day&apos;s timing planned
                  around cruise passengers and the need to return to port.
                </p>
                <Link
                  href={PRODUCT_PATH}
                  className="btn-accent mt-8 inline-flex self-start"
                  data-analytics-cta={`${ANALYTICS_ID}-card-product`}
                >
                  View the Genoa excursion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">What can you realistically do during your Genoa port day?</h2>
          <div className="prose-body mt-6">
            <p>
              One of the easiest mistakes to make when planning a cruise is treating a port day like a full day on
              holiday. It isn&apos;t. Your usable time ashore is shorter than the number of hours shown on the itinerary.
            </p>
            <p>
              You need time to leave the ship, meet your transport if you are taking an excursion and return comfortably
              before sailing.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {portDayCards.map((card) => (
              <div key={card.title} className="card-feature">
                <h3 className="font-display text-base font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-700 leading-relaxed">
            Always make the decision using the current timings for your own MSC World Europa sailing.
          </p>
        </div>
      </section>

      <section id="msc-world-europa-dates-2027" className="section-padding bg-white scroll-mt-24">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">MSC World Europa Genoa dates in 2027</h2>
          <p className="section-subtitle">
            MSC World Europa is scheduled to call at Genoa throughout 2027. Find your sailing month below and check the
            Genoa excursion for your port day.
          </p>
          <ShipScheduleMonthGroups
            year={2027}
            entries={dates2027}
            productPath={PRODUCT_PATH}
            shipName={MSC_WORLD_EUROPA_SHIP_NAME}
            analyticsSource={SCHEDULE_ANALYTICS_SOURCE}
            countSingular="Genoa call"
            countPlural="Genoa calls"
            countSeparator="•"
            emptyMessage="No MSC World Europa Genoa dates are currently listed for 2027 in our schedule data."
          />
        </div>
      </section>

      <section id="msc-world-europa-dates-2028" className="section-padding bg-coastal-50 scroll-mt-24">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">MSC World Europa Genoa dates in 2028</h2>
          <p className="section-subtitle">
            Planning your cruise further ahead? These are the MSC World Europa Genoa calls currently held in our schedule
            for 2028.
          </p>
          <ShipScheduleMonthGroups
            year={2028}
            entries={dates2028}
            productPath={PRODUCT_PATH}
            shipName={MSC_WORLD_EUROPA_SHIP_NAME}
            analyticsSource={SCHEDULE_ANALYTICS_SOURCE}
            countSingular="Genoa call"
            countPlural="Genoa calls"
            countSeparator="•"
            emptyMessage="No MSC World Europa Genoa dates are currently listed for 2028 in our schedule data."
          />
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            Cruise schedules can change. Always confirm your latest Genoa arrival and departure times in your MSC booking
            before making independent arrangements ashore.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">Booking independently from MSC World Europa</h2>
          <div className="prose-body mt-6">
            <p>You do not have to book every day ashore through the cruise line.</p>
            <p>
              For some passengers, an independent small group excursion offers the balance they are looking for: transport
              and a planned day without joining a large cruise coach.
            </p>
            <p>
              The important part is choosing an excursion that makes sense for the time your ship gives you in port.
            </p>
            <p>
              Before booking, check the latest MSC World Europa arrival and departure times for your sailing and read the
              details of the excursion carefully.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">What if MSC changes your Genoa arrival time?</h2>
          <div className="prose-body mt-6">
            <p>Cruise itineraries sometimes change before departure and they can occasionally change while you are sailing.</p>
            <p>
              If MSC alters your Genoa arrival or departure time after you have arranged an independent excursion, contact
              us as soon as you become aware of the change.
            </p>
            <p>
              The earlier we know, the easier it is to establish what is possible for your particular port day.
            </p>
          </div>
          <Link href="/enquire" className="btn-secondary mt-8 inline-flex text-sm">
            Contact us
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <FAQSection faqs={faqs} title="MSC World Europa Genoa FAQs" />
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-maple-300">YOUR MSC WORLD EUROPA DAY IN GENOA</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">One port day. Make it a good one.</h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            Whether you spend your day discovering Genoa or head beyond the city into the Italian Riviera, plan around the
            time your ship actually gives you ashore.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            If you want to see more of Liguria in a small group, explore our Genoa shore excursion and find the sailing date
            that matches your MSC World Europa cruise.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={PRODUCT_PATH} className="btn-accent" data-analytics-cta={`${ANALYTICS_ID}-final-product`}>
              Explore the Genoa excursion
            </Link>
            <a
              href="#msc-world-europa-dates-2027"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Check MSC World Europa dates
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <p className="text-xs leading-relaxed text-gray-500">
            MSC World Europa is operated by MSC Cruises. This website is an independent shore-excursion guide and is not
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
