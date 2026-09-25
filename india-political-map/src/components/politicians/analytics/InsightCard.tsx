"use client";

import {
  TrendingUp,
  Trophy,
  Wallet,
  Scale,
  Landmark,
} from "lucide-react";

import { usePolitician } from "../context/PoliticianProvider";

export default function InsightCard() {
  const { summary, profile } = usePolitician();

  const elections = profile?.elections ?? [];
  const mplads = profile?.mplads ?? [];

  const firstElection = elections[0];
  const latestElection = elections[elections.length - 1];

  const assetGrowth =
    firstElection && latestElection && firstElection.assets?.total_assets_inr > 0
      ? (
          ((latestElection.assets.total_assets_inr -
            firstElection.assets.total_assets_inr) /
            firstElection.assets.total_assets_inr) *
          100
        ).toFixed(0)
      : "0";

  const highestVote = elections.length
    ? Math.max(...elections.map((e) => e.result?.votes_pct ?? 0))
    : 0;

  const avgUtilisation = mplads.length
    ? (
        mplads.reduce((sum, m) => sum + (m.utilisation_pct ?? 0), 0) /
        mplads.length
      ).toFixed(1)
    : "0";

  const insights = [
    {
      title: "Election Performance",
      value: `${summary.elections_won}/${summary.elections_contested}`,
      description: `Won ${summary.elections_won} of ${summary.elections_contested} elections.`,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-400",
      accentBorder: "hover:border-blue-500/40",
      icon: Trophy,
    },
    {
      title: "Asset Growth",
      value: `+${assetGrowth}%`,
      description: "Growth in declared assets since first election.",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      iconColor: "text-emerald-400",
      accentBorder: "hover:border-emerald-500/40",
      icon: Wallet,
    },
    {
      title: "Highest Vote Share",
      value: `${highestVote}%`,
      description: "Best electoral performance recorded.",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      iconColor: "text-indigo-400",
      accentBorder: "hover:border-indigo-500/40",
      icon: TrendingUp,
    },
    {
      title: "Criminal Cases",
      value: summary.criminal_cases_count,
      description: `${summary.serious_cases_count} serious cases reported.`,
      iconBg: "bg-red-500/10 border-red-500/20",
      iconColor: "text-red-400",
      accentBorder: "hover:border-red-500/40",
      icon: Scale,
    },
    {
      title: "MPLADS Utilisation",
      value: `${avgUtilisation}%`,
      description: "Average utilisation of released constituency funds.",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      iconColor: "text-amber-400",
      accentBorder: "hover:border-amber-500/40",
      icon: Landmark,
    },
  ];

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-politic-text">
            Key <span className="text-politic-accent">Insights</span>
          </h2>
          <p className="mt-1 text-sm text-politic-muted">
            High-level analytical summary derived across public records.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`group flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 ${item.accentBorder}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <span className="text-2xl sm:text-3xl font-black text-politic-text">
                  {item.value}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold text-politic-text">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-politic-muted font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}