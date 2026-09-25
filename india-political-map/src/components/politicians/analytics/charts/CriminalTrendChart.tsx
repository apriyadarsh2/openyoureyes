"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { Scale } from "lucide-react";
import { usePolitician } from "../../context/PoliticianProvider";

export default function CriminalTrendChart() {
  const { profile } = usePolitician();

  const data =
    profile?.elections.map((e) => ({
      year: e.election.year,
      total: e.criminal_cases_count,
      serious: e.serious_cases_count,
    })) ?? [];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-red-500/30">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
            <Scale size={20} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-politic-text">
              Criminal Cases Trend
            </h2>
            <p className="text-xs sm:text-sm text-politic-muted">
              Total criminal cases across elections
            </p>
          </div>
        </div>

        <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
          Latest: {data.at(-1)?.total ?? 0}
        </span>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3654" opacity={0.5} />
            <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis allowDecimals={false} stroke="#94a3b8" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "0.75rem",
                color: "#f8fafc",
              }}
              formatter={(value, name) => [
                value,
                name === "serious" ? "Serious Cases" : "Total Cases",
              ]}
            />
            <Bar dataKey="total" radius={[6, 6, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={index} fill="#ef4444" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}