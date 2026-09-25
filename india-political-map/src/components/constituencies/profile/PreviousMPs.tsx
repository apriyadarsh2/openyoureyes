"use client";

import { Calendar, Landmark, User } from "lucide-react";
import { PreviousMP } from "../../types/constituency";

interface Props {
  mps?: PreviousMP[];
}

export default function PreviousMPs({ mps = [] }: Props) {
  if (mps.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-politic-border bg-politic-card p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3">
          <Landmark size={22} className="text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-politic-text">
            Previous Members of Parliament
          </h2>
          <p className="text-sm font-medium text-politic-muted">
            Historical representation of this constituency
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-politic-border pl-8">
        {mps.map((mp) => (
          <div
            key={`${mp.name}-${mp.term_start}`}
            className="relative mb-8 last:mb-0 group"
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                -left-[42px]
                top-4
                h-6
                w-6
                rounded-full
                border-4
                border-politic-card
                bg-purple-500
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
                hover:border-purple-500/50
                hover:bg-politic-border/30
                hover:shadow-lg
                hover:shadow-black/50
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                {/* Left */}
                <div className="flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/20
                      bg-purple-500/10
                    "
                  >
                    <User className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-politic-text">
                      {mp.name}
                    </h3>
                    <p className="mt-1 font-medium text-politic-muted">
                      {mp.party}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-politic-border/50
                    bg-politic-card
                    px-4
                    py-3
                  "
                >
                  <Calendar size={18} className="text-blue-400" />
                  <span className="font-semibold text-politic-text">
                    {mp.term_start}
                    {" - "}
                    {mp.term_end}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}