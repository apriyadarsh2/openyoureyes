"use client";

import {
  Calendar,
  Trophy,
  Users,
  Vote,
} from "lucide-react";

import { ConstituencyElection } from "../../types/constituency";

interface Props {
  elections: ConstituencyElection[];
}

export default function ElectionTimeline({
  elections,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <Calendar
            size={22}
            className="text-blue-700"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Election Timeline
          </h2>

          <p className="text-sm text-slate-500">
            Historical Lok Sabha election results
          </p>

        </div>

      </div>

      <div className="relative border-l-2 border-slate-200 pl-8">

        {elections.map((election) => (

          <div
            key={election.year}
            className="relative mb-10 last:mb-0"
          >

            {/* Timeline Dot */}

            <div
              className="
                absolute
                -left-[42px]
                top-2

                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                border-4
                border-white

                bg-blue-600
                shadow
              "
            />

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-gradient-to-br
                from-white
                to-slate-50
                p-6
                transition

                hover:border-blue-300
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-4

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div>

                  <span
                    className="
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-blue-700
                    "
                  >
                    {election.type}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold">
                    {election.year}
                  </h3>

                </div>

                <span
                  className="
                    rounded-full
                    bg-orange-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-orange-700
                  "
                >
                  {election.party}
                </span>

              </div>

              {/* Winner */}

              <div
                className="
                  mt-8
                  grid
                  gap-5

                  lg:grid-cols-2
                "
              >

                <div
                  className="
                    rounded-2xl
                    bg-green-50
                    p-5
                  "
                >

                  <div className="flex items-center gap-2">

                    <Trophy
                      size={18}
                      className="text-green-700"
                    />

                    <p className="text-sm text-green-700">
                      Winner
                    </p>

                  </div>

                  <h4 className="mt-3 text-xl font-bold">
                    {election.winner}
                  </h4>

                </div>

                <div
                  className="
                    rounded-2xl
                    bg-red-50
                    p-5
                  "
                >

                  <div className="flex items-center gap-2">

                    <Users
                      size={18}
                      className="text-red-700"
                    />

                    <p className="text-sm text-red-700">
                      Runner Up
                    </p>

                  </div>

                  <h4 className="mt-3 text-xl font-bold">
                    {election.runner_up}
                  </h4>

                </div>

              </div>

              {/* Metrics */}

              <div
                className="
                  mt-8
                  grid
                  gap-4

                  sm:grid-cols-3
                "
              >

                <div className="rounded-xl border bg-white p-4">

                  <p className="text-sm text-slate-500">
                    Votes
                  </p>

                  <h5 className="mt-2 text-lg font-bold">
                    {election.votes.toLocaleString()}
                  </h5>

                </div>

                <div className="rounded-xl border bg-white p-4">

                  <p className="text-sm text-slate-500">
                    Victory Margin
                  </p>

                  <h5 className="mt-2 text-lg font-bold text-green-700">
                    {election.margin.toLocaleString()}
                  </h5>

                </div>

                <div className="rounded-xl border bg-white p-4">

                  <div className="flex items-center gap-2">

                    <Vote
                      size={16}
                      className="text-blue-600"
                    />

                    <p className="text-sm text-slate-500">
                      Turnout
                    </p>

                  </div>

                  <h5 className="mt-2 text-lg font-bold">
                    {election.turnout_percentage}%
                  </h5>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}