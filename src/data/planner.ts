import { excursions } from "./excursions";
import { SIGNATURE_EXPERIENCE_PATH, ultimateItalianRivieraDay } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "portofino", label: "Portofino & glamour harbour" },
  { id: "villages", label: "Riviera villages" },
  { id: "food", label: "Food & wine" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "beach", label: "Beach time" },
  { id: "independent", label: "Independent travel" },
  { id: "luxury", label: "Luxury & romance" },
  { id: "hidden", label: "Hidden Riviera" },
  { id: "coastal", label: "Coastal scenery" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  portofino: ["ultimate-italian-riviera-day", "riviera-highlights", "portofino-santa-margherita"],
  villages: ["hidden-riviera-day", "riviera-highlights", "ultimate-italian-riviera-day"],
  food: ["taste-liguria", "hidden-riviera-day", "ultimate-italian-riviera-day"],
  photography: ["photography-riviera", "ultimate-italian-riviera-day", "riviera-highlights"],
  family: ["family-riviera", "riviera-highlights", "hidden-riviera-day"],
  beach: ["family-riviera", "hidden-riviera-day", "riviera-highlights"],
  independent: ["independent-explorer", "hidden-riviera-day", "riviera-highlights"],
  luxury: ["ultimate-italian-riviera-day", "portofino-santa-margherita", "taste-liguria"],
  hidden: ["hidden-riviera-day", "taste-liguria", "family-riviera"],
  coastal: ["photography-riviera", "riviera-highlights", "ultimate-italian-riviera-day"],
};

const ITINERARY_THEMES: Record<
  string,
  { headline: string; slugs: string[]; summary: string }
> = {
  "editors-choice": {
    headline: "Editor's Choice — Ultimate Italian Riviera Day",
    slugs: ["ultimate-italian-riviera-day", "riviera-highlights", "portofino-santa-margherita"],
    summary: "Our Signature Experience — Portofino, Santa Margherita and Camogli in one small-group day (max 8 guests) with cruise-timed coastal planning.",
  },
  "best-historic": {
    headline: "Riviera Highlights",
    slugs: ["riviera-highlights", "ultimate-italian-riviera-day", "portofino-santa-margherita"],
    summary: "Portofino harbour and Camogli village — the essential Riviera duo without rushing your port day.",
  },
  "best-food": {
    headline: "Taste Liguria",
    slugs: ["taste-liguria", "hidden-riviera-day", "ultimate-italian-riviera-day"],
    summary: "Pesto, seafood and Riviera wine fitted to your Genoa port hours.",
  },
  "best-photography": {
    headline: "Photography Riviera",
    slugs: ["photography-riviera", "ultimate-italian-riviera-day", "riviera-highlights"],
    summary: "Portofino harbour angles, Camogli facades and coastal viewpoints.",
  },
  "best-independent": {
    headline: "Independent Explorer",
    slugs: ["independent-explorer", "hidden-riviera-day", "riviera-highlights"],
    summary: "Train to Santa Margherita or self-paced Camogli — manage your own return buffer to Genoa.",
  },
  "best-families": {
    headline: "Family Riviera",
    slugs: ["family-riviera", "riviera-highlights", "hidden-riviera-day"],
    summary: "Camogli beach and Santa Margherita promenade — paced for mixed-age families.",
  },
  "best-luxury": {
    headline: "Ultimate Italian Riviera Day",
    slugs: ["ultimate-italian-riviera-day", "portofino-santa-margherita", "taste-liguria"],
    summary: "Small-group vehicle, flexible harbour pacing and premium coastal routing.",
  },
  "hidden-gem": {
    headline: "Hidden Riviera",
    slugs: ["hidden-riviera-day", "taste-liguria", "family-riviera"],
    summary: "Camogli, village lunches and uncrowded lanes away from Portofino coach convoys.",
  },
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

function usableHours(input: PlannerInput): number {
  if (input.arrivalTime && input.departureTime) {
    const [aH, aM] = input.arrivalTime.split(":").map(Number);
    const [dH, dM] = input.departureTime.split(":").map(Number);
    const arrivalMins = aH * 60 + aM;
    const departMins = dH * 60 + dM;
    const raw = (departMins - arrivalMins) / 60;
    return Math.max(0, raw - 1.5);
  }
  return 7.5;
}

function pickTheme(input: PlannerInput): keyof typeof ITINERARY_THEMES {
  const { interests, children, travelStyle, mobility, budget } = input;
  const active = interests.length ? interests : ["portofino", "coastal"];

  if (children > 0 || active.includes("family") || active.includes("beach")) return "best-families";
  if (budget === "premium" || active.includes("luxury") || mobility === "limited") return "best-luxury";
  if (travelStyle === "diy" || active.includes("independent")) return "best-independent";
  if (active.includes("food")) return "best-food";
  if (active.includes("photography") || active.includes("coastal")) return "best-photography";
  if (active.includes("hidden") || active.includes("villages")) return "hidden-gem";
  if (active.includes("portofino")) return "editors-choice";
  if (usableHours(input) < 6) return "best-families";
  return "editors-choice";
}

export function generateGenoaPlan(input: PlannerInput): PlannerResult {
  const { arrivalTime, departureTime, adults, children, interests, mobility, budget, travelStyle } = input;
  const party = adults + children;
  const hasKids = children > 0;
  const hours = usableHours(input);

  const themeKey = pickTheme(input);
  const theme = ITINERARY_THEMES[themeKey];

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  for (const s of theme.slugs) pushSlug(s);

  const activeInterests = interests.length ? interests : ["portofino", "coastal"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("family-riviera");
  if (mobility === "limited") pushSlug("ultimate-italian-riviera-day");
  if (travelStyle === "diy") pushSlug("independent-explorer");
  if (budget === "premium") pushSlug("ultimate-italian-riviera-day");
  if (hours < 6) pushSlug("family-riviera");

  const reasonMap: Record<string, string> = {
    "ultimate-italian-riviera-day": "Signature Experience — Portofino, Santa Margherita and Camogli, max 8 guests.",
    "riviera-highlights": "Portofino and Camogli on one sequenced coastal day.",
    "portofino-santa-margherita": "Harbour glamour plus flat promenade walk.",
    "taste-liguria": "Pesto, seafood and Ligurian wine lunch.",
    "photography-riviera": "Harbour angles and coastal viewpoints with photo pacing.",
    "hidden-riviera-day": "Camogli and village lunch away from Portofino crowds.",
    "family-riviera": "Beach, harbour and gelato for mixed-age families.",
    "independent-explorer": "Train or ferry DIY with planning support.",
  };

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => excursionLink(s, reasonMap[s] ?? "A strong match for your Riviera port day."))
    .filter((x): x is PlannerLink => x !== null);

  if (!excursionLinks.some((l) => l.href === SIGNATURE_EXPERIENCE_PATH)) {
    excursionLinks.unshift({
      label: ultimateItalianRivieraDay.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: reasonMap["ultimate-italian-riviera-day"],
    });
  }

  const transfers: PlannerLink[] = [
    {
      label: "Genoa Cruise Port Guide",
      href: "/cruise-port-guide",
      why: "Stazione Marittime terminal layout, taxis to Piazza Principe and coach pickup points.",
    },
  ];
  if (party >= 3 || hasKids || mobility === "limited" || budget === "premium") {
    transfers.push({
      label: "Ultimate Italian Riviera Day",
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Strongest return-to-ship confidence when coastal road traffic builds.",
    });
  }

  const logistics: PlannerLink[] = [
    { label: "Ship Schedules", href: "/ship-schedules/genoa", why: "See how many ships share your Genoa port day." },
    {
      label: "One Day on the Riviera",
      href: "/guides/one-day-on-the-riviera",
      why: "Hour-by-hour sample itineraries from gangway to all-aboard.",
    },
    {
      label: "DIY vs Guided",
      href: "/compare/diy-vs-guided",
      why: "When independent train and ferry travel beats a shore excursion.",
    },
  ];

  const topExc = excursionLinks[0]?.label ?? theme.headline;
  const dayPlan: { time: string; text: string }[] = [];

  const arriveLabel = arrivalTime ?? "07:30";
  const departLabel = departureTime ?? "17:00";

  dayPlan.push({
    time: "On arrival",
    text: `Disembark at Genoa Stazione Marittime (${arriveLabel}). Meet your excursion at the terminal exit, or taxi to Genova Piazza Principe (15–25 min) for an independent train to Santa Margherita.`,
  });

  if (themeKey === "best-food") {
    dayPlan.push({ time: "Morning", text: "Scenic coastal drive — pesto or focaccia tasting mid-morning in a Riviera village." });
    dayPlan.push({ time: "Midday", text: "Multi-course Ligurian seafood pranzo with Vermentino — allow 90 minutes seated." });
    dayPlan.push({ time: "Afternoon", text: "Village stroll or bakery stop, then coastal return toward Genoa." });
  } else if (themeKey === "best-independent") {
    dayPlan.push({ time: "Morning", text: "Taxi to Piazza Principe — regional train to Santa Margherita or Camogli." });
    dayPlan.push({ time: "Midday", text: "Self-guided harbour walk or ferry to Portofino — confirm return sailings before leaving." });
    dayPlan.push({ time: "Afternoon", text: "Return train mid-afternoon, taxi to terminal 90 minutes before all-aboard." });
  } else if (themeKey === "best-families") {
    dayPlan.push({ time: "Morning", text: "Camogli harbour and beach time for children." });
    dayPlan.push({ time: "Midday", text: "Focaccia snack and gelato — transfer to Santa Margherita promenade." });
    dayPlan.push({ time: "Afternoon", text: "Flat lungomare walk — short coastal return to Genoa." });
  } else if (themeKey === "best-photography" || themeKey === "hidden-gem") {
    dayPlan.push({ time: "Morning", text: "Portofino harbour or Camogli facades — morning light for photos." });
    dayPlan.push({ time: "Midday", text: "Viewpoint or village stop — allow time for composition." });
    dayPlan.push({ time: "Afternoon", text: "Return via coastal road — do not add a third village unless hours exceed 9." });
  } else if (themeKey === "best-luxury" || themeKey === "editors-choice") {
    dayPlan.push({ time: "Morning", text: "Small-group coastal transfer — Portofino harbour, Castello Brown viewpoint and San Giorgio lane." });
    dayPlan.push({ time: "Midday", text: "Santa Margherita promenade and waterfront lunch stop." });
    dayPlan.push({ time: "Afternoon", text: "Camogli harbour stroll — flexible pacing to your ship on ${topExc}." });
  } else if (hasKids) {
    dayPlan.push({ time: "Morning", text: "Camogli beach and colourful harbour — flat and accessible for children." });
    dayPlan.push({ time: "Midday", text: "Gelato on the promenade and focaccia from a village bakery." });
    dayPlan.push({ time: "Afternoon", text: "Early return to terminal — avoid Portofino steep lanes with toddlers." });
  } else {
    dayPlan.push({
      time: "Morning",
      text: `Riviera anchor first: ${topExc}. Morning arrival beats Portofino midday coach crowds.`,
    });
    dayPlan.push({ time: "Midday", text: "Harbour lunch or gelato — quick stops if on a combo tour." });
    dayPlan.push({ time: "Afternoon", text: "Second village or viewpoint — coach departure planned for coastal traffic." });
  }

  dayPlan.push({
    time: "Return buffer",
    text: `Be back at Genoa terminal 60–90 minutes before all-aboard (${departLabel} sailing). Coastal road traffic from Portofino can add 20–30 minutes in peak summer.`,
  });

  const interestLabels = activeInterests
    .map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i)
    .join(", ")
    .toLowerCase();

  const styleLabel = travelStyle === "diy" ? "independent" : "guided";

  return {
    headline: theme.headline,
    summary: `${theme.summary} A Genoa port day (~${hours.toFixed(1)} usable hours) for ${party} guest${party === 1 ? "" : "s"} interested in ${interestLabels}, preferring ${styleLabel} travel.`,
    excursions: excursionLinks.slice(0, 5),
    transfers,
    stay: [],
    logistics,
    dayPlan,
  };
}
