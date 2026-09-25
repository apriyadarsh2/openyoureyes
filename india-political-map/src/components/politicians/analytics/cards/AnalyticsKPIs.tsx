"use client";

import { Vote, Trophy, Wallet, Scale } from "lucide-react";
import KPICard from "./KPICard";
import { usePolitician } from "../../context/PoliticianProvider";

export default function AnalyticsKPIs() {
  const { summary } = usePolitician();

  const winRate =
    summary.elections_contested === 0
      ? 0
      : Math.round(
          (summary.elections_won / summary.elections_contested) * 100
        );

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <KPICard
        title="Elections"
        value={summary.elections_contested}
        subtitle={`${summary.elections_won} victories`}
        icon={Vote}
        iconColor="text-blue-400"
        iconBg="bg-blue-500/10 border-blue-500/20"
      />
      <KPICard
        title="Win Rate"
        value={`${winRate}%`}
        subtitle="Career Success"
        icon={Trophy}
        iconColor="text-green-400"
        iconBg="bg-green-500/10 border-green-500/20"
      />
      <KPICard
        title="Net Worth"
        value={`₹${(summary.net_assets_inr / 10000000).toFixed(2)} Cr`}
        subtitle="Latest Declaration"
        icon={Wallet}
        iconColor="text-emerald-400"
        iconBg="bg-emerald-500/10 border-emerald-500/20"
      />
      <KPICard
        title="Criminal Cases"
        value={summary.criminal_cases_count}
        subtitle={`${summary.serious_cases_count} serious`}
        icon={Scale}
        iconColor="text-red-400"
        iconBg="bg-red-500/10 border-red-500/20"
      />
    </div>
  );
}