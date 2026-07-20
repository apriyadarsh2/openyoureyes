"use client";

import { getAllianceOverview } from "../../lib/repositories/elections";

import AllianceGrid from "./AllianceGrid";

interface Props {
  year: number;
}

export default function AllianceOverview({
  year,
}: Props) {
  const overview =
    getAllianceOverview(year);

  if (!overview) {
    return (
      <h2 className="text-2xl font-semibold">
        Alliance data not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold">
          Alliance Analysis
        </h1>

        <p className="mt-2 text-slate-500">
          {overview.election.type}
        </p>
      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">
            Alliances
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {overview.summary.total_alliances}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">
            Total Seats
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {overview.summary.total_seats}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">
            Majority Mark
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {overview.summary.majority_mark}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">
            Winning Alliance
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {overview.summary.winning_alliance}
          </h2>
        </div>

      </div>

      <AllianceGrid
        alliances={overview.alliances}
        year={year}
      />

    </div>
  );
}