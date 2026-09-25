"use client";

import { useEffect, useState } from "react";

import { globalSearch } from "@/src/components/lib/search/globalSearch";
import { GlobalSearchResult } from "@/src/components/types/global_search";

export default function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<GlobalSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function runSearch() {
      const searchTerm = query.trim();

      if (searchTerm.length < 2) {
        setResults([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // IMPORTANT:
        const searchResults = await globalSearch(searchTerm);

        if (!cancelled) {
          setResults(searchResults);
        }
      } catch (err) {
        console.error("Global search failed:", err);

        if (!cancelled) {
          setResults([]);
          setError("Unable to search right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    runSearch();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
  };
}