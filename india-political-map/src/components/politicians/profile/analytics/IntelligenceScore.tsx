"use client";

import {
  Award,
  CheckCircle2,
} from "lucide-react";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function IntelligenceScore({
  profile,
}: Props) {
  if (!profile) return null;

  const elections = profile.elections;

  const wins = elections.filter(
    e => e.result.winner
  ).length;

  const winRate =
    (wins / elections.length) * 100;

  const latest =
    elections[elections.length - 1];

  const utilisation =
    profile.mplads.reduce(
      (sum, item) =>
        sum + item.utilisation_pct,
      0
    ) / profile.mplads.length;

  const criminalPenalty =
    latest.criminal_cases_count * 4;

  let score =
    winRate * 0.4 +
    utilisation * 0.2 +
    20 -
    criminalPenalty;

  score = Math.max(
    0,
    Math.min(100, score)
  );

  const data = [
    {
      value: score,
    },
  ];

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Award className="text-blue-600" />

        <h2 className="text-2xl font-bold">

          Political Intelligence Score

        </h2>

      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">

        <div className="h-80">

          <ResponsiveContainer>

            <RadialBarChart
              data={data}
              innerRadius="75%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
            >

              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                tick={false}
              />

              <RadialBar
                dataKey="value"
                cornerRadius={20}
                fill="#2563eb"
              />

              <text
                x="50%"
                y="46%"
                textAnchor="middle"
                className="fill-slate-900 text-5xl font-bold"
              >
                {score.toFixed(0)}
              </text>

              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                className="fill-slate-500 text-lg"
              >
                /100
              </text>

            </RadialBarChart>

          </ResponsiveContainer>

        </div>

        <div className="space-y-5">

          <Metric
            label="Election Success"
            value={winRate}
          />

          <Metric
            label="Fund Utilisation"
            value={utilisation}
          />

          <Metric
            label="Financial Stability"
            value={92}
          />

          <Metric
            label="Public Profile"
            value={88}
          />

          <div className="rounded-2xl bg-blue-50 p-5">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-blue-600" />

              <div>

                <h3 className="font-semibold">

                  Overall Rating

                </h3>

                <p className="text-slate-600">

                  Excellent Political Profile

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span>{label}</span>

        <span className="font-semibold">

          {value.toFixed(0)}%

        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-blue-600"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}