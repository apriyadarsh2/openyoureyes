"use client";

import {
  CourtCase,
} from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalStatisticsCard({
  cases,
}: Props) {

  const totalIPC =
    cases.reduce(
      (sum, item) =>
        sum + item.ipc_sections.length,
      0
    );

  const courts =
    new Set(
      cases.map(c => c.court)
    ).size;

  const states =
    new Set(
      cases.map(c => c.state)
    ).size;

  const oldest =
    Math.min(
      ...cases.map(c => c.year_filed)
    );

  const avgAge =
    Math.round(
      cases.reduce(
        (sum, item) =>
          sum +
          (new Date().getFullYear() -
            item.year_filed),
        0
      ) / cases.length
    );

  const stats = [

    {
      label: "Total IPC Sections",
      value: totalIPC,
    },

    {
      label: "Unique Courts",
      value: courts,
    },

    {
      label: "States",
      value: states,
    },

    {
      label: "Oldest Case",
      value: oldest,
    },

    {
      label: "Average Case Age",
      value: `${avgAge} yrs`,
    },

  ];

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">

        Case Statistics

      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {stats.map(stat => (

          <div
            key={stat.label}
            className="rounded-xl bg-slate-50 p-5"
          >

            <p className="text-sm text-slate-500">

              {stat.label}

            </p>

            <h3 className="mt-2 text-3xl font-bold">

              {stat.value}

            </h3>

          </div>

        ))}

      </div>

    </div>

  );

}