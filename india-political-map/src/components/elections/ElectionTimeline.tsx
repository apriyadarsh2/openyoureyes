"use client";

import { CalendarDays, BarChart3 } from "lucide-react";
import { ElectionOverview } from "../types/election";

interface Props {
  overview: ElectionOverview;
}

export default function ElectionTimeline({ overview }: Props) {
  return (
    <section className="rounded-3xl border border-politic-border bg-politic-card p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-politic-text">
          Election Timeline
        </h2>
        <p className="mt-2 font-medium text-politic-muted">
          Key recorded milestone for this election.
        </p>
      </div>

      <div className="relative ml-3">
        {/* Vertical line - Dark Mode */}
        <div className="absolute left-4 top-3 h-full w-0.5 bg-politic-border" />

        <div className="relative flex items-start gap-5 group">
          {/* Timeline icon */}
          <div
            className="
              relative
              z-10
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border-4
              border-politic-card
              bg-green-500
              text-white
              shadow-md
              transition-transform
              group-hover:scale-110
            "
          >
            <BarChart3 size={14} />
          </div>

          {/* Content */}
          <div className="flex-1 rounded-2xl border border-politic-border/50 bg-politic-inner p-5 transition hover:border-blue-500/50 hover:bg-politic-border/30 hover:shadow-lg hover:shadow-black/50">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-blue-400" />
              <p className="text-sm font-medium text-politic-muted">
                Result Declared
              </p>
            </div>
            <h3 className="mt-2 text-lg font-bold text-politic-text">
              {overview.result_date}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}