"use client";

import {
  Calendar,
  Landmark,
  User,
} from "lucide-react";

import { PreviousMP } from "../../types/constituency";

interface Props {
  mps?: PreviousMP[];
}

export default function PreviousMPs({
  mps = [],
}: Props) {

  if (mps.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-purple-100 p-3">

          <Landmark
            size={22}
            className="text-purple-700"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Previous Members of Parliament
          </h2>

          <p className="text-sm text-slate-500">
            Historical representation of this constituency
          </p>

        </div>

      </div>

      <div className="relative border-l-2 border-slate-200 pl-8">

        {mps.map((mp) => (

          <div
            key={`${mp.name}-${mp.term_start}`}
            className="relative mb-8 last:mb-0"
          >

            <div
              className="
                absolute
                -left-[42px]
                top-4

                h-6
                w-6

                rounded-full

                border-4
                border-white

                bg-purple-600
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

                hover:border-purple-300
                hover:shadow-lg
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
                      bg-purple-100
                    "
                  >

                    <User
                      className="text-purple-700"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {mp.name}
                    </h3>

                    <p className="mt-1 text-slate-600">
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
                    bg-slate-100
                    px-4
                    py-3
                  "
                >

                  <Calendar
                    size={18}
                    className="text-blue-600"
                  />

                  <span className="font-semibold">

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