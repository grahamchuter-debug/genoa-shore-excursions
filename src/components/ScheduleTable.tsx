import Link from "next/link";
import type { ScheduleEntry } from "@/data/types";
import { getShipPagePath } from "@/data/ship-pages";

function displayTime(value: string | undefined): string {
  return value && value.trim() ? value : "—";
}

export function ScheduleTable({
  entries,
  portName,
  highlightedDate,
}: {
  entries: ScheduleEntry[];
  portName?: string;
  highlightedDate?: string;
}) {
  if (entries.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-coastal-50 p-8 text-center">
        <p className="text-gray-700 font-medium">Schedule data being updated for {portName ?? "this port"}.</p>
        <p className="mt-2 text-sm text-gray-600">Confirm times with your cruise line before booking excursions.</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-coastal-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Ship</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Cruise Line</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Arrival</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Departure</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Time in Port</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Terminal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {entries.map((entry, i) => {
            const shipHref = getShipPagePath(entry.ship);
            return (
              <tr
                key={`${entry.date}-${entry.ship}-${i}`}
                className={highlightedDate && entry.date === highlightedDate ? "bg-coastal-100" : undefined}
              >
                <td className="px-4 py-3 text-sm whitespace-nowrap">{entry.date}</td>
                <td className="px-4 py-3 text-sm font-medium">
                  {shipHref ? (
                    <Link href={shipHref} className="text-coastal-800 underline-offset-2 hover:underline">
                      {entry.ship}
                    </Link>
                  ) : (
                    entry.ship
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{entry.cruiseLine}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{displayTime(entry.arrival)}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{displayTime(entry.departure)}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{entry.timeInPort ?? "—"}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{entry.terminal ?? "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
