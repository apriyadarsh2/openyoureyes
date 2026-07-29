"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import SearchDropdown from "@/src/components/search/SearchDropdown";
import usePoliticianSearch from "@/src/hooks/usePoliticianSearch";

export default function NavbarSearch() {
  const router = useRouter();

  const {
    query,
    setQuery,
    filteredPoliticians,
  } = usePoliticianSearch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function closeSearch() {
    setQuery("");
    inputRef.current?.blur();
  }

  function submitSearch() {
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);

    closeSearch();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-xl"
    >
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitSearch();
          }
        }}
        placeholder="Search politicians, parties, constituencies..."
        className="
          h-11
          w-full
          rounded-full
          border
          border-white/10
          bg-[#101827]
          pl-11
          pr-12
          text-sm
          text-white
          placeholder-gray-500
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:bg-[#101827]
          focus:ring-4
          focus:ring-blue-500/20
        "
      />

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <button
        onClick={submitSearch}
        className="
          absolute
          right-1
          top-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          transition
          hover:bg-blue-500
        "
      >
        <Search size={16} />
      </button>

      {query.trim() !== "" && (
        <SearchDropdown
          politicians={filteredPoliticians}
          onSelect={closeSearch}
        />
      )}
    </div>
  );
}