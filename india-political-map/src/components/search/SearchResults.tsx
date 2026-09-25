"use client";

import {
  Calendar,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

import {
  GlobalSearchResult,
} from "@/src/components/types/global_search";

import SearchResultCard from "./SearchResultCard";

interface Props {
  results: GlobalSearchResult[];
}

function getSectionInfo(
  type: GlobalSearchResult["type"]
) {
  switch (type) {
    case "politician":
      return {
        title: "Politicians",
        icon: Users,
      };

    case "constituency":
      return {
        title: "Constituencies",
        icon: MapPin,
      };

    case "party":
      return {
        title: "Political Parties",
        icon: Landmark,
      };

    case "election":
      return {
        title: "Elections",
        icon: Calendar,
      };
  }
}

export default function SearchResults({
  results,
}: Props) {
  const groups = [
    "politician",
    "constituency",
    "party",
    "election",
  ] as const;

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl px-4 pb-12 sm:mt-12 sm:px-6 lg:px-8">
      {/* Header */}

      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#F4F4F5] sm:text-3xl">
            Search Results
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-[#94A3B8] sm:text-base">
            Search across politicians, constituencies,
            political parties and elections.
          </p>
        </div>

        <div className="shrink-0 rounded-full border border-[#3E445B] bg-[#282D3D] px-3 py-1.5 text-sm font-medium text-[#94A3B8]">
          {results.length} result
          {results.length !== 1
            ? "s"
            : ""}
        </div>
      </div>

      {/* Groups */}

      <div className="space-y-10">
        {groups.map((type) => {
          const groupResults =
            results.filter(
              (result) =>
                result.type === type
            );

          if (
            groupResults.length === 0
          ) {
            return null;
          }

          const {
            title,
            icon: Icon,
          } = getSectionInfo(type);

          return (
            <div
              key={type}
              className="space-y-4"
            >
              {/* Section heading */}

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#3E445B] bg-[#282D3D]">
                  <Icon
                    size={18}
                    className="text-indigo-300"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[#F4F4F5]">
                    {title}
                  </h3>

                  <p className="text-xs text-[#94A3B8]">
                    {groupResults.length} result
                    {groupResults.length !== 1
                      ? "s"
                      : ""}
                  </p>
                </div>
              </div>

              {/* Cards */}

              <div className="space-y-4">
                {groupResults.map(
                  (result) => (
                    <SearchResultCard
                      key={`${result.type}-${result.id}`}
                      result={result}
                    />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}