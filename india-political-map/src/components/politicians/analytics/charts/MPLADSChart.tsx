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

    <div className="rounded-2xl border bg-white p-5 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-100 p-2">

            <Landmark
              size={22}
              className="text-indigo-600"
            />

          </div>

          <div>

            <h2 className="font-semibold">

              MPLADS Performance

            </h2>

            <p className="text-sm text-slate-500">

              Released vs Utilised Funds

            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

          {data.at(-1)?.utilisation ?? 0}% Utilised

        </span>

      </div>

      <div className="h-72">

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis
              dataKey="year"
            />

            <YAxis/>

            <Tooltip/>

            <Legend/>

            <Line
              type="monotone"
              dataKey="released"
              stroke="#2563eb"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="utilised"
              stroke="#16a34a"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}