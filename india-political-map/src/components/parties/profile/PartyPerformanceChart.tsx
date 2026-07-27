"use client";

import { useParams } from "next/navigation";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { PartyElectionResult } from "../../types/party";
import { PARTY_COLORS } from "../../../../data/partyColors";
interface Props {
  data: PartyElectionResult[];
  bestText?: string;
  themeColor?: string; // Optional manual override
}

export default function PartyPerformanceChart({
  data,
  bestText = "best: 303 seats in 2019",
  themeColor,
}: Props) {
  const params = useParams();

  // Extract slug from URL (e.g., "bjp" -> "BJP")
  const rawSlug = typeof params?.slug === "string" ? params.slug : "";
  const slugKey = rawSlug.toUpperCase().replace("-", "");

  // Priority: URL lookup -> custom prop themeColor -> default blue
  const barColor = PARTY_COLORS[slugKey] || themeColor || "#3b82f6";
  const lineChartColor = "#334155";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-100 px-8 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-2">
              <TrendingUp size={22} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Lok Sabha — every election contested
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Election performance and vote share trends over time.
              </p>
            </div>
          </div>
          {bestText && (
            <div className="self-start rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 sm:self-auto">
              {bestText}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[500px] p-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="year"
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
            />

            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Seats",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
              label={{
                value: "Vote %",
                angle: 90,
                position: "insideRight",
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderColor: "#e2e8f0",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                fontSize: "13px",
              }}
            />

            <Legend
              wrapperStyle={{
                paddingTop: "15px",
                fontSize: "13px",
              }}
            />

            {/* Dynamic Bar Color dynamically pulled from URL */}
            <Bar
              yAxisId="left"
              dataKey="won"
              name="Seats won"
              radius={[4, 4, 0, 0]}
              fill={barColor}
              barSize={28}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="vote_share"
              name="Vote share"
              stroke={lineChartColor}
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: lineChartColor,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}