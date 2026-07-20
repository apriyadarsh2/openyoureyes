"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

export default function ElectionHeader({
  election,
}: Props) {
  const won = election.result.winner;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

      <div>

        <div className="flex items-center gap-3">

          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
            {election.party.abbreviation}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            {election.election.election_type}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              won
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {won ? "Winner" : "Lost"}
          </span>

        </div>

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          {election.constituency.name_en}
        </h2>

        <p className="mt-1 text-slate-500">
          {election.constituency.state}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6 text-right">

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Election
          </p>

          <p className="text-xl font-bold">
            {election.election.year}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Age
          </p>

          <p className="text-xl font-bold">
            {election.age_at_election}
          </p>
        </div>

      </div>

    </div>
  );
}