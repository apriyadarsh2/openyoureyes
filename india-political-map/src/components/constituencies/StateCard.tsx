"use client";

import Link from "next/link";

import {
  ArrowRight,
  MapPinned,
} from "lucide-react";

import { ConstituencyState } from "../types/constituency";

interface Props {
  state: ConstituencyState;
}

export default function StateCard({
  state,
}: Props) {
  return (
    <Link
      href={`/constituencies/${state.slug}`}
      className="group block h-full"
    >
      <article
        className="
          relative
          flex
          h-full
          min-h-[340px]
          flex-col
          overflow-hidden

          rounded-3xl

          border
          border-slate-200/70

          bg-gradient-to-br
          from-white
          via-slate-50
          to-blue-50/40

          p-7

          shadow-sm

          transition-all
          duration-500

          hover:-translate-y-2
          hover:border-blue-300
          hover:shadow-2xl
          hover:shadow-blue-100
        "
      >

        {/* Decorative Blur */}

        <div
          className="
            absolute
            -right-16
            -top-16

            h-44
            w-44

            rounded-full

            bg-blue-200/20

            blur-3xl

            transition-all

            duration-500

            group-hover:bg-blue-300/30
          "
        />

        {/* Top */}

        <div className="relative z-10 flex items-start justify-between">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              border

              border-white/50

              bg-white/70

              shadow-md

              backdrop-blur
            "
          >
            <MapPinned
              size={28}
              className="
                text-blue-600

                transition-transform

                duration-500

                group-hover:scale-110
                group-hover:rotate-6
              "
            />
          </div>

          <div
            className="
              rounded-full

              border

              border-blue-200

              bg-blue-100/70

              px-3
              py-1

              text-xs
              font-semibold

              text-blue-700

              backdrop-blur
            "
          >
            {state.total_percentage}
          </div>

        </div>

        {/* Title */}

        <div
          className="
            relative
            z-10

            mt-8

            min-h-[72px]
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
            "
          >
            {state.name}
          </h2>

          <p
            className="
              mt-3

              text-sm

              text-slate-500
            "
          >
            {state.total_constituencies} Lok Sabha Constituencies
          </p>

        </div>

        {/* Divider */}

        <div
          className="
            relative
            z-10

            my-6

            border-t

            border-slate-200
          "
        />

        {/* KPI Chips */}

        <div
          className="
            relative
            z-10

            grid
            grid-cols-3
            gap-3
          "
        >

          <SeatChip
            label="GEN"
            value={state.seats_general}
          />

          <SeatChip
            label="SC"
            value={state.seats_sc}
          />

          <SeatChip
            label="ST"
            value={state.seats_st}
          />

        </div>

        {/* Spacer */}

        <div className="flex-1" />

        {/* Footer */}

        <div
          className="
            relative
            z-10

            mt-8

            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-sm
              font-semibold
              text-blue-600
            "
          >
            View Constituencies
          </span>

          <ArrowRight
            size={20}
            className="
              text-blue-600

              transition-all

              duration-300

              group-hover:translate-x-2
            "
          />

        </div>

      </article>
    </Link>
  );
}

interface SeatChipProps {
  label: string;
  value: number;
}

function SeatChip({
  label,
  value,
}: SeatChipProps) {
  return (
    <div
      className="
        rounded-2xl

        border

        border-slate-200

        bg-white/80

        p-3

        text-center

        shadow-sm

        backdrop-blur
      "
    >
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-wider

          text-slate-500
        "
      >
        {label}
      </p>

      <h3
        className="
          mt-1

          text-xl
          font-bold

          text-slate-900
        "
      >
        {value}
      </h3>
    </div>
  );
}