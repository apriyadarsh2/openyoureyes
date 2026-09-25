"use client";

import { ArrowDown, ArrowUp, Minus, AlertTriangle } from "lucide-react";
import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  current: PoliticianElection;
  previous?: PoliticianElection;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 }).format(value);
}

function formatAssetDiff(value: number) {
  if (value === 0) return "No Change";
  return `₹${Math.abs(value / 10000000).toFixed(2)} Cr`;
}

interface ChangeRow {
  label: string;
  diff: number;
  type: "number" | "asset" | "percent";
}

export default function ElectionComparisonCard({ current, previous }: Props) {
  if (!previous) {
    return (
      <div className="rounded-xl border border-politic-border bg-politic-card p-5 text-center shadow-sm">
        <p className="text-sm font-medium text-politic-muted">
          No previous election data available for comparison.
        </p>
      </div>
    );
  }

  // UX Fix: Check if constituency changed
  const constituencyChanged = current.constituency.name_en !== previous.constituency.name_en;

  const rows: ChangeRow[] = [
    ...(constituencyChanged ? [] : [
      { label: "Votes", diff: current.result.votes - previous.result.votes, type: "number" as const },
      { label: "Vote Share", diff: current.result.votes_pct - previous.result.votes_pct, type: "percent" as const },
      { label: "Winning Margin", diff: current.result.margin - previous.result.margin, type: "number" as const },
    ]),
    { label: "Net Worth", diff: current.assets.net_assets_inr - previous.assets.net_assets_inr, type: "asset" as const },
    { label: "Liabilities", diff: current.assets.total_liabilities_inr - previous.assets.total_liabilities_inr, type: "asset" as const },
    { label: "Criminal Cases", diff: current.criminal_cases_count - previous.criminal_cases_count, type: "number" as const },
  ];

  return (
    <div className="rounded-xl border border-politic-border bg-politic-card p-4 sm:p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-politic-text border-b border-politic-border pb-2">
        Key Changes Since {previous.election.year}
      </h3>

      {constituencyChanged && (
        <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 sm:p-4 text-amber-400">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            Constituency changed from <strong className="font-bold text-amber-300">{previous.constituency.name_en}</strong> to <strong className="font-bold text-amber-300">{current.constituency.name_en}</strong>. Electoral stats (Votes, Margin) cannot be directly compared.
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => {
          const isPositive = row.diff > 0;
          const isNegative = row.diff < 0;

          // Determine color based on context (more assets = good, more liabilities/crimes = bad)
          let colorClass = "text-politic-muted";
          if (row.label === "Liabilities" || row.label === "Criminal Cases") {
             colorClass = isPositive ? "text-red-400" : isNegative ? "text-green-400" : "text-politic-muted";
          } else {
             colorClass = isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-politic-muted";
          }

          let formattedDiff = "";
          if (row.type === "asset") formattedDiff = formatAssetDiff(row.diff);
          else if (row.type === "percent") formattedDiff = `${Math.abs(row.diff).toFixed(1)}%`;
          else formattedDiff = formatNumber(Math.abs(row.diff));

          return (
            <div key={row.label} className="flex items-center justify-between rounded-lg border border-politic-border/50 bg-politic-inner p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-politic-muted">
                {row.label}
              </p>

              <div className={`flex items-center gap-1.5 font-black text-sm sm:text-base tabular-nums ${colorClass}`}>
                {isPositive && <ArrowUp size={16} />}
                {isNegative && <ArrowDown size={16} />}
                {!isPositive && !isNegative && <Minus size={16} />}
                
                {row.diff !== 0 && (isPositive ? "+" : "-")}
                {formattedDiff}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}