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

  const data =
    profile?.elections.map((e) => ({

      year: e.election.year,

      assets:
        Number(
          (
            e.assets.total_assets_inr /
            10000000
          ).toFixed(2)
        ),

    })) ?? [];

  return (

    <div
      className="
      rounded-2xl
      border
      bg-white
      p-5
      shadow-sm
      "
    >

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-green-100 p-2">

          <TrendingUp
            className="text-green-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="font-semibold">

            Assets Growth

          </h2>

          <p className="text-sm text-slate-500">

            Declared assets across elections

          </p>

        </div>

      </div>

      <div className="h-72">

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="year"
            />

            <YAxis
              unit=" Cr"
            />

            <Tooltip
              formatter={(value) => [
                `₹${value} Cr`,
                "Assets",
              ]}
            />

            <Line
              type="monotone"
              dataKey="assets"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}