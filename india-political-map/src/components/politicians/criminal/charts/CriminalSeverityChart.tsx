
"use client";

import { CourtCase } from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalSeverityChart({ cases }: Props) {
  const serious = cases.filter(c =>
    c.case_type.toLowerCase().includes("serious")
  ).length;

  const economic = cases.filter(c =>
    c.case_type.toLowerCase().includes("economic")
  ).length;

  const regular = cases.length - serious - economic;

  const total = Math.max(cases.length, 1);

  const rows = [
    {
      label: "Serious",
      value: serious,
      color: "bg-red-500",
    },
    {
      label: "Economic",
      value: economic,
      color: "bg-yellow-500",
    },
    {
      label: "Regular",
      value: regular,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-politic-text">
        Case Severity Distribution
      </h2>

      <div className="space-y-5">
        {rows.map(row => {
          const percent = (row.value / total) * 100;

          return (
            <div key={row.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-politic-text">
                  {row.label}
                </span>

                <span className="font-medium text-politic-muted">
                  {row.value} {row.value === 1 ? "Case" : "Cases"}
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-4 overflow-hidden rounded-full bg-politic-inner border border-politic-border/50 shadow-inner">
                {/* Progress Bar Fill */}
                <div
                  className={`${row.color} h-full rounded-full transition-all duration-700`}
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