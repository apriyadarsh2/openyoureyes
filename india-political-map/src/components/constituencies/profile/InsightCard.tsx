"use client";

import {
  Brain,
  Lightbulb,
  TrendingUp,
  Trophy,
} from "lucide-react";

interface Props {
  insights: string[];
}

const icons = [
  TrendingUp,
  Trophy,
  Lightbulb,
  Brain,
];

const colors = [
  "bg-green-50 border-green-200 text-green-700",
  "bg-blue-50 border-blue-200 text-blue-700",
  "bg-amber-50 border-amber-200 text-amber-700",
  "bg-purple-50 border-purple-200 text-purple-700",
];

const titles = [
  "Political Trend",
  "Election Pattern",
  "Key Observation",
  "Analyst Insight",
];

export default function InsightCard({
  insights,
}: Props) {

  if (insights.length === 0) {
    return null;
  }

  return (

    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-8 py-6">

        <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
          Intelligence
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Constituency Insights
        </h2>

        <p className="mt-2 text-slate-500">
          Key observations derived from constituency
          election data.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-5 p-8 md:grid-cols-2">

        {insights.map((insight, index) => {

          const Icon =
            icons[index % icons.length];

          const color =
            colors[index % colors.length];

          const title =
            titles[index % titles.length];

          return (

            <div
              key={index}
              className={`rounded-2xl border p-6 ${color}`}
            >

              <div className="mb-5 flex items-center gap-3">

                <div className="rounded-xl bg-white/70 p-3">

                  <Icon size={22} />

                </div>

                <h3 className="font-semibold">
                  {title}
                </h3>

              </div>

              <p className="leading-7">
                {insight}
              </p>

            </div>

          );

        })}

      </div>

    </section>

  );

}