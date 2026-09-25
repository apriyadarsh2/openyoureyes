"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import SearchDropdown from "@/src/components/search/SearchDropdown";
import useGlobalSearch from "@/src/hooks/useGlobalSearch";

export default function NavbarSearch() {
  const router = useRouter();

  const {
    query,
    setQuery,
    results,
    loading,
  } = useGlobalSearch();

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);

  function closeSearch() {
    setQuery("");
    inputRef.current?.blur();
  }

  function submitSearch() {
    const value = query.trim();

    if (!value) {
      return;
    }

    closeSearch();

    router.push(
      `/search?q=${encodeURIComponent(value)}`
    );
  }

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
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
    function handleEscape(
      event: KeyboardEvent
    ) {
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
        onChange={(event) =>
          setQuery(event.target.value)
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submitSearch();
          }
        }}
        placeholder="Search politicians, parties, constituencies, elections..."
        className="
          h-11
          w-full
          rounded-full
          border
          border-[#3E445B]
          bg-[#101827]
          pl-11
          pr-12
          text-sm
          text-[#F4F4F5]
          placeholder:text-[#94A3B8]
          outline-none
          transition-all
          duration-200
          focus:border-[#4F46E5]
          focus:ring-4
          focus:ring-[#4F46E5]/20
        "
      />

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#94A3B8]
        "
      />

      <button
        type="button"
        onClick={submitSearch}
        aria-label="Search"
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
          bg-[#4F46E5]
          text-white
          transition
          hover:bg-[#4338CA]
        "
      >
        <Search size={16} />
      </button>

      {query.trim() !== "" && (
        <SearchDropdown
          results={results}
          onSelect={(result) => {
            closeSearch();
            router.push(result.href);
          }}
        />
      )}

      {loading &&
        query.trim() !== "" && (
          <div className="absolute left-1/2 top-full z-[1000] mt-2 -translate-x-1/2 text-xs text-[#94A3B8]">
            Loading search…
          </div>
        )}
    </div>
  );
}