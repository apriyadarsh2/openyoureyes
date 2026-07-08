import { politicalHistory } from "@/data/politicalHistory";

export function getDataForYear(year: number) {
  const sorted = [...politicalHistory].sort(
    (a, b) => b.year - a.year
  );

  return (
    sorted.find((item) => item.year <= year) ||
    politicalHistory[0]
  );
}