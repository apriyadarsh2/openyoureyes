"use client";

import Link from "next/link";
import { ArrowRight, Users, MapPinned } from "lucide-react";
import { ConstituencySummary } from "../types/constituency";

interface Props {
  constituency: ConstituencySummary;
  slug: string;
}

export default function ConstituencyCard({
  constituency,
  slug,
}: Props) {
  // Dark-mode optimized badge styles
  const badgeStyle = {
    General: "bg-politic-inner text-politic-muted border border-politic-border/50",
    SC: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    ST: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  }[constituency.reservation_type] ?? "bg-politic-inner text-politic-muted border border-politic-border/50";

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
          border-politic-border
          bg-politic-card
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/50
          hover:shadow-xl
          hover:shadow-black/50
        "
      >
        {/* Decorative Blur */}
        <div
          className="
            absolute
            right-0
            top-0
            h-28
            w-28
            rounded-full
            bg-blue-500/10
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
                border
                border-politic-border
                bg-politic-inner
                text-blue-400
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
                font-bold
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
              text-politic-text
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
                border
                border-politic-border/50
                bg-politic-inner
              "
            >
              <Users
                size={18}
                className="text-politic-muted"
              />
            </div>

            <div>
              <p className="text-xs font-medium text-politic-muted">
                Electors
              </p>
              <p className="font-semibold text-politic-text">
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
            border-politic-border
            pt-5
          "
        >
          <span
            className="
              text-sm
              font-semibold
              text-blue-400
              transition-colors
              group-hover:text-blue-300
            "
          >
            View Constituency
          </span>

          <ArrowRight
            size={20}
            className="
              text-blue-400
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-blue-300
            "
          />
        </div>
      </div>
    </Link>
  );
}