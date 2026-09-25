"use client";

import { CourtCase } from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalStatusChart({ cases }: Props) {
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
    <div className="rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-politic-text">
        Case Status Distribution
      </h2>

      <div className="space-y-5">
        {Object.entries(counts).map(([status, value], index) => {
          const percent = (value / total) * 100;

          return (
            <div key={status}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-politic-text">
                  {status}
                </span>

                <span className="font-medium text-politic-muted">
                  {value} {value === 1 ? "Case" : "Cases"}
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-4 overflow-hidden rounded-full bg-politic-inner border border-politic-border/50 shadow-inner">
                {/* Progress Bar Fill */}
                <div
                  className={`h-full rounded-full transition-all duration-700 ${colors[index % colors.length]}`}
                  style={{
                    width: `${percent}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}