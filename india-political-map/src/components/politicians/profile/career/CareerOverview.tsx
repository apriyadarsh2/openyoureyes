"use client";

import {
  CalendarDays,
  Trophy,
  Landmark,
  BadgeCheck,
  Flag,
  Vote,
} from "lucide-react";

import { ElectoralSummary } from "@/src/components/types/politician";

interface Props {
  summary?: ElectoralSummary;
}

export default function CareerOverview({ summary }: Props) {
  if (!summary) return null;

  const careerSpan =
    summary.career_start_year && summary.career_end_year
      ? `${summary.career_start_year} – ${summary.career_end_year}`
      : "—";

  return (
    <div className="w-full rounded-2xl border border-politic-border bg-politic-card p-4 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
          Electoral Summary
        </h2>

        <p className="mt-1 text-xs font-medium text-politic-muted sm:text-sm">
          Electoral history across every election contested.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        <KPI
          icon={<Trophy size={16} />}
          label="Contests"
          value={summary.contests}
          colorClass="bg-blue-500/10 text-blue-400 border-blue-500/20"
        />

        <KPI
          icon={<BadgeCheck size={16} />}
          label="Wins"
          value={summary.wins}
          colorClass="bg-green-500/10 text-green-400 border-green-500/20"
        />

        <KPI
          icon={<Flag size={16} />}
          label="Win Rate"
          value={`${summary.win_rate.toFixed(1)}%`}
          colorClass="bg-amber-500/10 text-amber-400 border-amber-500/20"
        />

        <KPI
          icon={<Landmark size={16} />}
          label="Parties"
          value={summary.parties}
          colorClass="bg-purple-500/10 text-purple-400 border-purple-500/20"
        />

        <KPI
          icon={<Vote size={16} />}
          label="Total Votes"
          value={summary.total_votes.toLocaleString("en-IN")}
          colorClass="bg-pink-500/10 text-pink-400 border-pink-500/20"
        />

        
      </div>
    </div>
  );
}

interface KPIProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  colorClass: string;
}

function KPI({
  icon,
  label,
  value,
  colorClass,
}: KPIProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-politic-border bg-politic-inner p-3 shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${colorClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-widest text-politic-muted sm:text-[10px]">
          {label}
        </p>

        <h3 className="text-base font-black leading-tight text-politic-text sm:text-lg">
          {value}
        </h3>
      </div>
    </div>
  );
}