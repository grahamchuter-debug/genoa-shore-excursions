/**
 * Config-driven mapping from schedule ship names to dedicated ship pages.
 * Only add entries when a dedicated page exists — avoids network-wide hard-coding.
 */
export const SHIP_PAGE_PATHS: Record<string, string> = {
  "MSC World Asia": "/cruise-ships/msc-world-asia-genoa-shore-excursions",
  "MSC World Europa": "/cruise-ships/msc-world-europa-genoa-shore-excursions",
};

export const MSC_WORLD_ASIA_PAGE_PATH = SHIP_PAGE_PATHS["MSC World Asia"];
export const MSC_WORLD_EUROPA_PAGE_PATH = SHIP_PAGE_PATHS["MSC World Europa"];

export const MSC_WORLD_ASIA_SHIP_NAME = "MSC World Asia";
export const MSC_WORLD_EUROPA_SHIP_NAME = "MSC World Europa";

export interface ShipSchedulePromotion {
  path: string;
  eyebrow: string;
  body: string;
  cta: string;
}

/** Restrained schedule-hub promotions — one card per ship page, Genoa hub only. */
export const SHIP_SCHEDULE_PROMOTIONS: ShipSchedulePromotion[] = [
  {
    path: MSC_WORLD_ASIA_PAGE_PATH,
    eyebrow: "Sailing on MSC World Asia?",
    body: "We've created a dedicated Genoa port and shore-excursion guide for your ship.",
    cta: "MSC World Asia Genoa guide →",
  },
  {
    path: MSC_WORLD_EUROPA_PAGE_PATH,
    eyebrow: "Sailing on MSC World Europa?",
    body: "We've created a Genoa port and planning guide for MSC World Europa passengers.",
    cta: "MSC World Europa Genoa guide →",
  },
];

export function getShipPagePath(shipName: string): string | undefined {
  return SHIP_PAGE_PATHS[shipName];
}

export function getAllShipPagePaths(): string[] {
  return Object.values(SHIP_PAGE_PATHS);
}
