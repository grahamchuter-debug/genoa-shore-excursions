import Link from "next/link";
import type { ScheduleEntry } from "@/data/types";
import {
  filterEntriesByMonth,
  formatMonthLabel,
  formatScheduleDate,
  getMonthsWithEntries,
} from "@/lib/schedule-utils";

function formatTourTime(tourTime: string | undefined): string | null {
  if (!tourTime) return null;
  const [h, m] = tourTime.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return tourTime;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function getDefaultOpenMonthKey(year: number, monthKeys: string[]): string | undefined {
  const now = new Date();
  if (now.getFullYear() !== year) return undefined;
  const key = `${year}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return monthKeys.includes(key) ? key : undefined;
}

export function ShipScheduleMonthGroups({
  year,
  entries,
  productPath,
  shipName,
  analyticsSource,
  countSingular,
  countPlural,
  countSeparator = "—",
  emptyMessage,
}: {
  year: number;
  entries: ScheduleEntry[];
  productPath: string;
  shipName: string;
  analyticsSource: string;
  countSingular: string;
  countPlural: string;
  countSeparator?: "—" | "•";
  emptyMessage: string;
}) {
  if (!entries.length) {
    return <p className="mt-6 text-sm text-gray-600">{emptyMessage}</p>;
  }

  const monthKeys = getMonthsWithEntries(entries);
  const defaultOpenMonthKey = getDefaultOpenMonthKey(year, monthKeys);

  return (
    <div className="mt-8 space-y-3">
      {monthKeys.map((monthKey) => {
        const monthEntries = filterEntriesByMonth(entries, monthKey);
        const monthLabel = formatMonthLabel(monthKey);
        const countLabel = monthEntries.length === 1 ? countSingular : countPlural;

        return (
          <details
            key={monthKey}
            className="group overflow-hidden rounded-2xl border border-coastal-100 bg-white shadow-sm"
            open={defaultOpenMonthKey === monthKey ? true : undefined}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2">
              <span className="font-display text-base font-semibold text-gray-900 sm:text-lg">
                {monthLabel} {countSeparator} {monthEntries.length} {countLabel}
              </span>
              <span
                className="shrink-0 text-coastal-600 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▼
              </span>
            </summary>
            <ul className="divide-y divide-coastal-100 border-t border-coastal-100">
              {monthEntries.map((entry) => {
                const tour = formatTourTime(entry.tourTime);
                return (
                  <li
                    key={`${entry.date}-${entry.ship}`}
                    className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-gray-900 sm:text-lg">
                        {formatScheduleDate(entry.date)}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        {shipName}
                        {tour ? (
                          <>
                            {" "}
                            · Tour departs{" "}
                            <span className="font-medium text-coastal-800 tabular-nums">{tour}</span>
                          </>
                        ) : null}
                      </p>
                    </div>
                    <Link
                      href={productPath}
                      className="shrink-0 self-start rounded text-sm font-medium text-coastal-800 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2 sm:self-center"
                      data-analytics-cta={`${analyticsSource}-${entry.date}`}
                      data-analytics-source={analyticsSource}
                      data-analytics-ship={shipName}
                      data-analytics-date={entry.date}
                    >
                      View excursion →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        );
      })}
    </div>
  );
}
