import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Genoa?",
    answer:
      "At Stazione Marittime cruise terminal in the Porto Antico area. Coaches and taxis meet passengers at the terminal exit.",
  },
  {
    question: "How long does it take to reach Portofino from Genoa?",
    answer:
      "60–75 minutes by coach or private transfer, plus 15–25 minutes taxi from the cruise terminal to Piazza Principe if travelling by train to Santa Margherita first.",
  },
  {
    question: "Can I visit the Riviera without a shore excursion?",
    answer:
      "Yes — train to Santa Margherita or Camogli from Piazza Principe suits confident travellers. Confirm ferry timetables and allow 90 minutes return buffer.",
  },
  {
    question: "What is the best Riviera excursion for first-time visitors?",
    answer:
      "Ultimate Italian Riviera Day — Portofino, Santa Margherita and Camogli with max 8 guests on 9+ hour calls. Riviera Highlights for a group Portofino and Camogli combo.",
  },
  {
    question: "Should I book excursions through my cruise line?",
    answer:
      "Ship tours guarantee the vessel waits if their excursion is late. Reputable independent operators track all-aboard with buffers — often smaller groups and lower prices.",
  },
  {
    question: "Is a Genoa port day long enough for Portofino and Camogli?",
    answer:
      "Yes on 8+ hour calls via organised combo excursions. Standard 9–10 hour calls suit Ultimate Italian Riviera Day with three villages.",
  },
  {
    question: "How early should I return to Genoa from Portofino?",
    answer:
      "Coaches typically leave Portofino by 15:30–16:00. Independent travellers should be at Genoa terminal 60–90 minutes before all-aboard.",
  },
  {
    question: "What currency is used on the Italian Riviera?",
    answer:
      "The euro. Cards work at major villages; carry cash for taxis, regional trains and small trattorias.",
  },
  {
    question: "Are Riviera shore excursions suitable for limited mobility?",
    answer:
      "Santa Margherita promenade and Camogli harbour are relatively flat. Portofino lanes are steep — small-group tours with flexible pacing work better.",
  },
  {
    question: "When is peak cruise season in Genoa?",
    answer:
      "April through October, with heaviest ship traffic May to September. Book Riviera excursions before sailing in July and August.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
