"use client";

import Link from "next/link";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { subjectImages } from "@/lib/images";

const CHOOSE_CARDS = [
  {
    slug: "riviera-villages",
    emoji: "🌊",
    title: "Riviera Villages",
    tagline: "Explore Portofino, Santa Margherita and Camogli.",
    highlights: ["Portofino harbour & Piazzetta", "Santa Margherita promenade", "Camogli fishing village", "Colourful waterfront façades", "Coastal train connections"],
    cta: "Discover the Riviera",
    href: "/guides/portofino-from-genoa",
    imageKey: "portofino",
  },
  {
    slug: "taste-liguria",
    emoji: "🍝",
    title: "Taste Liguria",
    tagline: "Seafood, pesto, local cafés and authentic Ligurian cuisine.",
    highlights: ["Pesto alla genovese", "Focaccia di Recco", "Fresh catch of the day", "Riviera wine bars", "Waterfront trattorias"],
    cta: "Taste Liguria",
    href: "/guides/riviera-food-guide",
    imageKey: "food",
  },
  {
    slug: "picture-perfect",
    emoji: "📸",
    title: "Picture Perfect Riviera",
    tagline: "The best photography spots, harbours and coastal viewpoints.",
    highlights: ["Portofino harbour angles", "Camogli pastel façades", "Santa Margherita lungomare", "Coastal cliff viewpoints", "Golden-hour yacht spotting"],
    cta: "Capture the Riviera",
    href: "/guides/best-photography-locations",
    imageKey: "camogli",
  },
  {
    slug: "riviera-lifestyle",
    emoji: "⛵",
    title: "Riviera Lifestyle",
    tagline: "Luxury marinas, waterfront promenades and elegant seaside towns.",
    highlights: ["Portofino yacht harbour", "Santa Margherita marina", "Waterfront promenades", "Elegant seaside cafés", "Mediterranean atmosphere"],
    cta: "Experience the Riviera",
    href: "/guides/luxury-riviera",
    imageKey: "luxury",
  },
  {
    slug: "independent-explorer",
    emoji: "🚶",
    title: "Independent Explorer",
    tagline: "Travel independently with ferry, train and local transport advice.",
    highlights: ["Train to Santa Margherita", "Ferry to Portofino", "Camogli on your own pace", "Return buffer planning", "DIY vs guided advice"],
    cta: "Plan My Riviera Day",
    href: "/guides/independent-riviera-guide",
    imageKey: "ferry",
  },
] as const;

export function ChooseYourRiviera() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Riviera</p>
        <h2 className="section-title mt-2 max-w-3xl">
          Which Italian Riviera experience are you dreaming of?
        </h2>
        <p className="section-subtitle">
          Passengers do not dream of Genoa&apos;s cruise terminal — they dream of colourful fishing villages, yacht-filled harbours and the relaxed Mediterranean lifestyle. Choose the experience that inspires you before you browse excursions.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {CHOOSE_CARDS.map((card, index) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.portofino;
            const isWide = index === 0;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  isWide ? "xl:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${isWide ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{card.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">&ldquo;{card.tagline}&rdquo;</p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
