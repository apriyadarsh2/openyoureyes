"use client";

import { getElectionMargins } from "../../../lib/repositories/elections";

import MarginSummary from "./MarginSummary";
import ClosestMargins from "./ClosestMargins";
import LargestMargins from "./LargestMargins";

interface Props {
  year: number;
}

export default function MarginPage({
  year,
}: Props) {

  const data =
    getElectionMargins(year);

  if (!data) {
    return (
      <h2 className="text-2xl font-semibold">
        Margin data not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold">
          Victory Margins
        </h1>

        <p className="mt-2 text-slate-500">
          General Election {year}
        </p>
      </div>

      <MarginSummary
        summary={data.summary}
      />

      <ClosestMargins
        results={data.closest_results}
      />

      <LargestMargins
        results={data.largest_results}
      />

    </div>
  );
}