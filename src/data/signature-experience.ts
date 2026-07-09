import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/ultimate-italian-riviera-day";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface PassengerSnapshot {
  title: string;
  quote: string;
}

export const ultimateItalianRivieraDay = {
  slug: "ultimate-italian-riviera-day",
  title: "Ultimate Italian Riviera Day",
  seoTitle: "Ultimate Italian Riviera Day — Signature Small-Group Experience from Genoa",
  metaDescription: "Our Signature Experience for Genoa cruise passengers — Portofino, Santa Margherita and Camogli in one carefully planned day, maximum 8 guests, timed for…",
  tagline:
    "Portofino, Santa Margherita and Camogli in one unhurried day — the experience our editors would genuinely recommend to a first-time cruise passenger wanting the very best of the Italian Riviera.",
  overview:
    "Ultimate Italian Riviera Day is our flagship Signature Experience: a small-group day (maximum eight guests) that sequences Portofino's harbour, Santa Margherita's promenade and Camogli's fishing village with the pacing, flexibility and coastal road timing that large coach tours rarely achieve. It is the curated day we suggest when someone asks, \"If I have one port call and want the Riviera properly, what should I do?\"",
  editorsChoiceReasons: [
    {
      heading: "Three villages, one coherent day",
      text: "Portofino, Santa Margherita and Camogli each reward a port call on their own — Ultimate Italian Riviera Day sequences them without the rushed feel of a 50-seat coach convoy. Morning harbour walk in Portofino; promenade and lunch in Santa Margherita; afternoon colour in Camogli.",
    },
    {
      heading: "Built around cruise reality",
      text: "Every departure is planned backward from your all-aboard time. Coastal road legs account for summer traffic returning from Portofino; village time is coordinated so you are not standing in harbour crowds while your return window shrinks. This is port-day logistics, not generic Riviera tourism.",
    },
    {
      heading: "Small enough to adapt",
      text: "With a maximum of eight guests, your guide can adjust pacing — an extra ten minutes at the Piazzetta, a quieter lane in Camogli, or a brief gelato stop without derailing forty other passengers.",
    },
  ],
  smallGroupReasons: [
    "Faster embarkation at Genoa terminal — no waiting for a full coach to fill",
    "Quicker movement through Portofino's narrow lanes",
    "More time for harbour photographs without holding up a large group",
    "Direct conversation with your guide — ask about Ligurian food, yacht spotting or your return time",
    "Less time lost at rest stops and group headcounts",
  ],
  perfectFor: [
    "First-time Italian Riviera visitors on a standard 9–10 hour port call",
    "Couples and small families who want Portofino without choosing between villages",
    "Passengers who value personal attention over the lowest per-seat price",
    "Photography enthusiasts who need flexibility at harbours and viewpoints",
    "Travellers who feel anxious about coastal road return timing and prefer expert handling",
  ],
  notIdealFor: [
    "Calls under 8.5 usable hours ashore — choose Camogli-only or Family Riviera instead",
    "Passengers who want a full-day Genoa old-town visit — allow a dedicated Genoa day",
    "Large groups travelling together who need a private vehicle for ten or more",
    "Budget-first travellers — standard group excursions offer lower per-person pricing",
  ],
  benefits: [
    { emoji: "🚐", title: "Maximum 8 guests", description: "A small group that moves through Riviera villages without coach-tour inertia." },
    { emoji: "⚓", title: "Portofino, Santa Margherita & Camogli", description: "Three coastal anchors sequenced with harbour and viewpoint expertise." },
    { emoji: "📸", title: "Photography flexibility", description: "Time for harbour angles, Camogli facades and promenade views without rushing." },
    { emoji: "😊", title: "Personal guide attention", description: "Ask questions, adjust pace and hear context that large groups never receive." },
    { emoji: "🚶", title: "Less waiting", description: "Smaller groups mean faster boarding and fewer rest-stop delays." },
    { emoji: "⏰", title: "Cruise-timed planning", description: "Departures and coastal legs planned around your ship's published hours." },
    { emoji: "❤️", title: "Designed for cruise passengers", description: "Written for port-day reality — not a repurposed land tour with a ship pickup added." },
  ] satisfies SignatureBenefit[],
  vsLargeCoach: [
    { aspect: "Group size", signature: "Maximum 8 guests", largeCoach: "Often 40–50 passengers" },
    { aspect: "Portofino pacing", signature: "Adjustable harbour routes and viewpoint timing", largeCoach: "Fixed schedule — stragglers delay everyone" },
    { aspect: "Photography stops", signature: "Brief pauses built into the route", largeCoach: "Limited — group must keep moving" },
    { aspect: "Guide access", signature: "Direct conversation throughout the day", largeCoach: "Microphone briefing at each stop" },
    { aspect: "Terminal pickup", signature: "Small vehicle at cruise terminal exit", largeCoach: "Queue for full coach departure" },
    { aspect: "Return planning", signature: "Explicit coastal road buffer built into afternoon departure", largeCoach: "Varies by operator — confirm before booking" },
  ],
  itinerary: [
    { time: "08:00–08:30", title: "Meet at Genoa terminal", description: "Small-group pickup at Stazione Marittime cruise terminal exit. Brief overview of the day's timing and your all-aboard window." },
    { time: "08:30–09:45", title: "Transfer to Portofino", description: "Scenic coastal road east from Genoa through Rapallo toward the Portofino peninsula. Your guide outlines the morning route before arrival." },
    { time: "09:45–12:00", title: "Portofino — harbour & viewpoints", description: "Piazzetta promenade, marina walk and optional Castello Brown viewpoint. San Giorgio lane if time and mobility allow before lunch." },
    { time: "12:00–13:15", title: "Santa Margherita promenade & lunch", description: "Transfer to Santa Margherita Ligure — lungomare stroll and waterfront lunch or focaccia stop depending on group preference." },
    { time: "13:15–14:00", title: "Transfer to Camogli", description: "Short coastal hop to Camogli's fishing harbour — typically quieter than the morning Portofino inbound traffic." },
    { time: "14:00–15:30", title: "Camogli — fishing village", description: "Harbour promenade, pastel house photography and optional beach time. Focaccia from a village bakery if lunch was light." },
    { time: "15:30–16:30", title: "Return to Genoa", description: "Coastal road transfer with traffic buffer. Typical terminal arrival 16:30–17:00 for 18:00 all-aboard sailings." },
  ] satisfies ItineraryStep[],
  passengerSnapshots: [
    {
      title: "Elena & Marco — first Western Mediterranean cruise",
      quote: "We wanted Portofino but worried a big coach would feel rushed. Eight passengers meant our guide could slow down at the harbour when we asked — and we still made Camogli with an hour to spare before all-aboard.",
    },
    {
      title: "David — travelling solo",
      quote: "I did not want to puzzle over train and ferry timetables on my first cruise. The small group felt like travelling with knowledgeable friends — and Portofino at 10 a.m. beat the midday crush.",
    },
    {
      title: "The Chen family — teenage children",
      quote: "Our teens loved the yacht spotting in Portofino and the beach stop in Camogli. The guide actually talked to them instead of lecturing a bus — perfect sequencing for a port day.",
    },
  ] satisfies PassengerSnapshot[],
  returnReassurance: [
    "Every Ultimate Italian Riviera Day departure is planned backward from your ship's all-aboard time — typically allowing 60–90 minutes buffer beyond expected coastal travel.",
    "Summer road traffic from Portofino is the main variable; small-group departures from the peninsula are scheduled earlier than many large coaches to protect your margin.",
    "Your guide tracks the ship's published departure and communicates any timing adjustments during the day — you are not left guessing when to head back.",
    "If your cruise line publishes a change to port hours, contact us before sailing so the day's sequencing can be adjusted.",
  ],
  included: [
    "Small-group vehicle (maximum 8 guests)",
    "Licensed English-speaking guide for the full day",
    "Portofino harbour walking tour",
    "Santa Margherita promenade visit",
    "Camogli fishing village visit",
    "Return transfer timed to your ship",
  ],
  faqs: [
    {
      question: "Is Ultimate Italian Riviera Day right for my port call length?",
      answer: "Best on standard 9–10 hour calls with at least 8.5 usable hours ashore. Shorter calls suit Riviera Highlights or Family Riviera — use our cruise planner to confirm.",
    },
    {
      question: "How is this different from Riviera Highlights?",
      answer: "Riviera Highlights covers Portofino and Camogli on larger group tours. Ultimate Italian Riviera Day is our Signature Experience — maximum eight guests, adds Santa Margherita and offers more flexible pacing.",
    },
    {
      question: "Is lunch included?",
      answer: "A waterfront lunch or focaccia stop is planned into the day — inclusions vary by season. Confirm menu and dietary options when booking.",
    },
    {
      question: "What if coastal traffic delays our return?",
      answer: "Afternoon departures are scheduled with summer road traffic in mind. Small groups board faster than full coaches, which adds margin. Your guide protects your return window.",
    },
    {
      question: "Can eight guests include children?",
      answer: "Yes — families book regularly. The pacing suits school-age children better than toddlers; for very young children, Family Riviera may be a calmer alternative.",
    },
    {
      question: "Why is this a Signature Experience?",
      answer: "Signature Experiences are curated through trusted local partners and unique to our editorial recommendation — not a generic catalogue listing. We use this badge only when we would genuinely suggest the experience to a friend arriving into Genoa.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "editors-choice" as const,
    title: "Ultimate Italian Riviera Day",
    description: "Our Signature Experience — Portofino, Santa Margherita and Camogli, maximum 8 guests.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
  };
}
