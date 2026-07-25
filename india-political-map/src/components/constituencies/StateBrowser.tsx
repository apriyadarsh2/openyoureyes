"use client";

import { useMemo, useState } from "react";

import {
  Calendar,
  Landmark,
  Map,
  MapPinned,
} from "lucide-react";

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";
import HeroBanner from "@/src/components/ui/HeroBanner";
import HeroStat from "@/src/components/ui/HeroStat";
import SearchToolbar from "@/src/components/ui/filters/SearchToolbar";

import { getStates } from "../lib/repositories/constituencies";

import EmptySearchState from "../ui/EmptySearchState";
import StateGrid from "./StateGrid";

export default function StateBrowser() {
  const states = getStates();

  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("az");

  const filteredStates =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      let result =
        query === ""
          ? [...states]
          : states.filter((state) =>
              state.name
                .toLowerCase()
                .includes(query)
            );

      switch (sort) {
        case "az":
          result.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;

        case "za":
          result.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;

        case "most":
          result.sort(
            (a, b) =>
              b.total_constituencies -
              a.total_constituencies
          );
          break;

        case "least":
          result.sort(
            (a, b) =>
              a.total_constituencies -
              b.total_constituencies
          );
          break;
      }

      return result;
    }, [states, search, sort]);

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Constituencies",
          },
        ]}
      />

      <HeroBanner
        badge="Constituency Intelligence"
        title="Lok Sabha"
        highlight="Constituencies"
        icon={<MapPinned size={18} />}
        subtitle="Explore every State and Union Territory, browse constituency distribution, parliamentary representation, election history and political insights."
      >
        <div className="flex flex-col divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <HeroStat
            value={states.length}
            label="States & Union Territories"
            icon={<Map size={22} />}
          />

          <HeroStat
            value="543"
            label="Lok Sabha Seats"
            icon={<Landmark size={22} />}
          />

          <HeroStat
            value="2024"
            label="Latest General Election"
            icon={<Calendar size={22} />}
          />
        </div>
      </HeroBanner>

      <SearchToolbar
        search={search}
        onSearchChange={setSearch}
        placeholder="Search state or union territory..."
        ariaLabel="Search States"
        sort={sort}
        onSortChange={setSort}
        total={states.length}
        filtered={filteredStates.length}
        resultLabel="States & Union Territories"
        sortOptions={[
          {
            value: "az",
            label: "Alphabetical (A-Z)",
          },
          {
            value: "za",
            label: "Alphabetical (Z-A)",
          },
          {
            value: "most",
            label: "Most Constituencies",
          },
          {
            value: "least",
            label: "Least Constituencies",
          },
        ]}
      />

      {filteredStates.length > 0 ? (
        <StateGrid
          states={filteredStates}
        />
      ) : (
        <EmptySearchState
          search={search}
        />
      )}
    </div>
  );
}