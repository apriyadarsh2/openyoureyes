"use client";

import Link from "next/link";

import {
  ArrowRight,
  Users,
  MapPinned,
} from "lucide-react";

import { ConstituencySummary } from "../types/constituency";

interface Props {
  constituency: ConstituencySummary;
  slug: string;
}

export default function ConstituencyCard({
  constituency,
  slug,
}: Props) {

  const badgeStyle = {

    General:
      "bg-slate-100 text-slate-700",

    SC:
      "bg-blue-100 text-blue-700",

    ST:
      "bg-emerald-100 text-emerald-700",

  }[
    constituency.reservation_type
  ] ??
  "bg-slate-100 text-slate-700";

  return (

    <Link
      href={`/constituencies/${slug}/${constituency.id}`}
      className="group block h-full"
    >

      <div
        className="
          relative

          flex
          h-full
          flex-col
          justify-between

          overflow-hidden

          rounded-3xl

          border
          border-slate-200

          bg-gradient-to-br
          from-white
          to-slate-50

          p-6

          shadow-sm

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-blue-300
          hover:shadow-xl
        "
      >

        <div
          className="
            absolute
            right-0
            top-0

            h-28
            w-28

            rounded-full

            bg-blue-100/40

            blur-3xl
          "
        />

        <div className="relative z-10">

          <div className="flex items-start justify-between">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-2xl

                bg-blue-50

                text-blue-600
              "
            >
              <MapPinned size={22} />
            </div>

            <span
              className={`
                rounded-full
                px-3
                py-1

                text-xs
                font-semibold

                ${badgeStyle}
              `}
            >
              {constituency.reservation_type}
            </span>

          </div>

          <h2
            className="
              mt-5

              text-xl

              font-bold

              text-slate-900
            "
          >
            {constituency.name}
          </h2>

          <div
            className="
              mt-6

              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                bg-slate-100
              "
            >
              <Users
                size={18}
                className="text-slate-600"
              />
            </div>

            <div>

              <p className="text-xs text-slate-500">
                Electors
              </p>

              <p className="font-semibold">
                {constituency.electors.toLocaleString()}
              </p>

            </div>

          </div>

        </div>

        <div
          className="
            relative
            z-10

            mt-8

            flex
            items-center
            justify-between

            border-t

            pt-5
          "
        >

          <span
            className="
              text-sm

              font-medium

              text-blue-600
            "
          >
            View Constituency
          </span>

          <ArrowRight
            size={20}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />

        </div>

      </div>

    </Link>

  );

}