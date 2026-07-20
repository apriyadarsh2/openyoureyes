import { STATE_HISTORY, StatePeriod } from "@/data/stateHistory";
import { getNationalData } from "@/data/nationalHistory";
import { getStateStats } from "@/data/stateStats";

export interface YearData {
  year: number;
  national: ReturnType<typeof getNationalData>;
  states: Record<string, { party: string; cm: string }>;
  stateStats: Record<string, ReturnType<typeof getStateStats>>;
}

const STATE_FORMATION_YEARS: Record<string, number> = {
  "Chhattisgarh": 2000,
  "Jharkhand": 2000,
  "Uttarakhand": 2000,
  "Telangana": 2014,
  "Ladakh": 2019,
  "Sikkim": 1975,
  "Goa": 1961,
  "Arunachal Pradesh": 1972,
  "Manipur": 1972,
  "Meghalaya": 1972,
  "Mizoram": 1987,
  "Nagaland": 1963,
  "Himachal Pradesh": 1966,
  "Haryana": 1966,
  "Gujarat": 1960,
  "Maharashtra": 1960,
  "Andaman and Nicobar Islands": 1947,
  "Chandigarh": 1966,
  "Dadra and Nagar Haveli and Daman and Diu": 1961,
  "Lakshadweep": 1947,
  "Puducherry": 1954,
  "Delhi": 1947,
};

export function getDataForYear(year: number): YearData {
  const states: Record<string, { party: string; cm: string }> = {};

  for (const [stateName, periods] of Object.entries(STATE_HISTORY)) {
    const formationYear = STATE_FORMATION_YEARS[stateName] ?? 1947;

    if (year < formationYear) {
      states[stateName] = { party: "UNKNOWN", cm: "State not yet formed" };
      continue;
    }

    const period = periods.find((p: StatePeriod) => year >= p.from && year <= p.to);
    if (period) {
      states[stateName] = { party: period.party, cm: period.cm };
    } else {
      states[stateName] = { party: "UNKNOWN", cm: "Unknown" };
    }
  }

  const stateStats: Record<string, ReturnType<typeof getStateStats>> = {};
  for (const stateName of Object.keys(STATE_HISTORY)) {
    stateStats[stateName] = getStateStats(stateName, year);
  }

  return {
    year,
    national: getNationalData(year),
    states,
    stateStats,
  };
}
