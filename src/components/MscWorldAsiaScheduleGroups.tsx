import type { ScheduleEntry } from "@/data/types";
import { MSC_WORLD_ASIA_SHIP_NAME } from "@/data/ship-pages";
import { ShipScheduleMonthGroups } from "@/components/ShipScheduleMonthGroups";

const ANALYTICS_SOURCE = "msc-world-asia-schedule";

export function MscWorldAsiaScheduleGroups({
  year,
  entries,
  productPath,
}: {
  year: number;
  entries: ScheduleEntry[];
  productPath: string;
}) {
  return (
    <ShipScheduleMonthGroups
      year={year}
      entries={entries}
      productPath={productPath}
      shipName={MSC_WORLD_ASIA_SHIP_NAME}
      analyticsSource={ANALYTICS_SOURCE}
      countSingular="tour date"
      countPlural="tour dates"
      emptyMessage={`No MSC World Asia Genoa dates are currently listed for ${year} in our schedule data.`}
    />
  );
}
