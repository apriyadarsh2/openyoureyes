"use client";

import {
  CalendarClock,
  Flag,
  Landmark,
  Trophy,
} from "lucide-react";

export default function ElectionHighlights() {
  return (
    <section
      className="
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {/* First Election */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3">
          <Flag
            size={22}
            className="text-blue-700"
          />
        </div>

        <p className="text-sm text-slate-500">
          First General Election
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          1951–52
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          India's first democratic election.
        </p>
      </div>

      {/* Latest */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-5 inline-flex rounded-xl bg-green-100 p-3">
          <CalendarClock
            size={22}
            className="text-green-700"
          />
        </div>

        <p className="text-sm text-slate-500">
          Latest Election
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          2024
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          18th Lok Sabha constituted.
        </p>
      </div>

      {/* Governments */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-5 inline-flex rounded-xl bg-purple-100 p-3">
          <Landmark
            size={22}
            className="text-purple-700"
          />
        </div>

        <p className="text-sm text-slate-500">
          Lok Sabhas
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          18
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Parliamentary terms since Independence.
        </p>
      </div>

      {/* Majority */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-5 inline-flex rounded-xl bg-orange-100 p-3">
          <Trophy
            size={22}
            className="text-orange-700"
          />
        </div>

        <p className="text-sm text-slate-500">
          Current Government
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          NDA
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Majority Government
        </p>
      </div>
    </section>
  );
}