"use client";

import { useState } from "react";

import PoliticianList from "./PoliticianList";
import PoliticianFilters from "./PoliticianFilters";
import SortDropdown from "../ui/SortDropdown";
import Pagination from "../ui/Pagination";

import {
  getPoliticians,
} from "@/src/components/lib/repositories/politicians";

import {
  getStates,
  getParties,
} from "@/src/components/lib/repositories/master";

import usePoliticianFilters from "@/src/hooks/usePoliticianFilters";

interface Props {
  initialSearch?: string;
}

export default function PoliticianBrowser({
  initialSearch = "",
}: Props) {
  const politicians = getPoliticians();

  const states = getStates();
  const parties = getParties();
  const sortOptions = [
    { value: "name", label: "Sort by Name" },
    { value: "assets", label: "Highest Assets" },
    { value: "cases", label: "Most Criminal Cases" },
  ];

  const {
    paginatedPoliticians,
    filteredPoliticians,
    page,
    setPage,
    totalPages,
    state,
    setState,
    party,
    setParty,
    criminal,
    setCriminal,
    search,
    setSearch,
    sort,
    setSort,
    resetFilters,
  } = usePoliticianFilters(politicians, initialSearch);

  return (
    <>
      <div className="mb-4 rounded-xl border border-politic-border bg-politic-card p-4 shadow-lg">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <PoliticianFilters 
              states={states}
              parties={parties}
              state={state}
              setState={setState}
              party={party}
              setParty={setParty}
              criminal={criminal}
              setCriminal={setCriminal}
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-politic-border pt-3 md:border-t-0 md:pt-0">
            <SortDropdown
              value={sort}
              onChange={setSort}
              options={sortOptions}
            />
            <button
              onClick={resetFilters}
              className="rounded-lg border border-politic-border bg-politic-inner px-3 py-1.5 text-sm font-medium text-politic-text transition hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between px-1">
        <p className="text-sm text-politic-muted">
          <span className="font-semibold text-politic-text">{filteredPoliticians.length}</span> politicians found
        </p>
      </div>

      <div className="mb-6">
        <PoliticianList politicians={paginatedPoliticians} />
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </>
  );
}