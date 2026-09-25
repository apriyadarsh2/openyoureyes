"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { Landmark } from "lucide-react";
import { usePolitician } from "../../context/PoliticianProvider";

export default function MPLADSChart() {
  const { profile } = usePolitician();

  const data =
    profile?.mplads.map((m) => ({
      year: `FY ${m.fy_start}`,
      released: m.funds_released_lakh,
      utilised: m.funds_utilised_lakh,
      utilisation: m.utilisation_pct,
    })) ?? [];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-500/30">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
            <Landmark size={20} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-politic-text">
              MPLADS Performance
            </h2>
            <p className="text-xs sm:text-sm text-politic-muted">
              Released vs Utilised Funds (₹ Lakhs)
            </p>
          </div>
        </div>

        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
          {data.at(-1)?.utilisation ?? 0}% Utilised
        </span>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3654" opacity={0.5} />
            <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "0.75rem",
                color: "#f8fafc",
              }}
              formatter={(value, name) => [
                `₹${value} Lakh`,
                name === "released" ? "Funds Released" : "Funds Utilised",
              ]}
            />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontSize: "12px", color: "#94a3b8" }}
            />
            <Line
              type="monotone"
              dataKey="released"
              name="Released"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={{ r: 4, fill: "#60a5fa" }}
            />
            <Line
              type="monotone"
              dataKey="utilised"
              name="Utilised"
              stroke="#34d399"
              strokeWidth={3}
              dot={{ r: 4, fill: "#34d399" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}