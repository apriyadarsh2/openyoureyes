"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { usePolitician } from "../../context/PoliticianProvider";

export default function AssetsGrowthChart() {
  const { profile } = usePolitician();

  const elections = profile?.elections ?? [];

  const data = elections.map((e) => ({
    year: e.election?.year ?? 2024,
    assets: Number(
      ((e.assets?.total_assets_inr ?? 0) / 10000000).toFixed(2)
    ),
  }));

  if (!data.length) {
    return (
      <div className="flex h-full min-h-[340px] flex-col items-center justify-center rounded-2xl border border-dashed border-politic-border bg-politic-card p-8 text-center shadow-sm">
        <h3 className="text-base sm:text-lg font-bold text-politic-text">
          No Asset Growth History
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-politic-muted">
          Multi-election timeline data is not available for this candidate.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-500/30">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
          <TrendingUp size={20} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-politic-text">
            Assets Growth
          </h2>
          <p className="text-xs sm:text-sm text-politic-muted">
            Declared assets across elections
          </p>
        </div>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3654" opacity={0.5} />
            <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis unit=" Cr" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "0.75rem",
                color: "#f8fafc",
              }}
              formatter={(value) => [`₹${value} Cr`, "Assets"]}
            />
            <Line
              type="monotone"
              dataKey="assets"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "#101827" }}
              activeDot={{ r: 6, fill: "#34d399" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}