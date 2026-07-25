"use client";

import {
  Trophy,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import { ResultSummary } from "../types/election";

interface Props {
  result: ResultSummary;
}

export default function ElectionResultCard({
  result,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-yellow-100 p-3">
          <Trophy
            className="text-yellow-600"
            size={28}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Election Result
          </h2>

          <p className="text-slate-500">
            Government formation and winning alliance
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Winner */}

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm uppercase tracking-widest text-blue-100">
            Winning Alliance
          </p>

          <h3 className="mt-3 text-4xl font-bold">
            {result.winning_alliance}
          </h3>

          <p className="mt-2 text-lg text-blue-100">
            {result.government}
          </p>

          <div className="mt-8 inline-flex rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
            <div>
              <p className="text-sm text-blue-100">
                Seats Won
              </p>

              <h4 className="mt-1 text-5xl font-bold">
                {result.total_seats_won}
              </h4>
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="space-y-5">
          <div className="rounded-2xl border p-5">
            <div className="flex items-center gap-3">
              <Building2
                className="text-blue-600"
                size={20}
              />

              <p className="text-sm text-slate-500">
                Largest Party
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold">
              {result.largest_party}
            </h3>

            <p className="mt-1 text-slate-600">
              {result.largest_party_seats} Seats
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2
                className="text-green-600"
                size={20}
              />

              <p className="text-sm text-slate-500">
                Government Status
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold">
              {result.majority_achieved
                ? "Majority Achieved"
                : "Hung Parliament"}
            </h3>

            <p className="mt-1 text-slate-600">
              Majority Mark: 272 Seats
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Majority Status
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {result.total_seats_won}/543
                </h3>
              </div>

              <ArrowUpRight
                className="text-blue-600"
                size={28}
              />
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{
                  width: `${(result.total_seats_won / 543) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}