"use client";

import { CheckCircle2 } from "lucide-react";
import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";

interface Props {
  disclosure?: FinancialDisclosure;
}

export default function AssetsHistory({ disclosure }: Props) {
  if (!disclosure) {
    return (
      <div className="rounded-2xl border border-dashed border-politic-border p-10 text-center text-sm font-medium text-politic-muted">
        Assets history unavailable.
      </div>
    );
  }

  // 1. Extract values safely from disclosure
  const movable =
    disclosure.assets?.movable_assets?.gross_total_movable?.total || 0;
  const immovable =
    disclosure.assets?.immovable_assets?.gross_total_immovable?.total || 0;
  const totalAssets = movable + immovable;

  const privateLiabilities =
    disclosure.liabilities?.financial_liabilities?.grand_total_private_liabilities?.total || 0;
  const govtDues =
    disclosure.liabilities?.government_dues?.grand_total_govt_dues?.total || 0;
  const liabilities = privateLiabilities + govtDues;

  const netAssets = totalAssets - liabilities;

  const electionYear = disclosure.candidate_overview?.election_year || "2024";
  const constituency = disclosure.candidate_overview?.constituency || "Constituency";
  const party = disclosure.candidate_overview?.political_party || "";

  // 2. Format INR currency
  const formatCurrency = (val: number) => {
    const abs = Math.abs(val);
    const sign = val < 0 ? "-" : "";
    if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(2)} Cr`;
    if (abs >= 100000) return `${sign}₹${(abs / 100000).toFixed(2)} Lac`;
    return `${sign}₹${abs.toLocaleString("en-IN")}`;
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-politic-text">
          Affidavit Timeline
        </h2>
        <p className="mt-1 text-xs sm:text-sm font-medium text-politic-muted">
          Net worth declared in election affidavits.
        </p>
      </div>

      <div className="rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-8 shadow-sm">
        {/* Timeline Container */}
        <div className="relative border-l-2 border-politic-border/60 ml-2 sm:ml-3 space-y-8 py-2">
          <div className="relative pl-6 sm:pl-8 group">
            {/* Sleek Dot Indicator */}
            <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-politic-accent ring-4 ring-politic-card transition-transform group-hover:scale-125" />

            {/* Content Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
              {/* Left Side: Year & Info */}
              <div className="min-w-[160px]">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-black text-politic-text">
                    {electionYear} General Election
                  </h3>
                  <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-amber-400 border border-amber-500/20">
                    Latest Filing
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-politic-muted">
                  {constituency} {party ? `• ${party}` : ""}
                </p>
              </div>

              {/* Right Side: Stats */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 rounded-xl border border-politic-border/50 bg-politic-inner px-4 py-3 sm:px-6 sm:py-4">
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-politic-muted">
                    Net Assets
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-bold tabular-nums text-politic-text">
                    {formatCurrency(netAssets)}
                  </p>
                </div>

                <div className="w-px h-8 bg-politic-border/50 hidden sm:block" />

                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-politic-muted">
                    Total Assets
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-bold tabular-nums text-politic-text">
                    {formatCurrency(totalAssets)}
                  </p>
                </div>

                <div className="w-px h-8 bg-politic-border/50 hidden sm:block" />

                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-politic-muted">
                    Liabilities
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-bold tabular-nums text-politic-text">
                    {formatCurrency(liabilities)}
                  </p>
                </div>

                {/* Status Pill */}
                <div className="sm:ml-auto flex items-center gap-1.5 rounded-lg px-2.5 py-1 bg-politic-card border border-politic-border">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span className="text-xs font-bold tabular-nums text-emerald-400">
                    Affidavit Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}