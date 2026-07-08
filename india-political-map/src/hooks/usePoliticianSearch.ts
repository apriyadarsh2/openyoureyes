"use client";

import { useMemo, useState } from "react";

import { getPoliticians } from "@/src/components/lib/repositories/politicians";
import { searchPoliticians } from "../components/search/searchPoliticians";

export default function usePoliticianSearch() {
  const politicians = getPoliticians();

  const [query, setQuery] = useState("");

  const filteredPoliticians = useMemo(() => {
  if (!query.trim()) {
    return [];
  }

  return searchPoliticians(
    politicians,
    query
  );
}, [politicians, query]);

  return {
    query,
    setQuery,
    filteredPoliticians,
    hasResults: filteredPoliticians.length > 0,
    isSearching: query.trim().length > 0,
  };
}