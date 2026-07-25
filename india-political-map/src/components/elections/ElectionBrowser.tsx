"use client";

import { useMemo, useState } from "react";

import {
  Calendar,
  Landmark,
  Trophy,
} from "lucide-react";

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";
import HeroBanner from "@/src/components/ui/HeroBanner";
import HeroStat from "@/src/components/ui/HeroStat";

import SearchToolbar from "@/src/components/ui/filters/SearchToolbar";
import { SortOption } from "@/src/components/ui/filters/type";

import { getElections } from "../lib/repositories/elections";

import ElectionGrid from "./ElectionGrid";
import ElectionHighlights from "./ElectionHighlights";
import EmptySearchState from "../ui/EmptySearchState";

const electionSortOptions: SortOption[] = [
  {
    value: "newest",
    label: "Newest First",
  },
  {
    value: "oldest",
    label: "Oldest First",
  },
  {
    value: "majority",
    label: "Majority Governments",
  },
  {
    value: "hung",
    label: "Hung Parliament",
  },
];

export default function ElectionBrowser() {
  const elections = getElections();

  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("newest");

  const filtered =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      let result =
        query === ""
          ? [...elections]
          : elections.filter(
              (election) =>
                election.year
                  .toString()
                  .includes(query)
            );

      switch (sort) {
        case "newest":
          result.sort(
            (a, b) =>
              b.year - a.year
          );
          break;

        case "oldest":
          result.sort(
            (a, b) =>
              a.year - b.year
          );
          break;

        case "majority":
          result.sort(
            (a, b) =>
              Number(b.majority) -
              Number(a.majority)
          );
          break;

        case "hung":
          result.sort(
            (a, b) =>
              Number(a.majority) -
              Number(b.majority)
          );
          break;
      }

      return result;
    }, [elections, search, sort]);

  return (
    <div>
      {/* ================= Hero ================= */}

      <div className="flex flex-col gap-6">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Elections",
            },
          ]}
        />

        <HeroBanner
          badge="Election Archive"
          title="General"
          highlight="Elections"
          icon={
            <Calendar size={18} />
          }
          subtitle="
            Explore every Lok Sabha General Election,
            government formation,
            winning alliances,
            parliamentary strength,
            and India's democratic history
            from 1951 onwards.
          "
        >
          <div
            className="
              flex
              flex-col
              divide-y
              divide-slate-100
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm
            "
          >
            <HeroStat
              value={elections.length}
              label="General Elections"
              icon={
                <Calendar size={22} />
              }
            />

            <HeroStat
              value="75+"
              label="Years of Democracy"
              icon={
                <Landmark size={22} />
              }
            />

            <HeroStat
              value="543"
              label="Lok Sabha Seats"
              icon={
                <Trophy size={22} />
              }
            />
          </div>
        </HeroBanner>

        <ElectionHighlights />
      </div>

      {/* ================= Search ================= */}

      <div className="mt-12 flex flex-col gap-6">
        <SearchToolbar
          search={search}
          onSearchChange={setSearch}
          placeholder="Search election year..."
          ariaLabel="Search Elections"
          sort={sort}
          onSortChange={setSort}
          sortOptions={electionSortOptions}
          total={elections.length}
          filtered={filtered.length}
          resultLabel="General Elections"
        />

        {filtered.length > 0 ? (
          <ElectionGrid
            elections={filtered}
          />
        ) : (
          <EmptySearchState
            search={search}
          />
        )}
      </div>
    </div>
  );
}