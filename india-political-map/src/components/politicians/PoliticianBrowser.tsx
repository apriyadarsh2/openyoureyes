"use client";

import { useState } from "react";

import PoliticianGrid from "./PoliticianGrid";
import PoliticianList from "./PoliticianList";
import PoliticianSearch from "./PoliticianSearch";
import PoliticianFilters from "./PoliticianFilters";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import ViewToggle from "./ViewToggle";

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
  const [view, setView] = useState<"grid" | "list">("grid");

  const politicians = getPoliticians();

  const states = getStates();
  const parties = getParties();

  const {
    paginatedPoliticians,
    filteredPoliticians,

    page,
    setPage,
    totalPages,

    search,
    setSearch,

    state,
    setState,

    party,
    setParty,

    criminal,
    setCriminal,

    sort,
    setSort,

    resetFilters,
  } = usePoliticianFilters(
    politicians,
    initialSearch
  );

  return (
    <>
      <div className="mb-6">
        <PoliticianSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="mb-6">
        <PoliticianFilters
          states={states}
          parties={parties}
          state={state}
          setState={setState}
          party={party}
          setParty={setParty}
          criminal={criminal}
          setCriminal={setCriminal}
        />
      </div>

      <div className="mb-8 flex justify-end">
        <SortDropdown
          value={sort}
          onChange={setSort}
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-600">
          {filteredPoliticians.length} politicians found
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={resetFilters}
            className="rounded-lg border px-4 py-2 transition hover:bg-slate-50"
          >
            Reset
          </button>

          <ViewToggle
            view={view}
            setView={setView}
          />
        </div>
      </div>

      {view === "grid" ? (
        <PoliticianGrid
          politicians={paginatedPoliticians}
        />
      ) : (
        <PoliticianList
          politicians={paginatedPoliticians}
        />
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </>
  );
}