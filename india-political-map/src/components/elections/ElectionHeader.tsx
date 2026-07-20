"use client";

import { CalendarDays } from "lucide-react";

import { ElectionOverview } from "../types/election";

interface Props {
  overview: ElectionOverview;
}

export default function ElectionHeader({
  overview,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {overview.type}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {overview.year}
          </h1>

          <p className="mt-2 text-slate-600">
            {overview.lok_sabha}
          </p>
        </div>

        <CalendarDays
          className="text-blue-600"
          size={42}
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <div>
          <p className="text-sm text-slate-500">
            Polling Started
          </p>

          <p className="font-semibold">
            {overview.polling_start}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Polling Ended
          </p>

          <p className="font-semibold">
            {overview.polling_end}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Counting Date
          </p>

          <p className="font-semibold">
            {overview.counting_date}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Government Formed
          </p>

          <p className="font-semibold">
            {overview.government_formed}
          </p>
        </div>
      </div>
    </div>
  );
}