"use client";

import {
  TrendingUp,
  Landmark,
  MapPinned,
  Trophy,
  Wallet,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function CareerInsights({ profile }: Props) {
  if (!profile || !profile.elections) return null;

  // Chronological sort zaroori hai switches track karne ke liye
  const chronological = [...profile.elections].sort(
    (a, b) => a.election.year - b.election.year
  );

  const insights: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    colorClass: string;
  }[] = [];

  // -----------------------
  // 1. PARTY SWITCH LOGIC
  // -----------------------
  const partySwitches: { year: number; from: string; to: string }[] = [];
  let prevParty = chronological[0]?.party.abbreviation;

  for (let i = 1; i < chronological.length; i++) {
    const currParty = chronological[i].party.abbreviation;
    if (currParty !== prevParty) {
      partySwitches.push({
        year: chronological[i].election.year,
        from: prevParty,
        to: currParty,
      });
      prevParty = currParty;
    }
  }

  const uniquePartiesCount = new Set(chronological.map((e) => e.party.abbreviation)).size;

  if (partySwitches.length > 0) {
    insights.push({
      icon: <Landmark size={18} />,
      title: "Party Switch",
      colorClass: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
      content: (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium leading-relaxed text-politic-muted sm:text-sm">
            Contested under {uniquePartiesCount} different political parties.
          </p>
          <div className="flex flex-col gap-1.5">
            {partySwitches.map((sw, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs">
                <span className="rounded border border-politic-border bg-politic-base px-1.5 py-0.5 font-bold text-politic-muted">
                  {sw.year}
                </span>
                <span className="font-semibold text-politic-muted">{sw.from}</span>
                <span className="text-orange-400">➔</span>
                <span className="font-bold text-politic-text">{sw.to}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    });
  }

  // -----------------------
  // 2. CONSTITUENCY CHANGE LOGIC
  // -----------------------
  const seatSwitches: { year: number; from: string; to: string }[] = [];
  let prevSeat = chronological[0]?.constituency.name_en;

  for (let i = 1; i < chronological.length; i++) {
    const currSeat = chronological[i].constituency.name_en;
    if (currSeat !== prevSeat) {
      seatSwitches.push({
        year: chronological[i].election.year,
        from: prevSeat,
        to: currSeat,
      });
      prevSeat = currSeat;
    }
  }

  const uniqueSeatsCount = new Set(chronological.map((e) => e.constituency.name_en)).size;

  if (seatSwitches.length > 0) {
    insights.push({
      icon: <MapPinned size={18} />,
      title: "Constituency Journey",
      colorClass: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      content: (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium leading-relaxed text-politic-muted sm:text-sm">
            Represented {uniqueSeatsCount} constituencies during the career.
          </p>
          <div className="flex flex-col gap-1.5">
            {seatSwitches.map((sw, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs">
                <span className="rounded border border-politic-border bg-politic-base px-1.5 py-0.5 font-bold text-politic-muted">
                  {sw.year}
                </span>
                <span className="truncate max-w-[100px] sm:max-w-none font-semibold text-politic-muted" title={sw.from}>
                  {sw.from}
                </span>
                <span className="text-purple-400">➔</span>
                <span className="truncate max-w-[100px] sm:max-w-none font-bold text-politic-text" title={sw.to}>
                  {sw.to}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    });
  }

  // -----------------------
  // 3. WINNING RECORD
  // -----------------------
  const wins = chronological.filter((e) => e.result?.winner).length;

  insights.push({
    icon: <Trophy size={18} />,
    title: "Election Performance",
    colorClass: "bg-green-500/10 text-green-400 border border-green-500/20",
    content: (
      <p className="text-xs font-medium leading-relaxed text-politic-muted sm:text-sm">
        Won <strong className="text-politic-text">{wins}</strong> of {chronological.length} elections contested.
      </p>
    ),
  });

  // -----------------------
  // 4. ASSET GROWTH
  // -----------------------
  const first = chronological[0]?.assets?.net_assets_inr ?? 0;
  const latest = chronological[chronological.length - 1]?.assets?.net_assets_inr ?? 0;

  if (first > 0) {
    const growth = (((latest - first) / first) * 100).toFixed(0);
    insights.push({
      icon: <Wallet size={18} />,
      title: "Declared Assets",
      colorClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      content: (
        <p className="text-xs font-medium leading-relaxed text-politic-muted sm:text-sm">
          Net assets increased by approximately <strong className="text-politic-text">{growth}%</strong> across the recorded election history.
        </p>
      ),
    });
  }

  // -----------------------
  // 5. VOTE SHARE
  // -----------------------
  const highestVote = Math.max(...chronological.map((e) => e.result.votes_pct || 0));

  insights.push({
    icon: <TrendingUp size={18} />,
    title: "Peak Vote Share",
    colorClass: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    content: (
      <p className="text-xs font-medium leading-relaxed text-politic-muted sm:text-sm">
        Highest recorded vote share was <strong className="text-politic-text">{highestVote}%</strong> during the political career.
      </p>
    ),
  });

  return (
    <div className="w-full rounded-2xl border border-politic-border bg-politic-card p-4 shadow-sm sm:p-6">
      
      {/* HEADER SECTION */}
      <div className="mb-6 lg:mb-8 flex flex-col items-start justify-between gap-2 border-b border-politic-border pb-4">
        <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
          Career Intelligence
        </h2>
        <p className="text-xs font-medium text-politic-muted sm:text-sm">
          Automatically generated observations based on election history.
        </p>
      </div>

      {/* INSIGHTS GRID */}
      <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>
      
    </div>
  );
}

// -----------------------
// INSIGHT CARD COMPONENT
// -----------------------
interface CardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  colorClass: string;
}

function InsightCard({ icon, title, content, colorClass }: CardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-politic-border bg-politic-inner p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-politic-muted/50 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
          {icon}
        </div>
        <h3 className="text-sm font-bold text-politic-text sm:text-base">
          {title}
        </h3>
      </div>
      <div className="flex-1">
        {content}
      </div>
    </div>
  );
}