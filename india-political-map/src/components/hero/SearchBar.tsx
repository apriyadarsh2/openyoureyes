"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">

      <Search
        className="ml-3 text-slate-500"
        size={22}
      />

      <input
        placeholder="Search politician, constituency or party..."
        className="flex-1 border-none bg-transparent px-4 py-3 outline-none"
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}