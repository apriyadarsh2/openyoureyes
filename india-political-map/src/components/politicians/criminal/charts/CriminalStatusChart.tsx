"use client";

import { CourtCase } from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalStatusChart({
  cases,
}: Props) {

  const counts = cases.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const total = Math.max(cases.length, 1);

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">

        Case Status Distribution

      </h2>

      <div className="space-y-5">

        {Object.entries(counts).map(
          ([status, value], index) => {

            const percent =
              (value / total) * 100;

            return (

              <div key={status}>

                <div className="mb-2 flex justify-between">

                  <span className="font-medium">

                    {status}

                  </span>

                  <span className="text-slate-500">

                    {value}

                  </span>

                </div>

                <div className="h-4 rounded-full bg-slate-200 overflow-hidden">

                  <div
                    className={`h-full rounded-full transition-all duration-700 ${colors[index % colors.length]}`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

              </div>

            );

          }
        )}

      </div>

    </div>

  );

}