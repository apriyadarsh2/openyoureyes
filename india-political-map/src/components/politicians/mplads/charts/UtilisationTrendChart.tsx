"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
 YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  records: MPLADSRecord[];
}

export default function UtilisationTrendChart({
  records,
}: Props) {

  const data = [...records]
    .sort((a, b) => a.fy_start - b.fy_start)
    .map(record => ({
      year: `${record.fy_start}-${String(
        record.fy_start + 1
      ).slice(2)}`,

      utilisation: record.utilisation_pct,
    }));

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">

        Utilisation Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis
            domain={[0,100]}
            unit="%"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="utilisation"
            strokeWidth={3}
            dot={{ r:5 }}
            activeDot={{ r:7 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}