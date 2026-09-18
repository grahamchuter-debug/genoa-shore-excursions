#!/usr/bin/env node
/**
 * Import Genoa cruise ship schedules from CSV into the site's JSON data file.
 *
 * Usage:  node scripts/import-schedules.mjs
 *
 * Source:  data/schedule-sources/genoa.csv
 * Output:  src/data/imported-schedules/genoa.json
 *
 * Notes:
 * - tour_time is optional and represents verified tour operating start times,
 *   not ship arrival/departure.
 * - Empty arrival/departure are preserved (not invented).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCE = resolve(ROOT, "data/schedule-sources/genoa.csv");
const OUTPUT = resolve(ROOT, "src/data/imported-schedules/genoa.json");

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values.map((v) => v.trim());
}

function computeTimeInPort(arrival, departure) {
  if (!arrival || !departure) return undefined;
  const [ah, am] = arrival.split(":").map(Number);
  const [dh, dm] = departure.split(":").map(Number);
  if ([ah, am, dh, dm].some((n) => Number.isNaN(n))) return undefined;
  let minutes = dh * 60 + dm - (ah * 60 + am);
  if (minutes < 0) minutes += 24 * 60;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}

function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Source CSV not found: ${SOURCE}`);
    process.exit(1);
  }

  const raw = readFileSync(SOURCE, "utf8").trim();
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const header = parseCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/[\s_]+/g, ""));

  const idx = (name) => header.indexOf(name);
  const iDate = idx("date");
  const iShip = idx("ship");
  const iLine = Math.max(idx("cruiseline"), idx("cruiseline"));
  const iLineAlt = idx("cruiseline") >= 0 ? idx("cruiseline") : idx("cruise_line".replace("_", ""));
  // cruise_line → cruiseline after normalisation
  const cruiseLineIdx = header.indexOf("cruiseline");
  const iArr = idx("arrival");
  const iDep = idx("departure");
  const iNotes = idx("notes");
  const iTour = idx("tourtime");
  const iTerminal = idx("terminal");
  const iCallType = idx("calltype");

  const entries = [];
  const seen = new Set();
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    const date = cols[iDate];
    const ship = cols[iShip];
    if (!date || !ship) continue;
    const key = `${date}|${ship}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const arrival = iArr >= 0 ? cols[iArr] || "" : "";
    const departure = iDep >= 0 ? cols[iDep] || "" : "";
    const tourTime = iTour >= 0 && cols[iTour] ? cols[iTour] : undefined;
    const notes = iNotes >= 0 && cols[iNotes] ? cols[iNotes] : undefined;

    entries.push({
      date,
      ship,
      cruiseLine: cruiseLineIdx >= 0 ? cols[cruiseLineIdx] || "" : "",
      arrival,
      departure,
      ...(computeTimeInPort(arrival, departure) ? { timeInPort: computeTimeInPort(arrival, departure) } : {}),
      ...(iTerminal >= 0 && cols[iTerminal] ? { terminal: cols[iTerminal] } : {}),
      ...(iCallType >= 0 && cols[iCallType] ? { callType: cols[iCallType] } : {}),
      ...(tourTime ? { tourTime } : {}),
      ...(notes ? { notes } : {}),
    });
  }

  entries.sort((a, b) => a.date.localeCompare(b.date) || a.ship.localeCompare(b.ship));

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(entries, null, 2) + "\n");
  console.log(`Imported ${entries.length} schedule entries to ${OUTPUT}`);
}

main();
