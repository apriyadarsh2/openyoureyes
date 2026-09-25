"use client";

import { Brain, Lightbulb, TrendingUp, Trophy } from "lucide-react";

interface Props {
  insights: string[];
}

const icons = [TrendingUp, Trophy, Lightbulb, Brain];

// Dark mode compliant colors
const colors = [
  "bg-green-500/10 border-green-500/20 text-green-400",
  "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "bg-purple-500/10 border-purple-500/20 text-purple-400",
];

const titles = [
  "Political Trend",
  "Election Pattern",
  "Key Observation",
  "Analyst Insight",
];

export default function InsightCard({ insights }: Props) {
  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-politic-border bg-politic-card shadow-sm">
      {/* Header */}
      <div className="border-b border-politic-border px-8 py-6">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Intelligence
        </p>
        <h2 className="mt-1 text-2xl font-bold text-politic-text">
          Constituency Insights
        </h2>
        <p className="mt-2 text-politic-muted">
          Key observations derived from constituency election data.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 p-8 md:grid-cols-2">
        {insights.map((insight, index) => {
          const Icon = icons[index % icons.length];
          const color = colors[index % colors.length];
          const title = titles[index % titles.length];

          return (
            <div
              key={index}
              className={`rounded-2xl border p-6 ${color}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-politic-card/80 p-3">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold">{title}</h3>
              </div>
              <p className="leading-7 text-politic-muted font-medium">
                {insight}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}