"use client";

import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

import {
  GlobalSearchResult,
} from "@/src/components/types/global_search";

interface Props {
  result: GlobalSearchResult;
}

function getIcon(
  type: GlobalSearchResult["type"]
) {
  switch (type) {
    case "politician":
      return Users;

    case "constituency":
      return MapPin;

    case "party":
      return Landmark;

    case "election":
      return Calendar;
  }
}

function getTypeLabel(
  type: GlobalSearchResult["type"]
): string {
  switch (type) {
    case "politician":
      return "Politician";

    case "constituency":
      return "Constituency";

    case "party":
      return "Political Party";

    case "election":
      return "General Election";
  }
}

function getIconStyle(
  type: GlobalSearchResult["type"]
): string {
  switch (type) {
    case "politician":
      return "bg-indigo-500/15 text-indigo-300";

    case "constituency":
      return "bg-emerald-500/15 text-emerald-300";

    case "party":
      return "bg-purple-500/15 text-purple-300";

    case "election":
      return "bg-amber-500/15 text-amber-300";
  }
}

export default function SearchResultCard({
  result,
}: Props) {
  const Icon = getIcon(result.type);

  return (
    <Link
      href={result.href}
      className="group block"
    >
      <article
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#3E445B]
          bg-[#282D3D]
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-indigo-500/60
          hover:shadow-xl
          hover:shadow-black/20

          sm:rounded-3xl
        "
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-start gap-4 sm:gap-5">

            {/* Icon / avatar */}

            <div
              className={`
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                ${getIconStyle(result.type)}
                sm:h-14
                sm:w-14
              `}
            >
              {result.type === "politician" ? (
                <span className="text-lg font-bold sm:text-xl">
                  {result.data.name_en
                    .charAt(0)
                    .toUpperCase()}
                </span>
              ) : (
                <Icon size={22} />
              )}
            </div>

            {/* Main */}

            <div className="min-w-0 flex-1">

              <div className="mb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8] sm:text-xs">
                  {getTypeLabel(
                    result.type
                  )}
                </span>
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#F4F4F5]
                  transition-colors
                  group-hover:text-indigo-300
                  sm:text-2xl
                "
              >
                {result.title}
              </h3>

              {result.subtitle && (
                <p className="mt-1 line-clamp-2 text-sm text-[#94A3B8] sm:text-base">
                  {result.subtitle}
                </p>
              )}

              {/* Politician information */}

              {result.type === "politician" && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#94A3B8]">

                  {result.data.latest_party && (
                    <span className="font-medium text-[#F4F4F5]">
                      {
                        result.data
                          .latest_party
                          .abbreviation
                      }
                    </span>
                  )}

                  {result.data.latest_constituency && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} />
                      {
                        result.data
                          .latest_constituency
                          .name_en
                      }
                    </span>
                  )}

                  {result.data.latest_election_year && (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} />
                      {
                        result.data
                          .latest_election_year
                      }
                    </span>
                  )}

                </div>
              )}

            </div>

            {/* Arrow */}

            <div className="shrink-0 pt-1">
              <ArrowRight
                size={20}
                className="
                  text-[#94A3B8]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-indigo-300
                "
              />
            </div>
          </div>

          {/* Politician statistics */}

          {result.type === "politician" && (
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#3E445B] pt-5 sm:flex sm:gap-8">

              <div>
                <p className="text-xs text-[#94A3B8]">
                  Net Assets
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F4F4F5] sm:text-base">
                  ₹
                  {(
                    result.data
                      .net_assets_inr /
                    10000000
                  ).toFixed(2)}{" "}
                  Cr
                </p>
              </div>

              <div>
                <p className="text-xs text-[#94A3B8]">
                  Criminal Cases
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F4F4F5] sm:text-base">
                  {
                    result.data
                      .criminal_cases_count
                  }
                </p>
              </div>

            </div>
          )}
        </div>
      </article>
    </Link>
  );
}