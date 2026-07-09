import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { SignatureExperienceBadge } from "@/components/SignatureExperienceBadge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { ultimateItalianRivieraDay, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";

const path = SIGNATURE_EXPERIENCE_PATH;
const image = subjectImages.highlights;

export const metadata = buildMetadata({
  title: ultimateItalianRivieraDay.seoTitle,
  description: ultimateItalianRivieraDay.metaDescription,
  path,
  image: image.src,
  imageAlt: "Ultimate Italian Riviera Day Signature Experience from Genoa",
  keywords: [
    "Ultimate Italian Riviera Day",
    "Genoa shore excursions",
    "Portofino from cruise ship",
    "small group Italian Riviera tour",
    "Italian Riviera cruise excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ultimate Italian Riviera Day", path },
];

export default function UltimateItalianRivieraDayPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(ultimateItalianRivieraDay.faqs),
          articleSchema({
            title: ultimateItalianRivieraDay.seoTitle,
            description: ultimateItalianRivieraDay.metaDescription,
            path,
            image: image.src,
          }),
        ]}
      />

      <section className="section-signature-hero">
        <img
          src={image.src}
          alt="Portofino and the Italian Riviera — Ultimate Italian Riviera Day from Genoa"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SignatureExperienceBadge showEditorsChoice />
          <h1 className="home-hero-heading mt-6 max-w-3xl">🏆 {ultimateItalianRivieraDay.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{ultimateItalianRivieraDay.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">{ultimateItalianRivieraDay.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/enquire" className="btn-accent">Enquire about this experience</Link>
            <Link href="/cruise-planner" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Check it fits your port day
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ultimateItalianRivieraDay.benefits.map((b) => (
              <div key={b.title} className="card-feature text-center sm:text-left">
                <span className="text-2xl" aria-hidden="true">{b.emoji}</span>
                <h3 className="mt-2 font-display text-sm font-bold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <p className="section-eyebrow">Editorial recommendation</p>
          <h2 className="section-title mt-2">Why it&apos;s our Editor&apos;s Choice</h2>
          <p className="section-subtitle">
            We recommend this honestly — not because it is the only option, but because it solves the question most
            first-time Genoa passengers ask: how do I see the Italian Riviera properly in one day?
          </p>
          <div className="mt-10 space-y-6">
            {ultimateItalianRivieraDay.editorsChoiceReasons.map((r) => (
              <div key={r.heading} className="card-feature">
                <h3 className="font-display text-lg font-bold text-gray-900">{r.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">Why small groups create a better Riviera experience</h2>
          <p className="section-subtitle">
            Large coach tours move the coast efficiently but sacrifice the flexibility that makes a
            port day feel personal. Eight guests is small enough to matter.
          </p>
          <ul className="mt-8 space-y-3">
            {ultimateItalianRivieraDay.smallGroupReasons.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">Who this experience is perfect for</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card-feature">
              <h3 className="font-display text-lg font-bold text-gray-900">Ideal for</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {ultimateItalianRivieraDay.perfectFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-feature border-gray-200 bg-white">
              <h3 className="font-display text-lg font-bold text-gray-900">Consider alternatives if</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {ultimateItalianRivieraDay.notIdealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-400" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-eyebrow">Cruise passenger snapshots</p>
          <h2 className="section-title mt-2">Real passengers, real port days</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ultimateItalianRivieraDay.passengerSnapshots.map((snap) => (
              <blockquote key={snap.title} className="card-feature">
                <p className="text-sm font-semibold text-coastal-800">{snap.title}</p>
                <p className="mt-3 text-sm italic leading-relaxed text-gray-700">&ldquo;{snap.quote}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-4xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Typical day itinerary</h2>
          <p className="mt-3 text-white/80">
            Indicative timing for a standard 9–10 hour port call. Your guide adjusts to published ship hours.
          </p>
          <ol className="relative mt-10 space-y-6 border-l border-white/20 pl-8">
            {ultimateItalianRivieraDay.itinerary.map((step) => (
              <li key={step.title} className="relative">
                <span
                  className="absolute -left-[33px] flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 ring-4 ring-coastal-900"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">{step.time}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">What makes this different from large coach excursions</h2>
          <p className="section-subtitle">
            Standard group tours cover similar ground. The difference is scale, pacing and how much of your port day
            is spent waiting rather than experiencing the Riviera.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Aspect</th>
                  <th className="px-4 py-3 text-left font-semibold">Ultimate Italian Riviera Day</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical large coach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {ultimateItalianRivieraDay.vsLargeCoach.map((row) => (
                  <tr key={row.aspect}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-4 py-3 text-gray-700">{row.signature}</td>
                    <td className="px-4 py-3 text-gray-600">{row.largeCoach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 card-feature">
            <h3 className="font-display text-lg font-bold text-gray-900">What&apos;s included</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {ultimateItalianRivieraDay.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-maple-500" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title">Return-to-ship reassurance</h2>
          <p className="section-subtitle">
            The question every Genoa passenger asks — and the reason we built this experience around cruise timing
            first, sightseeing second.
          </p>
          <ul className="mt-8 space-y-4">
            {ultimateItalianRivieraDay.returnReassurance.map((item) => (
              <li key={item} className="card-feature flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">⏰</span>
                <p className="text-sm leading-relaxed text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cruise-port-guide" className="btn-secondary text-sm">Genoa port guide</Link>
            <Link href="/ship-schedules/genoa" className="btn-secondary text-sm">Ship schedules</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={ultimateItalianRivieraDay.faqs} title="Ultimate Italian Riviera Day — FAQs" />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/enquire" className="btn-accent">Enquire about Ultimate Italian Riviera Day</Link>
            <Link href="/shore-excursions" className="btn-secondary">Browse all excursions</Link>
          </div>
          <div className="mt-12">
            <PlanningLinks heading="Continue planning your Italian Riviera cruise" />
          </div>
        </div>
      </section>
    </>
  );
}
