import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Genoa Cruise Port Guide",
  subtitle: "Stazione Marittime terminal, taxis to Piazza Principe, coaches to the Riviera and return-to-ship timing.",
  terminals: [
    {
      name: "Genoa Stazione Marittime (Porto Antico)",
      quay: "Cruise terminal in the Porto Antico waterfront district",
      usedBy: "Most large ships — MSC, Costa, Celebrity, Norwegian and others on Mediterranean itineraries",
      cityAccess: "Taxi 15–25 min to Genova Piazza Principe; excursion coaches at terminal exit; Portofino 60–75 min by coach",
    },
    {
      name: "Tender operations",
      quay: "Anchorage in Genoa harbour",
      usedBy: "Occasional overflow when berths are full or for very large vessels",
      cityAccess: "Tender to terminal area then taxi or coach — add 30–45 minutes to Riviera planning",
    },
    {
      name: "Genova Piazza Principe station",
      quay: "Not a cruise berth — rail hub 15–25 min taxi from terminal",
      usedBy: "Regional trains to Santa Margherita Ligure and Camogli — independent passengers reach via taxi",
      cityAccess: "15–25 min taxi from cruise terminal; direct trains to Santa Margherita (~45 min), Camogli (~40 min)",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Genoa",
      paragraphs: [
        "Cruise ships dock at Genoa's Stazione Marittime cruise terminal in the Porto Antico area — a revitalised waterfront district and the gateway to the Italian Riviera.",
        "Genoa is the departure point for the coast eastward: Camogli sits 28 km along the shore, Santa Margherita Ligure 32 km and Portofino 35 km. Most passengers leave immediately for Riviera shore excursions — Genoa's medieval old town rewards time if your return is early.",
        "Genoa appears on Western Mediterranean, Grand Voyage and Italy-intensive itineraries from April through October, with heaviest traffic May to September.",
      ],
    },
    {
      heading: "Getting from Genoa to the Italian Riviera",
      paragraphs: [
        "Portofino is 60–75 minutes by coach or private transfer from the cruise terminal along the coastal road — the fastest door-to-door option for most cruise passengers.",
        "Independent travellers taxi to Genova Piazza Principe or Brignole (15–25 minutes) for regional trains to Santa Margherita Ligure or Camogli. Seasonal ferries from Porto Antico reach Camogli and Portofino — check timetables against your port window.",
        "Camogli is the closest major village — 45–55 minutes by road. Santa Margherita offers flat promenade walks and ferry links to Portofino.",
      ],
    },
    {
      heading: "Facilities and practicalities",
      paragraphs: [
        "The cruise terminal offers toilets, seating and tourist information. ATMs are available — carry euros for taxis and train tickets.",
        "Currency is the euro. Italian is the local language; English is widely spoken on excursions and at major Riviera villages. Download offline maps — terminal Wi-Fi is unreliable.",
        "Genoa and the Riviera are generally safe. Watch belongings in Portofino crowds and on crowded trains during cruise season.",
      ],
    },
    {
      heading: "Return-to-ship timing",
      paragraphs: [
        "Confirm all-aboard time — usually 30–60 minutes before departure. Keep a 60–90 minute buffer beyond expected travel time, especially returning from Portofino on the coastal road.",
        "Summer afternoon traffic from the Riviera routinely adds 20–30 minutes. Excursion coaches typically depart Portofino by 15:30–16:00 for 17:00–18:00 all-aboard.",
        "Independent travellers should plan return trains and ferries with margin — the ship will not wait if you miss all-aboard on non-ship excursions.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "How far is Portofino from Genoa cruise port?",
      answer: "About 35 km — 60–75 minutes by coach plus 15–25 minutes taxi from terminal to Piazza Principe if travelling by train to Santa Margherita first.",
    },
    {
      question: "Can I walk to Genova Piazza Principe from the cruise terminal?",
      answer: "Not recommended for Riviera day trips — 15–25 minutes by taxi through port and city traffic. Pre-book return taxis on busy port days.",
    },
    {
      question: "Do cruise ships tender in Genoa?",
      answer: "Occasionally when berths are full. Tendering adds 30–45 minutes — confirm on your cruise app the evening before.",
    },
    {
      question: "How much time to return from Portofino?",
      answer: "Allow 60–75 minutes coach transfer plus 60–90 minutes before all-aboard. Summer coastal traffic can add 20–30 minutes.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
