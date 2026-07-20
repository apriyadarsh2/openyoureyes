"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  records: MPLADSRecord[];
}

export default function FundsTrendChart({
  records,
}: Props) {

  const data = [...records]
    .sort((a, b) => a.fy_start - b.fy_start)
    .map((r) => ({
      year: `${r.fy_start}-${String(r.fy_start + 1).slice(2)}`,
      Released: r.funds_released_lakh,
      Utilised: r.funds_utilised_lakh,
    }));

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">

          MPLADS Fund Allocation

        </h2>

        <p className="text-sm text-slate-500">

          Released vs Utilised Funds (₹ Lakhs)

        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={420}
      >

        <BarChart
          data={data}
          barGap={12}
          barCategoryGap="22%"
        >

          <defs>

            <linearGradient
              id="released"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="0%"
                stopColor="#2563eb"
              />

              <stop
                offset="100%"
                stopColor="#60a5fa"
              />

            </linearGradient>

            <linearGradient
              id="utilised"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="0%"
                stopColor="#16a34a"
              />

              <stop
                offset="100%"
                stopColor="#86efac"
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="year"
            tick={{ fontSize: 13 }}
          />

          <YAxis
            tick={{ fontSize: 13 }}
          />

          <Tooltip
            cursor={{
              fill: "#f8fafc",
            }}
            contentStyle={{
              borderRadius: 14,
              border: "none",
              boxShadow:
                "0 8px 20px rgba(0,0,0,.15)",
            }}
          />

          <Legend />

          <Bar
            dataKey="Released"
            fill="url(#released)"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="Utilised"
            fill="url(#utilised)"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}