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

import { Vote } from "lucide-react";
import { usePolitician } from "../../context/PoliticianProvider";

export default function VoteShareChart() {
  const { profile } = usePolitician();

  const data =
    profile?.elections.map((e) => ({
      year: e.election.year,
      voteShare: e.result.votes_pct,
      winner: e.result.winner,
    })) ?? [];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-500/30">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
          <Vote size={20} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-politic-text">
            Vote Share
          </h2>
          <p className="text-xs sm:text-sm text-politic-muted">
            Vote percentage received in each election
          </p>
        </div>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3654" opacity={0.5} />
            <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis unit="%" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "0.75rem",
                color: "#f8fafc",
              }}
              formatter={(value) => [`${value}%`, "Vote Share"]}
            />
            <Bar dataKey="voteShare" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.winner ? "#3b82f6" : "#475569"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}