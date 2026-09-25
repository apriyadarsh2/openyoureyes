"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";

interface Props {
  disclosure?: FinancialDisclosure;
}

interface TooltipProps {
  active?: boolean;
  payload?: {
    value: number;
    dataKey: string;
    color: string;
    payload: {
      year: string | number;
    };
  }[];
}

function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-politic-border bg-politic-base p-4 shadow-xl">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-politic-muted border-b border-politic-border pb-2">
        Election {payload[0].payload.year}
      </h3>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          className="flex items-center justify-between gap-8 mb-1.5 last:mb-0"
        >
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: item.color }}
          >
            {item.dataKey === "assets" ? "Total Assets" : "Liabilities"}
          </span>

          <span className="text-sm font-black text-politic-text">
            ₹{item.value.toFixed(2)} Cr
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AssetsChart({ disclosure }: Props) {
  if (!disclosure) return null;

  // 1. Calculate values safely
  const movable = disclosure.assets?.movable_assets?.gross_total_movable?.total || 0;
  const immovable = disclosure.assets?.immovable_assets?.gross_total_immovable?.total || 0;
  const totalAssets = (movable + immovable) / 10000000; // Convert to Crores

  const privateLiabilities = disclosure.liabilities?.financial_liabilities?.grand_total_private_liabilities?.total || 0;
  const govtDues = disclosure.liabilities?.government_dues?.grand_total_govt_dues?.total || 0;
  const totalLiabilities = (privateLiabilities + govtDues) / 10000000; // Convert to Crores

  const year = disclosure.candidate_overview?.election_year || "2024";

  // 2. Map to Recharts data array
  const data = [
    {
      year: year.toString(),
      assets: totalAssets,
      liabilities: totalLiabilities,
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm">
      {/* Header - Dark Theme */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-politic-border bg-politic-inner px-5 py-5 sm:px-8 sm:py-6 gap-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-politic-text">
            Wealth Analytics
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-medium text-politic-muted">
            Total assets and liabilities for the latest election
          </p>
        </div>

        <div className="flex items-center rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-green-400">
          <TrendingUp className="mr-2 inline h-4 w-4" />
          Declared Wealth ₹{totalAssets.toFixed(2)} Cr
        </div>
      </div>

      {/* Chart */}
      <div className="h-[350px] sm:h-[450px] p-4 sm:p-8">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            {/* Grid line */}
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" vertical={false} />

            {/* Axes */}
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8" }}
              dy={10}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8" }}
              tickFormatter={(value) => `₹${value} Cr`}
              dx={-10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#1e293b", opacity: 0.4 }} // subtle background highlight on hover
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{
                paddingBottom: "20px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#94a3b8",
              }}
            />

            {/* Assets Bar */}
            <Bar
              dataKey="assets"
              name="Total Assets"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              maxBarSize={80} // Keeps the bar from getting too wide since there's only 1 item
            >
              <LabelList
                dataKey="assets"
                position="top"
                formatter={(value: any) => `₹${Number(value || 0).toFixed(2)} Cr`}
                style={{ fill: "#e2e8f0", fontSize: "11px", fontWeight: "bold" }}
              />
            </Bar>

            {/* Liabilities Bar */}
            <Bar
              dataKey="liabilities"
              name="Liabilities"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              maxBarSize={80}
            >
               <LabelList
                dataKey="liabilities"
                position="top"
                formatter={(value: any) => `₹${Number(value || 0).toFixed(2)} Cr`}
                style={{ fill: "#e2e8f0", fontSize: "11px", fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}