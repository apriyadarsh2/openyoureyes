"use client";

import { ArrowDown, ArrowUp, Minus } from "lucide-react";

import {
  PoliticianElection,
} from "@/src/components/types/politician";

interface Props {
  current: PoliticianElection;
  previous?: PoliticianElection;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

interface ChangeRow {
  label: string;
  current: number;
  previous: number;
  suffix?: string;
}

export default function ElectionComparisonCard({
  current,
  previous,
}: Props) {

  if (!previous) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold">
          Previous Election Comparison
        </h3>

        <p className="mt-3 text-slate-500">
          No previous election available.
        </p>
      </div>
    );
  }

  const rows: ChangeRow[] = [
    {
      label: "Votes",
      current: current.result.votes,
      previous: previous.result.votes,
    },
    {
      label: "Vote Share",
      current: current.result.votes_pct,
      previous: previous.result.votes_pct,
      suffix: "%",
    },
    {
      label: "Winning Margin",
      current: current.result.margin,
      previous: previous.result.margin,
    },
    {
      label: "Total Assets",
      current: current.assets.total_assets_inr,
      previous: previous.assets.total_assets_inr,
    },
    {
      label: "Net Worth",
      current: current.assets.net_assets_inr,
      previous: previous.assets.net_assets_inr,
    },
    {
      label: "Liabilities",
      current: current.assets.total_liabilities_inr,
      previous: previous.assets.total_liabilities_inr,
    },
    {
      label: "Criminal Cases",
      current: current.criminal_cases_count,
      previous: previous.criminal_cases_count,
    },
    {
      label: "Serious Cases",
      current: current.serious_cases_count,
      previous: previous.serious_cases_count,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <h3 className="mb-5 text-lg font-semibold">
        Key Changes Since {previous.election.year}
      </h3>

      <div className="space-y-4">

        {rows.map((row) => {

          const diff = row.current - row.previous;

          const positive = diff > 0;

          const negative = diff < 0;

          return (

            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
            >

              <div>

                <p className="font-medium">
                  {row.label}
                </p>

                <p className="text-sm text-slate-500">
                  {formatNumber(row.previous)}
                  {row.suffix ?? ""}
                  {" → "}
                  {formatNumber(row.current)}
                  {row.suffix ?? ""}
                </p>

              </div>

              <div
                className={`flex items-center gap-2 font-semibold
                  ${
                    positive
                      ? "text-green-600"
                      : negative
                      ? "text-red-600"
                      : "text-slate-500"
                  }`}
              >

                {positive && <ArrowUp size={18} />}

                {negative && <ArrowDown size={18} />}

                {!positive && !negative && (
                  <Minus size={18} />
                )}

                {positive && "+"}

                {formatNumber(diff)}

                {row.suffix ?? ""}

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}