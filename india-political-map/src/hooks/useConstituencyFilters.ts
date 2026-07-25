"use client";

import { useMemo, useState } from "react";

import { ConstituencySummary } from "@/src/components/types/constituency";

export default function useConstituencyFilters(
  constituencies: ConstituencySummary[]
) {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [reservation, setReservation] = useState("");
  const [sort, setSort] = useState("name-asc");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const {
    filteredConstituencies,
    paginatedConstituencies,
    totalPages,
  } = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let filtered = constituencies.filter((item) => {
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.state.toLowerCase().includes(keyword)
      );
    });

    if (state) {
      filtered = filtered.filter(
        (item) => item.state === state
      );
    }

    if (reservation) {
      filtered = filtered.filter(
        (item) =>
          item.reservation_type === reservation
      );
    }

    filtered = [...filtered];

    switch (sort) {
      case "name-asc":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "name-desc":
        filtered.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "electors-desc":
        filtered.sort(
          (a, b) => b.electors - a.electors
        );
        break;

      case "electors-asc":
        filtered.sort(
          (a, b) => a.electors - b.electors
        );
        break;
    }

    const totalPages = Math.ceil(
      filtered.length / ITEMS_PER_PAGE
    );

    const paginatedConstituencies = filtered.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE
    );

    return {
      filteredConstituencies: filtered,
      paginatedConstituencies,
      totalPages,
    };
  }, [
    constituencies,
    search,
    state,
    reservation,
    sort,
    page,
  ]);

  function resetFilters() {
    setSearch("");
    setState("");
    setReservation("");
    setSort("name-asc");
    setPage(1);
  }

  return {
    filteredConstituencies,
    paginatedConstituencies,

    page,
    setPage,
    totalPages,

    search,
    setSearch,

    state,
    setState,

    reservation,
    setReservation,

    sort,
    setSort,

    resetFilters,
  };
}