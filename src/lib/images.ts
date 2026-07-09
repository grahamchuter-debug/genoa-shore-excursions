export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Portofino harbour and the Italian Riviera coastline — gateway from Genoa cruise port",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Italian Riviera cruise planning — Portofino, Camogli and Genoa cruise port",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Genoa Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Genoa Stazione Marittime cruise port — gateway to the Italian Riviera",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  portofino: { base: "portofino", src: `${B}/portofino.jpg`, alt: "Portofino harbour — Italian Riviera glamour" },
  "santa-margherita": { base: "santa-margherita", src: `${B}/santa-margherita.jpg`, alt: "Santa Margherita Ligure promenade and marina" },
  camogli: { base: "camogli", src: `${B}/camogli.jpg`, alt: "Camogli fishing village colourful harbour" },
  riviera: { base: "riviera-coast", src: `${B}/riviera-coast.jpg`, alt: "Italian Riviera coastline with colourful villages" },
  yacht: { base: "yacht", src: `${B}/yacht.jpg`, alt: "Luxury yachts in Portofino harbour" },
  food: { base: "food", src: `${B}/food.jpg`, alt: "Ligurian pesto and Riviera cuisine" },
  train: { base: "train", src: `${B}/train.jpg`, alt: "Regional train along the Ligurian coast near Genoa" },
  ferry: { base: "ferry", src: `${B}/ferry.jpg`, alt: "Ferry approaching Portofino on the Italian Riviera" },
  photography: { base: "photography", src: `${B}/photography.jpg`, alt: "Camogli pastel façades — Italian Riviera photography" },
  beach: { base: "beach", src: `${B}/beach.jpg`, alt: "Riviera beach near Camogli" },
  luxury: { base: "santa-margherita-marina", src: `${B}/santa-margherita-marina.jpg`, alt: "Santa Margherita Ligure marina and waterfront promenade" },
  family: { base: "family", src: `${B}/family.jpg`, alt: "Family exploring the Italian Riviera from cruise ship" },
  compare: { base: "compare", src: `${B}/compare.jpg`, alt: "Comparing Italian Riviera cruise excursion options" },
  port: img("cruise-port", "Genoa cruise port terminal"),
  highlights: { base: "riviera-coast", src: `${B}/riviera-coast.jpg`, alt: "Italian Riviera highlights from Genoa cruise port" },
  city: { base: "portofino", src: `${B}/portofino.jpg`, alt: "Portofino from Genoa cruise port" },
  history: { base: "camogli", src: `${B}/camogli.jpg`, alt: "Historic Italian Riviera fishing villages" },
  fortress: { base: "portofino", src: `${B}/portofino.jpg`, alt: "Portofino harbour" },
  coast: { base: "riviera-coast", src: `${B}/riviera-coast.jpg`, alt: "Italian Riviera coastal scenery" },
  hidden: { base: "camogli", src: `${B}/camogli.jpg`, alt: "Hidden Riviera villages away from crowds" },
  walking: { base: "santa-margherita", src: `${B}/santa-margherita.jpg`, alt: "Walking the Italian Riviera promenade" },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "ultimate-italian-riviera-day": "highlights",
  "riviera-highlights": "portofino",
  "portofino-santa-margherita": "santa-margherita",
  "taste-liguria": "food",
  "photography-riviera": "photography",
  "independent-explorer": "train",
  "family-riviera": "family",
  "hidden-riviera-day": "camogli",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("portofino");

const highlightImageKeys: Record<string, string> = {
  "portofino-from-genoa": "portofino",
  "santa-margherita-from-genoa": "santa-margherita",
  "camogli-from-genoa": "camogli",
  "italian-riviera-guide": "riviera",
  "portofino-harbour-guide": "portofino",
  "santa-margherita-promenade": "santa-margherita",
  "camogli-fishing-village": "camogli",
  "ligurian-cuisine": "food",
  "best-viewpoints": "photography",
  "best-photography-locations": "photography",
  "best-beaches": "beach",
};

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "portofino");
}

export function getGuideImage(imageKey: string): SiteImage {
  return pick(imageKey);
}

export function getComparisonImage(slug: string): SiteImage {
  const keys: Record<string, string> = {
    "portofino-vs-camogli": "portofino",
    "portofino-vs-santa-margherita": "santa-margherita",
    "diy-vs-guided": "train",
    "boat-vs-road": "ferry",
    "independent-vs-small-group": "train",
    "best-riviera-excursion-first-time-visitors": "highlights",
    "best-riviera-excursion-families": "family",
    "best-riviera-excursion-couples": "luxury",
  };
  return pick(keys[slug] ?? "compare");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("portofino");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("train");
}

export const guidesHubImage = pick("riviera");
