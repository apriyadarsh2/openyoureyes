"use client";

import {
  Calendar,
  Landmark,
  MapPin,
  Search,
  Users,
} from "lucide-react";

import {
  GlobalSearchResult,
} from "@/src/components/types/global_search";

interface Props {
  results: GlobalSearchResult[];
  onSelect: (result: GlobalSearchResult) => void;
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
      return "Party";

    case "election":
      return "Election";
  }
}

function getTypeIcon(
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

export default function SearchDropdown({
  results,
  onSelect,
}: Props) {
  if (results.length === 0) {
    return (
      <div
        className="
          absolute
          left-0
          right-0
          top-full
          z-[999]
          mt-2
          overflow-hidden
          rounded-2xl
          border
          border-[#3E445B]
          bg-[#282D3D]
          shadow-2xl
          shadow-black/30
          sm:mt-3
          sm:rounded-3xl
        "
      >
        <div className="flex flex-col items-center px-5 py-9 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101827]">
            <Search
              size={20}
              className="text-[#94A3B8]"
            />
          </div>

          <p className="mt-3 font-semibold text-[#F4F4F5]">
            No results found
          </p>

          <p className="mt-1 max-w-xs text-sm text-[#94A3B8]">
            Try a politician, party, constituency,
            or election year.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        z-[999]
        mt-2
        overflow-hidden
        rounded-2xl
        border
        border-[#3E445B]
        bg-[#282D3D]
        shadow-2xl
        shadow-black/30
        sm:mt-3
        sm:rounded-3xl
      "
    >
      {/* Header */}

      <div className="border-b border-[#3E445B] bg-[#101827]/70 px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-[#F4F4F5]">
              Search Results
            </p>

            <p className="mt-0.5 text-xs text-[#94A3B8] sm:text-sm">
              {results.length} result
              {results.length !== 1
                ? "s"
                : ""}
            </p>
          </div>

          <div className="hidden rounded-full border border-[#3E445B] bg-[#282D3D] px-3 py-1 text-xs font-medium text-[#94A3B8] sm:block">
            Global Search
          </div>
        </div>
      </div>

      {/* Results */}

      <div className="max-h-[70vh] overflow-y-auto sm:max-h-[480px]">
        {results
          .slice(0, 10)
          .map((result) => {
            const Icon = getTypeIcon(
              result.type
            );

            return (
              <button
                key={`${result.type}-${result.id}`}
                type="button"
                onClick={() =>
                  onSelect(result)
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  gap-3
                  border-b
                  border-[#3E445B]/60
                  px-4
                  py-3
                  text-left
                  transition
                  hover:bg-[#101827]
                  sm:gap-4
                  sm:px-5
                  sm:py-4
                "
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${getIconStyle(result.type)}
                    sm:h-11
                    sm:w-11
                  `}
                >
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      truncate
                      font-semibold
                      text-[#F4F4F5]
                      transition-colors
                      group-hover:text-indigo-300
                    "
                  >
                    {result.title}
                  </h3>

                  {result.subtitle && (
                    <p className="mt-0.5 truncate text-sm text-[#94A3B8]">
                      {result.subtitle}
                    </p>
                  )}

                  <span
                    className="
                      mt-1
                      inline-flex
                      rounded-full
                      border
                      border-[#3E445B]
                      bg-[#101827]
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-[#94A3B8]
                    "
                  >
                    {getTypeLabel(
                      result.type
                    )}
                  </span>
                </div>

                <span className="hidden shrink-0 text-[#94A3B8] transition-transform group-hover:translate-x-1 group-hover:text-indigo-300 sm:block">
                  →
                </span>
              </button>
            );
          })}
      </div>

      {results.length > 10 && (
        <div className="border-t border-[#3E445B] bg-[#101827]/70 px-4 py-3 text-center text-xs font-medium text-[#94A3B8] sm:px-5">
          Showing top 10 results
        </div>
      )}
    </div>
  );
}