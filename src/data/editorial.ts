import type { EditorialCategory } from "./types";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our top pick after comparing options for Genoa cruise passengers." },
  { id: "best-historic", label: "Best Scenic Experience", shortLabel: "Scenic", description: "Portofino harbour, coastal viewpoints and Riviera panoramas without rushing your port day." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "The smartest DIY approach — train, ferry and self-guided Riviera from Genoa." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Harbour walks, promenades and Ligurian coastline timed to your ship." },
  { id: "best-view", label: "Best Viewpoints", shortLabel: "Viewpoints", description: "Castello Brown, San Rocco and coastal cliff panoramas along the Riviera." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our flagship Ultimate Italian Riviera Day — Portofino, Santa Margherita and Camogli." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Camogli beach, flat promenades and paced routing with reliable return timing for children." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Harbour angles, pastel façades and golden-hour coastal landscapes." },
  { id: "best-food", label: "Best Food Experience", shortLabel: "Food", description: "Pesto, seafood and Ligurian wine that fit a cruise schedule." },
  { id: "best-luxury", label: "Luxury Choice", shortLabel: "Luxury", description: "Private vehicles, yacht-spotting harbours and premium coastal routing from Genoa." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Villages and coves away from Portofino coach convoys." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "Strong sightseeing per euro when budget matters as much as timing." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Realistic when your ship is in Genoa for under eight usable hours." },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
