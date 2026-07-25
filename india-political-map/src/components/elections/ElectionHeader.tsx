"use client";

import {
  CalendarDays,
  Landmark,
  Vote,
} from "lucide-react";

import { ElectionOverview } from "../types/election";

interface Props {
  overview: ElectionOverview;
}

export default function ElectionHeader({
  overview,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-white
        p-8
        lg:p-10
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            {overview.type}
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            {overview.year}
          </h1>

          <p className="mt-2 text-xl font-medium text-slate-700">
            {overview.lok_sabha}
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Parliamentary election conducted to elect members of the{" "}
            {overview.lok_sabha}. Explore election results, voter
            participation, government formation and national statistics.
          </p>
        </div>

        {/* Right */}

        <div className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <CalendarDays
                className="text-blue-600"
                size={20}
              />

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Polling
                </p>

                <p className="font-semibold">
                  {overview.polling_start} → {overview.polling_end}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Vote
                className="text-green-600"
                size={20}
              />

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Counting
                </p>

                <p className="font-semibold">
                  {overview.counting_date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Landmark
                className="text-purple-600"
                size={20}
              />

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Government Formed
                </p>

                <p className="font-semibold">
                  {overview.government_formed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}