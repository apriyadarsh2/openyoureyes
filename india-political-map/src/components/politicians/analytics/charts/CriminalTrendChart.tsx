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

    <div className="rounded-2xl border bg-white p-5 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-red-100 p-2">

            <Scale
              className="text-red-600"
              size={22}
            />

          </div>

          <div>

            <h2 className="font-semibold">

              Criminal Cases Trend

            </h2>

            <p className="text-sm text-slate-500">

              Total criminal cases across elections

            </p>

          </div>

        </div>

        <span
          className="
          rounded-full
          bg-red-100
          px-3
          py-1
          text-xs
          font-semibold
          text-red-700
          "
        >

          Latest {data.at(-1)?.total ?? 0}

        </span>

      </div>

      <div className="h-72">

        <ResponsiveContainer>

          <BarChart
            data={data}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="year"
            />

            <YAxis
              allowDecimals={false}
            />

            <Tooltip
              formatter={(value, name) => [

                value,

                name === "serious"
                  ? "Serious Cases"
                  : "Total Cases",

              ]}
            />

            <Bar
              dataKey="total"
              radius={[8, 8, 0, 0]}
            >

              {data.map((_, index) => (

                <Cell
                  key={index}
                  fill="#dc2626"
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}