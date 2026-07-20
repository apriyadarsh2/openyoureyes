"use client";

import {
  MapPinned,
  Trophy,
  Users,
} from "lucide-react";

import { StateResult } from "../../../types/election";

interface Props {
  state: StateResult;
}

export default function StateResultCard({
  state,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {state.state}
          </h2>

          <p className="text-slate-500">
            {state.total_seats} Lok Sabha Seats
          </p>
        </div>

        <MapPinned
          size={28}
          className="text-blue-600"
        />

      </div>

      {/* Alliance Results */}

      <div className="mt-8">

        <h3 className="mb-3 flex items-center gap-2 font-semibold">
          <Trophy size={18} />
          Alliance Results
        </h3>

        <div className="space-y-3">

          {state.alliance_results.map((item) => (
            <div
              key={item.alliance}
              className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
            >
              <span>{item.alliance}</span>

              <span className="font-semibold">
                {item.seats} Seats
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Top Parties */}

      <div className="mt-8">

        <h3 className="mb-3 flex items-center gap-2 font-semibold">
          <Users size={18} />
          Top Parties
        </h3>

        <div className="space-y-2">

          {state.top_parties.map((party) => (
            <div
              key={party.party}
              className="flex items-center justify-between"
            >
              <span>{party.party}</span>

              <span className="font-semibold">
                {party.seats}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}