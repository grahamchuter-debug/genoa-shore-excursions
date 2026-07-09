import type { FAQ, VisitorType, ExperienceCard } from "./types";

export const homepageTagline = "Your Gateway to the Italian Riviera";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting the Italian Riviera for the day on a cruise",
    shortLabel: "Port day",
    description: "You're calling at Genoa for the day. Find shore excursions, planning guides and a realistic Riviera itinerary from Stazione Marittime.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time on the Italian Riviera",
    shortLabel: "First visit",
    description: "Portofino or Camogli? Our first-timer guides and comparison pages help you choose confidently from Genoa.",
    href: "/guides/best-things-to-do-from-genoa",
    cta: "First-timer guide",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description: "Train to Santa Margherita, ferry to Portofino, manage your own return — when DIY beats a ship tour.",
    href: "/guides/independent-riviera-guide",
    cta: "Independent guide",
  },
  {
    id: "planner",
    label: "I want a personalised itinerary",
    shortLabel: "Custom plan",
    description: "Tell us your hours ashore, interests and budget — get a tailored Riviera plan with return-to-ship timing.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "ultimate-riviera",
    title: "Ultimate Italian Riviera Day",
    description: "Portofino, Santa Margherita and Camogli — our Signature Experience for Genoa cruise passengers, maximum 8 guests.",
    href: "/ultimate-italian-riviera-day",
    cta: "Signature Experience",
    imageKey: "city",
  },
  {
    slug: "portofino-camogli",
    title: "Portofino & Camogli",
    description: "Glamour harbour and fishing village — the Riviera's best combo for first-time visitors and photography lovers.",
    href: "/guides/portofino-from-genoa",
    cta: "Explore Portofino",
    imageKey: "fortress",
  },
  {
    slug: "ligurian-food",
    title: "Ligurian Food & Wine",
    description: "Pesto, focaccia di Recco and fresh seafood — gastronomy as your port-day anchor on the Riviera.",
    href: "/guides/riviera-food-guide",
    cta: "Taste Liguria",
    imageKey: "food",
  },
  {
    slug: "hidden-riviera",
    title: "Hidden Riviera",
    description: "Camogli, coastal coves and village trattorias — uncrowded alternatives to the Portofino coach convoys.",
    href: "/guides/hidden-riviera",
    cta: "Discover hidden Riviera",
    imageKey: "history",
  },
  {
    slug: "independent-explorer",
    title: "Independent Explorer",
    description: "Regional train to Santa Margherita or self-paced Camogli — manage your own return buffer from Genoa.",
    href: "/guides/independent-riviera-guide",
    cta: "Go independent",
    imageKey: "port",
  },
];

export const coreSections: HomeSection[] = [
  { slug: "shore-excursions", number: "01", title: "Shore Excursions", description: "Portofino, Camogli, Santa Margherita and Ligurian food — cruise-timed from Genoa terminal.", href: "/shore-excursions", cta: "Browse excursions" },
  { slug: "cruise-planner", number: "02", title: "Riviera Cruise Planner", description: "Answer a few questions — get a tailored itinerary with return-to-ship confidence.", href: "/cruise-planner", cta: "Start planning" },
  { slug: "cruise-port-guide", number: "03", title: "Genoa Cruise Port Guide", description: "Stazione Marittime terminal layout, taxis to Piazza Principe and coach pickup on arrival.", href: "/cruise-port-guide", cta: "Port guide" },
  { slug: "ship-schedules", number: "04", title: "Cruise Ship Schedules", description: "See which ships call at Genoa and plan around published arrival and departure times.", href: "/ship-schedules/genoa", cta: "View schedules" },
  { slug: "guides", number: "05", title: "Riviera Planning Guides", description: "Authority guides for Portofino, Camogli, food and every type of passenger.", href: "/guides", cta: "Read guides" },
  { slug: "faq", number: "06", title: "FAQ", description: "Genoa cruise port questions answered — timing, trains, excursions and return buffers.", href: "/faq", cta: "Read FAQs" },
  { slug: "enquire", number: "07", title: "Enquire", description: "Ask about shore excursions, group sizes and availability for your Genoa port day.", href: "/enquire", cta: "Get in touch" },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "How far is Portofino from Genoa cruise port?",
      answer: "About 35 km — 60–75 minutes by coach or private transfer along the coastal road. Regional train to Santa Margherita plus bus or ferry adds connection time.",
    },
    {
      question: "Can I visit Portofino and Camogli on one Genoa port day?",
      answer: "Yes on 8+ hour calls via organised combo excursions like Riviera Highlights or Ultimate Italian Riviera Day. Independent dual-village days are high risk on standard calls.",
    },
    {
      question: "Should I book a shore excursion or explore independently?",
      answer: "Portofino combos benefit from coach timing and village orientation. Camogli by train suits confident independents — see our DIY vs guided comparison.",
    },
    {
      question: "What is the best Riviera excursion for first-timers?",
      answer: "Ultimate Italian Riviera Day on 9+ hour calls — Portofino, Santa Margherita and Camogli with max 8 guests. Riviera Highlights if you prefer a group tour.",
    },
    {
      question: "Where do cruise ships dock in Genoa?",
      answer: "At Stazione Marittime cruise terminal in the Porto Antico area. Coaches and taxis meet passengers at the terminal exit.",
    },
  ];
}
