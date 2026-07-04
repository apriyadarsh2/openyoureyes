"use client";

import { useEffect, useMemo, useState } from "react";
import { Politician } from "@/src/components/types/politician";

const ITEMS_PER_PAGE = 6;

export default function usePoliticianFilters(
  politicians: Politician[]
) {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("All");
  const [party, setParty] = useState("All");
  const [criminal, setCriminal] = useState("All");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  const filteredPoliticians = useMemo(() => {
    let data = [...politicians];

    // Search
    if (search) {
      data = data.filter((p) =>
        p.name_en.toLowerCase().includes(search.toLowerCase())
      );
    }

    // State Filter
    if (state !== "All") {
      data = data.filter(
        (p) => p.latest_constituency.state === state
      );
    }

    // Party Filter
    if (party !== "All") {
      data = data.filter(
        (p) => p.latest_party.abbreviation === party
      );
    }

    // Criminal Filter
    if (criminal === "Yes") {
      data = data.filter(
        (p) => p.criminal_cases_count > 0
      );
    }

    if (criminal === "No") {
      data = data.filter(
        (p) => p.criminal_cases_count === 0
      );
    }

    // Sorting
    switch (sort) {
      case "assets":
        data.sort(
          (a, b) => b.net_assets_inr - a.net_assets_inr
        );
        break;

      case "cases":
        data.sort(
          (a, b) =>
            b.criminal_cases_count - a.criminal_cases_count
        );
        break;

      default:
        data.sort((a, b) =>
          a.name_en.localeCompare(b.name_en)
        );
    }

    return data;
  }, [politicians, search, state, party, criminal, sort]);

  // Total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPoliticians.length / ITEMS_PER_PAGE)
  );

  // Reset page whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, state, party, criminal, sort]);

  // Keep page within valid range
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  // Current page data
  const paginatedPoliticians = filteredPoliticians.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return {
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

    resetFilters() {
      setSearch("");
      setState("All");
      setParty("All");
      setCriminal("All");
      setSort("name");
      setPage(1);
    },
  };
}