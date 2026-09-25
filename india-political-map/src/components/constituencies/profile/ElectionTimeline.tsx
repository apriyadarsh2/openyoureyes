"use client";

import { Calendar, Trophy, Users, Vote } from "lucide-react";
import { ConstituencyElection } from "../../types/constituency";

interface Props {
  elections: ConstituencyElection[];
}

export default function ElectionTimeline({ elections }: Props) {
  return (
    <section className="rounded-3xl border border-politic-border bg-politic-card p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-3">
          <Calendar size={22} className="text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-politic-text">
            Election Timeline
          </h2>
          <p className="text-sm text-politic-muted">
            Historical Lok Sabha election results
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-politic-border pl-8">
        {elections.map((election) => (
          <div
            key={election.year}
            className="relative mb-10 last:mb-0 group"
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
                border-politic-card
                bg-blue-500
                shadow
                transition-transform
                group-hover:scale-110
              "
            />

            <div
              className="
                rounded-2xl
                border
                border-politic-border
                bg-politic-inner
                p-6
                transition
                hover:border-blue-500/50
                hover:bg-politic-border/30
                hover:shadow-lg
                hover:shadow-black/50
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
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-blue-400
                    "
                  >
                    {election.type}
                  </span>
                  <h3 className="mt-3 text-3xl font-bold text-politic-text">
                    {election.year}
                  </h3>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-orange-500/20
                    bg-orange-500/10
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-orange-400
                  "
                >
                  {election.party}
                </span>
              </div>

              {/* Winner / Runner Up */}
              <div
                className="
                  mt-8
                  grid
                  gap-5
                  lg:grid-cols-2
                "
              >
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
                  <div className="flex items-center gap-2">
                    <Trophy size={18} className="text-green-400" />
                    <p className="text-sm font-medium text-green-400">Winner</p>
                  </div>
                  <h4 className="mt-3 text-xl font-bold text-politic-text">
                    {election.winner}
                  </h4>
                </div>

                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-red-400" />
                    <p className="text-sm font-medium text-red-400">Runner Up</p>
                  </div>
                  <h4 className="mt-3 text-xl font-bold text-politic-text">
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
                <div className="rounded-xl border border-politic-border/50 bg-politic-card p-4">
                  <p className="text-sm text-politic-muted font-medium">Votes</p>
                  <h5 className="mt-2 text-lg font-bold text-politic-text">
                    {election.votes.toLocaleString()}
                  </h5>
                </div>

                <div className="rounded-xl border border-politic-border/50 bg-politic-card p-4">
                  <p className="text-sm text-politic-muted font-medium">Victory Margin</p>
                  <h5 className="mt-2 text-lg font-bold text-green-400">
                    {election.margin.toLocaleString()}
                  </h5>
                </div>

                <div className="rounded-xl border border-politic-border/50 bg-politic-card p-4">
                  <div className="flex items-center gap-2">
                    <Vote size={16} className="text-blue-400" />
                    <p className="text-sm text-politic-muted font-medium">Turnout</p>
                  </div>
                  <h5 className="mt-2 text-lg font-bold text-politic-text">
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