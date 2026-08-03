"use client";

import {
  CalendarDays,
  Trophy,
  Landmark,
  MapPinned,
  BadgeCheck,
  Flag,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function CareerOverview({ profile }: Props) {
  if (!profile || !profile.elections) return null;

  const elections = [...profile.elections].sort(
    (a, b) => a.election.year - b.election.year
  );

  const contests = elections.length;
  const wins = elections.filter((e) => e.result?.winner).length;
  const winRate = contests > 0 ? ((wins / contests) * 100).toFixed(1) : "0";

  const parties = [...new Set(elections.map((e) => e.party.abbreviation))];
  const constituencies = [...new Set(elections.map((e) => e.constituency.name_en))];

  const firstYear = elections[0]?.election.year;
  const lastYear = elections[elections.length - 1]?.election.year;
  const span = firstYear && lastYear ? `${firstYear} – ${lastYear}` : "—";

  const partySwitcher = parties.length > 1;
  const hopper = constituencies.length > 1;

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-4 sm:p-6 shadow-sm w-full">
      
      {/* HEADER SECTION WITH INLINE BADGES */}
      <div className="mb-5 flex flex-col items-start justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
            Electoral Summary
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-medium text-politic-muted">
            Complete political journey across every election contested.
          </p>
        </div>

        {/* DYNAMIC BADGES */}
        <div className="flex flex-wrap gap-2">
          {partySwitcher && (
            <Badge colorClass="bg-orange-500/10 text-orange-400 border-orange-500/20">
              🔄 Party Switcher
            </Badge>
          )}
          {hopper && (
            <Badge colorClass="bg-purple-500/10 text-purple-400 border-purple-500/20">
              📍 Constituency Hopper
            </Badge>
          )}
          {wins >= 3 && (
            <Badge colorClass="bg-green-500/10 text-green-400 border-green-500/20">
              🏆 {wins}-Time Winner
            </Badge>
          )}
          {Number(winRate) >= 70 && (
            <Badge colorClass="bg-blue-500/10 text-blue-400 border-blue-500/20">
              📈 Strong Record
            </Badge>
          )}
        </div>
      </div>

      {/* COMPACT KPI GRID - Fixed layout to 3 columns max on desktop to prevent truncation */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        <KPI
          icon={<Trophy size={16} />}
          label="Contests"
          value={contests}
          colorClass="bg-blue-500/10 text-blue-400 border border-blue-500/20"
        />
        <KPI
          icon={<BadgeCheck size={16} />}
          label="Wins"
          value={wins}
          colorClass="bg-green-500/10 text-green-400 border border-green-500/20"
        />
        <KPI
          icon={<Flag size={16} />}
          label="Win Rate"
          value={`${winRate}%`}
          colorClass="bg-amber-500/10 text-amber-400 border border-amber-500/20"
        />
        <KPI
          icon={<Landmark size={16} />}
          label="Parties"
          value={parties.length}
          colorClass="bg-purple-500/10 text-purple-400 border border-purple-500/20"
        />
        <KPI
          icon={<MapPinned size={16} />}
          label="Seats"
          value={constituencies.length}
          colorClass="bg-pink-500/10 text-pink-400 border border-pink-500/20"
        />
        <KPI
          icon={<CalendarDays size={16} />}
          label="Career Span"
          value={span}
          colorClass="bg-slate-500/20 text-slate-300 border border-slate-500/30"
        />
      </div>
    </div>
  );
}

// KPI COMPONENT RESTRUCTURED
interface KPIProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  colorClass: string;
}

function KPI({ icon, label, value, colorClass }: KPIProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-politic-border bg-politic-inner p-3 shadow-sm transition-colors hover:border-politic-border/80">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        {/* Removed 'truncate' classes to ensure full text is always visible */}
        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-politic-muted">
          {label}
        </p>
        <h3 className="text-base font-black leading-tight text-politic-text sm:text-lg">
          {value}
        </h3>
      </div>
    </div>
  );
}

// BADGE COMPONENT 
function Badge({ children, colorClass }: { children: React.ReactNode; colorClass: string }) {
  return (
    <span className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider ${colorClass}`}>
      {children}
    </span>
  );
}