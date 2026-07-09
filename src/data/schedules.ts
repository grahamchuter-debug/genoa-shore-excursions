import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import genoaSchedule from "./imported-schedules/genoa.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Genoa cruise ship schedules?",
    answer:
      "Schedules are compiled from published timetables and updated periodically. Times and berths can change — confirm with your cruise line before booking excursions.",
  },
  {
    question: "How far is Portofino from Genoa cruise terminal?",
    answer:
      "About 35 km — 60–75 minutes by coach. Allow extra time when multiple ships share the port and coastal road traffic builds.",
  },
  {
    question: "Can I visit Portofino on a short port call?",
    answer:
      "Calls under 7 usable hours are tight for Portofino — choose Camogli or Santa Margherita instead. Standard 9–11 hour calls suit Ultimate Italian Riviera Day or Riviera Highlights.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships share your Genoa port day before booking Riviera excursions",
  "Book excursions before sailing on multi-ship days in July and August",
  "Allow 60–90 minute return buffer from the Riviera to Genoa terminal",
  "Morning departures protect against afternoon coastal road delays from Portofino",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "genoa",
    name: "Genoa",
    country: "Italy",
    seoTitle: "Genoa Cruise Ship Schedule — Italian Riviera Port Calls",
    metaDescription:
      "Genoa cruise ship schedule — see which ships call at Stazione Marittime and plan Italian Riviera shore excursions around published arrival and departure times.",
    intro:
      "Genoa is the gateway port for the Italian Riviera on Western Mediterranean itineraries. Check scheduled arrivals and departures before booking Portofino, Camogli or Ligurian food excursions.",
    description: "Italy's Italian Riviera cruise gateway — Portofino 35 km east, Camogli 28 km, Santa Margherita 32 km along the coast.",
    scheduleOverview:
      "Peak cruise traffic April through October, with heaviest calls May to September on Mediterranean and Grand Voyage itineraries.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  genoa: genoaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
