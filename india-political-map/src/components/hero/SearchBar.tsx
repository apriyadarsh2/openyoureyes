"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({
  query,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">

      <Search
        className="ml-3 text-slate-500"
        size={22}
      />

      <input
        type="text"
        value={query}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        placeholder="Search politicians, party, constituency or state..."
        className="w-full rounded-xl px-4 py-3 text-lg outline-none"
      />
    </div>
  );
}