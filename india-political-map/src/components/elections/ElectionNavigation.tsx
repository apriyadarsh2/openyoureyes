"use client";

import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";

interface Props {
  year: number;
}

export default function ElectionNavigation({ year }: Props) {
  return (
    <section className="rounded-3xl border border-politic-border bg-politic-card p-6 sm:p-8 shadow-sm">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl font-bold text-politic-text">
          Explore Election Data
        </h2>
        <p className="mt-2 text-sm sm:text-base font-medium text-politic-muted">
          Dive deeper into this election through detailed analytics.
        </p>
      </div>

      <div>
        <Link
          href={`/elections/${year}/state-results`}
          className="
            group
            relative
            flex
            flex-col
            gap-6
            overflow-hidden
            rounded-2xl
            border
            border-politic-border
            bg-politic-inner
            p-6
            sm:p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-emerald-500/50
            hover:bg-politic-border/20
            hover:shadow-xl
            hover:shadow-black/50
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-40
              w-40
              rounded-full
              bg-emerald-500/10
              blur-3xl
              transition-all
              duration-500
              group-hover:bg-emerald-500/20
            "
          />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Icon Bubble */}
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                text-emerald-400
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 text-white shadow-sm">
                <Map size={22} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-politic-text transition-colors group-hover:text-emerald-400">
                State Results
              </h3>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-politic-muted">
                Explore state-wise seat distribution and winning parties.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2 self-end sm:self-center font-semibold text-sm sm:text-base text-emerald-400 transition-colors group-hover:text-emerald-300">
            <span>View Results</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}