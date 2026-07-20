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

        <div className="rounded-xl bg-blue-100 p-2">

          <Vote
            className="text-blue-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="font-semibold">

            Vote Share

          </h2>

          <p className="text-sm text-slate-500">

            Vote percentage received in each election

          </p>

        </div>

      </div>

      <div className="h-72">

        <ResponsiveContainer>

          <BarChart
            data={data}
          >

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis
              dataKey="year"
            />

            <YAxis
              unit="%"
            />

            <Tooltip
              formatter={(value) => [
                `${value}%`,
                "Vote Share",
              ]}
            />

            <Bar
              dataKey="voteShare"
              radius={[8,8,0,0]}
            >

              {data.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={
                    entry.winner
                      ? "#2563eb"
                      : "#94a3b8"
                  }
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}