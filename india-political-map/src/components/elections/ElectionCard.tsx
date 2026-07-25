"use client";

import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Crown,
  Landmark,
  Users,
} from "lucide-react";

import { ElectionSummary } from "../types/election";

interface Props {
  election: ElectionSummary;
}

export default function ElectionCard({
  election,
}: Props) {
  return (
    <Link
      href={`/elections/${election.year}`}
      className="group block h-full"
    >
      <article
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >
        {/* Top Accent */}

        <div
          className="
            h-1
            bg-gradient-to-r
            from-blue-600
            via-sky-500
            to-cyan-400
          "
        />

        <div className="flex flex-1 flex-col p-7">

          {/* Year */}

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
                General Election
              </p>

              <h2 className="mt-1 text-5xl font-bold tracking-tight">
                {election.year}
              </h2>

              <p className="mt-1 text-slate-500">
                {election.lok_sabha}th Lok Sabha
              </p>

            </div>

            <div
              className="
                rounded-2xl
                bg-blue-50
                p-3
              "
            >
              <Calendar
                className="text-blue-600"
                size={24}
              />
            </div>

          </div>

          {/* Divider */}

          <div className="my-7 h-px bg-slate-100" />

          {/* Winner */}

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-green-100 p-3">
                <Crown
                  size={20}
                  className="text-green-700"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Winning Alliance
                </p>

                <h3 className="text-xl font-semibold">
                  {election.winner_alliance}
                </h3>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-blue-100 p-3">
                <Users
                  size={20}
                  className="text-blue-700"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Seats Won
                </p>

                <h3 className="text-xl font-semibold">
                  {election.winner_seats}
                </h3>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-purple-100 p-3">
                <Landmark
                  size={20}
                  className="text-purple-700"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Government
                </p>

                <span
                  className={`
                    mt-1
                    inline-flex
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    font-semibold

                    ${
                      election.majority
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }
                  `}
                >
                  {election.status}
                </span>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-auto pt-8">

            <div className="h-px bg-slate-100" />

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  font-semibold
                  text-slate-700
                  transition-colors
                  group-hover:text-blue-600
                "
              >
                View Election
              </span>

              <ArrowRight
                className="
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-blue-600
                "
              />

            </div>

          </div>

        </div>

      </article>
    </Link>
  );
}