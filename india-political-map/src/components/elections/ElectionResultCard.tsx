"use client";

import {
  Trophy,
  Building2,
  CheckCircle,
} from "lucide-react";

import { ResultSummary } from "../types/election";

interface Props {
  result: ResultSummary;
}

export default function ElectionResultCard({
  result,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <Trophy
          className="text-yellow-500"
          size={28}
        />

        <h2 className="text-2xl font-bold">
          Election Result
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Winning Alliance
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {result.winning_alliance}
          </h3>

          <p className="mt-1 text-slate-600">
            {result.government}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Seats Won
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {result.total_seats_won}
          </h3>

          <p className="mt-1 text-slate-600">
            Majority Mark: 272
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            <Building2
              size={18}
              className="text-blue-600"
            />

            <span className="font-medium">
              Largest Party
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold">
            {result.largest_party}
          </h3>

          <p className="mt-1 text-slate-600">
            {result.largest_party_seats} Seats
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            <CheckCircle
              size={18}
              className="text-green-600"
            />

            <span className="font-medium">
              Government Status
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold">
            {result.majority_achieved
              ? "Majority Achieved"
              : "Hung Parliament"}
          </h3>
        </div>

      </div>

    </div>
  );
}