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

function formatValue(
  value: string | null | undefined
) {
  return value ?? "Data not available";
}

export default function ElectionResultCard({
  result,
}: Props) {
  const seatPercentage =
    result.total_seats > 0
      ? Math.min(
          (result.total_seats_won /
            result.total_seats) *
            100,
          100
        )
      : 0;

  return (
    <section className="rounded-3xl border border-politic-border bg-politic-card p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-3">
          <Trophy
            className="text-yellow-500"
            size={28}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-politic-text">
            Election Result
          </h2>

          <p className="font-medium text-politic-muted">
            Parliamentary result summary
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">

        {/* Result highlight */}

        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600 to-indigo-900 p-8 text-white shadow-md">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Winning Alliance
          </p>

          <h3 className="mt-3 text-4xl font-black">
            {formatValue(
              result.winning_alliance
            )}
          </h3>

          <p className="mt-2 text-lg font-medium text-blue-200">
            {formatValue(result.government)}
          </p>

          <div className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
            <div>
              <p className="text-sm font-medium text-blue-200">
                Seats Recorded
              </p>

              <h4 className="mt-1 text-5xl font-black">
                {result.total_seats_won}
              </h4>

              <p className="mt-2 text-sm text-blue-200">
                of {result.total_seats} seats
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="space-y-5">

          {/* Largest party */}

          <div className="rounded-2xl border border-politic-border/50 bg-politic-inner p-5">
            <div className="flex items-center gap-3">
              <Building2
                className="text-blue-400"
                size={20}
              />

              <p className="text-sm font-medium text-politic-muted">
                Largest Party
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-politic-text">
              {formatValue(
                result.largest_party
              )}
            </h3>

            <p className="mt-1 font-medium text-politic-muted">
              {result.largest_party_seats.toLocaleString()} Seats
            </p>
          </div>

          {/* Majority */}

          <div className="rounded-2xl border border-politic-border/50 bg-politic-inner p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2
                className={
                  result.majority_achieved
                    ? "text-green-400"
                    : "text-yellow-400"
                }
                size={20}
              />

              <p className="text-sm font-medium text-politic-muted">
                Majority Status
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold text-politic-text">
              {result.majority_achieved
                ? "Majority Threshold Reached"
                : "Below Majority Threshold"}
            </h3>

            <p className="mt-1 font-medium text-politic-muted">
              Majority Mark: {result.majority_mark} Seats
            </p>
          </div>

          {/* Seat progress */}

          <div className="rounded-2xl border border-politic-border/50 bg-politic-inner p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-politic-muted">
                  Seats Recorded
                </p>

                <h3 className="mt-2 text-2xl font-bold text-politic-text">
                  {result.total_seats_won}/
                  {result.total_seats}
                </h3>
              </div>

              <ArrowUpRight
                className="text-blue-400"
                size={28}
              />
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full border border-politic-border bg-politic-card shadow-inner">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{
                  width: `${seatPercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-politic-muted">
              Majority requires{" "}
              {result.majority_mark} seats.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}