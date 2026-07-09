import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourRiviera } from "@/components/ChooseYourRiviera";
import { UltimateRivieraDayFeature } from "@/components/UltimateRivieraDayFeature";
import { BuildMyPerfectRivieraDay } from "@/components/BuildMyPerfectRivieraDay";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { VisitorTypeSelector } from "@/components/VisitorTypeSelector";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";

export const metadata = buildMetadata({
  title: "Genoa Shore Excursions & Italian Riviera Cruise Planning Guide",
  description:
    "Your gateway to the Italian Riviera — the definitive Genoa cruise planning guide for Portofino, Santa Margherita, Camogli, shore excursions, ship schedules and a personalised Riviera cruise planner.",
  path: "/",
  keywords: [
    "Genoa shore excursions",
    "Italian Riviera shore excursions",
    "Portofino from Genoa",
    "Santa Margherita from Genoa",
    "Camogli from Genoa",
    "Genoa cruise port",
    "Italian Riviera cruise excursions",
    "Genoa cruise planner",
  ],
});

const SITE_DESCRIPTION =
  "Your gateway to the Italian Riviera — the definitive Genoa cruise planning guide for Portofino, Santa Margherita, Camogli and personalised port-day planning.";

const PASSENGER_SNAPSHOTS = [
  {
    title: "First time on the Riviera",
    text: "On 9+ hour calls, our Signature Experience Ultimate Italian Riviera Day combines Portofino, Santa Margherita and Camogli with maximum eight guests — the editors' pick for first-timers.",
    href: SIGNATURE_EXPERIENCE_PATH,
  },
  {
    title: "Dreaming of Portofino",
    text: "Allow 45–60 minutes each way plus 2 hours in the harbour. Coastal road traffic can add 20–30 minutes in summer — keep a 90-minute return buffer before all-aboard.",
    href: "/guides/portofino-from-genoa",
  },
  {
    title: "Independent by train",
    text: "Regional train from Genova Piazza Principe to Santa Margherita suits confident travellers on 8+ hour calls — see our independent guide for timings and return-to-ship advice.",
    href: "/guides/independent-riviera-guide",
  },
];

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Genoa Shore Excursions & Italian Riviera Cruise Planning Guide",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <section className="home-hero">
        <PreloadImage base={siteImages.hero.base} role="hero" />
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100">Italian Riviera cruise planning authority</p>
          <h1 className="home-hero-heading">{homepageTagline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            You are not dreaming of Genoa&apos;s cruise terminal — you are dreaming of the Italian Riviera. Colourful fishing villages, Portofino harbour, Santa Margherita promenade, Camogli&apos;s pastel façades and the relaxed Mediterranean lifestyle await beyond your ship. Plan your perfect Riviera port day before you sail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">Ultimate Italian Riviera Day</Link>
            <Link href="/cruise-planner" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">Cruise Planner</Link>
            <Link href="/guides" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">Explore Riviera Guides</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Return-to-ship reassurance</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Portofino, Santa Margherita &amp; Camogli</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Independent &amp; passenger-first</span>
          </div>
        </div>
      </section>

      <ChooseYourRiviera />

      <UltimateRivieraDayFeature />

      <BuildMyPerfectRivieraDay />

      <ExperienceSelector />

      <VisitorTypeSelector />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Everything for your Riviera cruise</p>
          <h2 className="section-title mt-2">The definitive Italian Riviera cruise planning hub</h2>
          <p className="section-subtitle">Not just an excursion catalogue — the full picture from Genoa terminal to Portofino, Santa Margherita, Camogli and back to your ship.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Featured Shore Excursions</h2>
              <p className="section-subtitle">Premium, cruise-timed tours designed around your Italian Riviera port day.</p>
            </div>
            <Link href="/shore-excursions" className="btn-secondary shrink-0">All Excursions</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Cruise passenger snapshots</p>
          <h2 className="section-title mt-2">Real advice for real port days</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PASSENGER_SNAPSHOTS.map((snap) => (
              <Link key={snap.title} href={snap.href} className="card-feature group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{snap.title}</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{snap.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-maple-600">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Portofino or Camogli?</h3>
            <p className="mt-3 text-gray-700">Glamour harbour versus colourful fishing village — our comparison pages and cruise planner help you choose the right anchor for your hours ashore.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/portofino-vs-camogli" className="btn-secondary text-sm">Compare options</Link>
              <Link href="/guides/portofino-from-genoa" className="btn-secondary text-sm">Portofino guide</Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Short on time?</h3>
            <p className="mt-3 text-gray-700">Camogli is 40 minutes from Genoa — the fishing village and beach suit shorter calls. Santa Margherita adds a flat promenade walk on 8+ hour sailings.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/guides/one-day-on-the-riviera" className="btn-secondary text-sm">One day on the Riviera</Link>
              <Link href="/cruise-port-guide" className="btn-secondary text-sm">Port Guide</Link>
              <Link href="/ship-schedules/genoa" className="btn-secondary text-sm">Ship Schedules</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Build your personalised Italian Riviera cruise plan</h2>
          <p className="mt-4 text-white/85">Enter your arrival and departure times, interests and travel style — get tailored excursions, guides and a realistic day plan with return-to-ship confidence.</p>
          <Link href="/cruise-planner" className="btn-accent mt-8 inline-flex">Start the Cruise Planner</Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Italian Riviera Cruise Planning FAQs" />
        </div>
      </section>
    </>
  );
}
