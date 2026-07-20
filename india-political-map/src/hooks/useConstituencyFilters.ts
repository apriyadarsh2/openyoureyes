"use client";

import { useMemo, useState } from "react";

import { Constituency } from "@/src/components/types/constituency";

export default function useConstituencyFilters(
  constituencies: Constituency[]
) {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [party, setParty] = useState("");
  const [reservation, setReservation] = useState("");
  const [sort, setSort] = useState("name-asc");
  
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const {
    filteredConstituencies,
    paginatedConstituencies,
    totalPages,
  } = useMemo(() => {
    const keyword = search.toLowerCase();

    let filtered = constituencies.filter((item) => {
      return (
        item.name_en.toLowerCase().includes(keyword) ||
        item.state.toLowerCase().includes(keyword) ||
        item.current_mp.name_en
          .toLowerCase()
          .includes(keyword)
      );
    });

    if (state) {
      filtered = filtered.filter(
        (item) => item.state === state
      );
    }

    if (party) {
      filtered = filtered.filter(
        (item) =>
          item.party.abbreviation === party
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
          a.name_en.localeCompare(b.name_en)
        );
        break;

      case "name-desc":
        filtered.sort((a, b) =>
          b.name_en.localeCompare(a.name_en)
        );
        break;

      case "latest-election":
        filtered.sort(
          (a, b) =>
            b.latest_election_year -
            a.latest_election_year
        );
        break;

      case "oldest-election":
        filtered.sort(
          (a, b) =>
            a.latest_election_year -
            b.latest_election_year
        );
        break;
    }

    const totalPages = Math.ceil(
      filtered.length / ITEMS_PER_PAGE
    );
    
    const paginatedConstituencies =
      filtered.slice(
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
    party,
    reservation,
    sort,
    page,
  ]);

  function resetFilters() {
    setSearch("");
    setState("");
    setParty("");
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

    party,
    setParty,

    reservation,
    setReservation,

    sort,
    setSort,

    resetFilters,
  };
}