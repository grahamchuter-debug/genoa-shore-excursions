"use client";

import { useState } from "react";
import Link from "next/link";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

interface DayCombination {
  id: string;
  title: string;
  emoji: string;
  timeBreakdown: { location: string; duration: string }[];
  bestFor: string;
  portHours: string;
  description: string;
  href: string;
  excursionSlug?: string;
}

const COMBINATIONS: DayCombination[] = [
  {
    id: "ultimate-riviera",
    title: "Portofino + Santa Margherita + Camogli",
    emoji: "🏆",
    timeBreakdown: [
      { location: "Coastal transfer to Portofino", duration: "45–60 min" },
      { location: "Portofino harbour & Piazzetta", duration: "90 min" },
      { location: "Santa Margherita promenade & lunch", duration: "2 hours" },
      { location: "Camogli fishing village", duration: "90 min" },
      { location: "Return to Genoa", duration: "45–60 min" },
    ],
    bestFor: "First-time Riviera visitors on 9+ hour calls",
    portHours: "9–10 hours ashore minimum",
    description:
      "The editors' pick — three beautiful villages in one unhurried day. Our Signature Experience Ultimate Italian Riviera Day delivers this with maximum eight guests and cruise-timed coastal pacing.",
    href: SIGNATURE_EXPERIENCE_PATH,
    excursionSlug: "ultimate-italian-riviera-day",
  },
  {
    id: "portofino-camogli",
    title: "Portofino + Camogli",
    emoji: "🌊",
    timeBreakdown: [
      { location: "Coastal transfer to Portofino", duration: "45–60 min" },
      { location: "Portofino harbour walk", duration: "2 hours" },
      { location: "Transfer to Camogli", duration: "30 min" },
      { location: "Camogli village & beach", duration: "2 hours" },
      { location: "Return to Genoa", duration: "45 min" },
    ],
    bestFor: "Photography lovers and couples on 8+ hour calls",
    portHours: "8–9 hours ashore",
    description:
      "Glamour harbour in the morning, colourful fishing village in the afternoon — the essential Riviera duo without a third stop.",
    href: "/shore-excursions/riviera-highlights",
    excursionSlug: "riviera-highlights",
  },
  {
    id: "food-riviera",
    title: "Taste Liguria",
    emoji: "🍝",
    timeBreakdown: [
      { location: "Coastal drive to village", duration: "45–60 min" },
      { location: "Pesto or focaccia tasting", duration: "60 min" },
      { location: "Seafood pranzo with Vermentino", duration: "90 min" },
      { location: "Village stroll", duration: "60 min" },
      { location: "Return to Genoa", duration: "45–60 min" },
    ],
    bestFor: "Food lovers on 8+ hour calls",
    portHours: "8+ hours ashore",
    description:
      "Let Ligurian cuisine anchor your port day — pesto, fresh catch and waterfront trattorias in a Riviera village.",
    href: "/shore-excursions/taste-liguria",
    excursionSlug: "taste-liguria",
  },
  {
    id: "independent-riviera",
    title: "Independent by Train",
    emoji: "🚶",
    timeBreakdown: [
      { location: "Taxi to Genova Piazza Principe", duration: "15–25 min" },
      { location: "Train to Santa Margherita", duration: "45–60 min" },
      { location: "Self-guided promenade & ferry", duration: "3–4 hours" },
      { location: "Return train to Genoa", duration: "45–60 min" },
      { location: "Taxi to terminal", duration: "15–25 min" },
    ],
    bestFor: "Confident independent travellers on 8+ hour calls",
    portHours: "8+ hours ashore",
    description:
      "Regional train to Santa Margherita, optional ferry to Portofino — manage your own return buffer with our independent guide.",
    href: "/guides/independent-riviera-guide",
  },
  {
    id: "family-camogli",
    title: "Family Camogli Day",
    emoji: "👨‍👩‍👧",
    timeBreakdown: [
      { location: "Coastal transfer to Camogli", duration: "40–50 min" },
      { location: "Harbour & beach time", duration: "2 hours" },
      { location: "Gelato & focaccia lunch", duration: "60 min" },
      { location: "Santa Margherita promenade", duration: "90 min" },
      { location: "Return to Genoa", duration: "45 min" },
    ],
    bestFor: "Families with children on 8+ hour calls",
    portHours: "8+ hours ashore",
    description:
      "Flat promenades, beach time and gelato stops — paced for mixed-age families without Portofino's steep lanes.",
    href: "/shore-excursions/family-riviera",
    excursionSlug: "family-riviera",
  },
];

export function BuildMyPerfectRivieraDay() {
  const [selected, setSelected] = useState<string>("ultimate-riviera");
  const active = COMBINATIONS.find((c) => c.id === selected) ?? COMBINATIONS[0];

  return (
    <section className="section-padding bg-coastal-900 text-white">
      <div className="container-wide">
        <p className="section-eyebrow text-coastal-200">Plan Your Riviera Day</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl max-w-3xl">
          Visualise how different combinations fit your port call
        </h2>
        <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
          Select a day combination to see how time is typically spent at each village — and who each itinerary suits best.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {COMBINATIONS.map((combo) => (
            <button
              key={combo.id}
              type="button"
              onClick={() => setSelected(combo.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                selected === combo.id
                  ? "bg-maple-500 text-white shadow-lg"
                  : "bg-white/10 text-white/90 hover:bg-white/20"
              }`}
            >
              <span aria-hidden="true" className="mr-1.5">{combo.emoji}</span>
              {combo.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-3xl" aria-hidden="true">{active.emoji}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{active.title}</h3>
                <p className="mt-3 text-white/80 leading-relaxed">{active.description}</p>
              </div>
              <span className="pill shrink-0 bg-maple-500/20 text-maple-200 border border-maple-400/30">
                {active.portHours}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill bg-white/10 text-white/90">Best for: {active.bestFor}</span>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-coastal-200">Typical time breakdown</h4>
              <ol className="mt-4 space-y-3">
                {active.timeBreakdown.map((step, i) => (
                  <li key={step.location} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coastal-700 text-xs font-bold">
                      {i + 1}
                    </span>
                    <div className="flex flex-1 items-center justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-sm text-white/90">{step.location}</span>
                      <span className="shrink-0 text-sm font-medium text-maple-300">{step.duration}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {active.excursionSlug && (
                <Link href={active.href} className="btn-accent">
                  View excursion →
                </Link>
              )}
              {!active.excursionSlug && (
                <Link href={active.href} className="btn-accent">
                  Read guide →
                </Link>
              )}
              <Link href="/cruise-planner" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Personalise in planner
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-coastal-800 to-coastal-900 p-6 sm:p-8">
            <h4 className="font-display text-xl font-semibold">Return-to-ship reassurance</h4>
            <p className="mt-3 text-white/80 leading-relaxed">
              Every combination above assumes a <strong className="text-white">60–90 minute buffer</strong> before all-aboard.
              Summer coastal road traffic from Portofino can add 20–30 minutes — organised excursions build this into departure times.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <span className="text-maple-400" aria-hidden="true">✓</span>
                Short calls (under 7 hours): Camogli only or Santa Margherita — not three villages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-400" aria-hidden="true">✓</span>
                Standard calls (8–9 hours): Portofino + Camogli OR Santa Margherita focus
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-400" aria-hidden="true">✓</span>
                Long calls (10+ hours): Ultimate Italian Riviera Day — all three villages
              </li>
            </ul>
            <Link href="/compare/portofino-vs-camogli" className="mt-6 text-sm font-semibold text-maple-300 hover:text-maple-200">
              Compare Portofino vs Camogli →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
