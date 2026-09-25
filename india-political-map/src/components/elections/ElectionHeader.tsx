"use client";

import { ElectionOverview } from "../types/election";

interface Props {
  overview: ElectionOverview;
}

export default function ElectionHeader({ overview }: Props) {
  return (
    <div className="mb-10 mt-2 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      
      {/* Left: Typography */}
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-politic-text">
          Every <span className="text-politic-accent">Seat</span> Has a <span className="text-politic-accent">Story</span>.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-politic-muted">
Explore every Lok Sabha General Election since 1951—trace the verdicts and political shifts that shaped the nation.        </p>
      </div>

      {/* Right: Specific Election Mini-Stats */}
      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        
        {/* Lok Sabha Stat */}
        <div className="flex-1 sm:flex-none rounded-xl border border-politic-border bg-politic-card px-5 py-3 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-politic-muted">
            Lok Sabha
          </p>
          <p className="mt-1 text-2xl font-black text-politic-text">
            {overview.lok_sabha}
            <span className="text-sm font-bold text-politic-muted">
              {getOrdinalSuffix(overview.lok_sabha)}
            </span>
          </p>
        </div>

        {/* Year Stat */}
        <div className="flex-1 sm:flex-none rounded-xl border border-politic-border bg-politic-card px-5 py-3 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-politic-muted">
            {overview.election_type}
          </p>
          <p className="mt-1 text-2xl font-black text-politic-accent">
            {overview.year}
          </p>
        </div>

        {/* Result Date Stat */}
        <div className="w-full sm:w-auto rounded-xl border border-politic-border bg-politic-card px-5 py-3 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-politic-muted">
            Result Date
          </p>
          <p className="mt-2 text-sm font-bold text-politic-text">
            {overview.result_date}
          </p>
        </div>

      </div>
    </div>
  );
}

/* =========================================
   Helpers
========================================= */
function getOrdinalSuffix(number: number): string {
  const lastTwo = number % 100;
  if (lastTwo >= 11 && lastTwo <= 13) {
    return "th";
  }
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}