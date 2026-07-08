"use client";

import SearchRow from "./SearchRow";

import { Politician } from "@/src/components/types/politician";

interface Props {
  politicians: Politician[];
  onSelect: () => void;
}

export default function SearchDropdown({
  politicians,
  onSelect,
}: Props) {
  if (politicians.length === 0) {
    return (
      <div
        className="
          absolute
          left-0
          right-0
          top-full
          mt-3
          z-[999]
          rounded-2xl
          border
          bg-white
          shadow-2xl
        "
      >
        <div className="p-5 text-center text-slate-500">
          No politicians found.
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        mt-3
        z-[999]

        overflow-hidden

        rounded-2xl
        border
        border-slate-200

        bg-white

        shadow-2xl
      "
    >
      <div className="border-b bg-slate-50 px-5 py-3">

        <p className="font-semibold text-slate-700">
          Search Results
        </p>

        <p className="text-sm text-slate-500">
          {politicians.length} result
          {politicians.length > 1 ? "s" : ""}
        </p>

      </div>

      <div className="max-h-[420px] overflow-y-auto">

        {politicians.slice(0, 8).map((politician) => (
          <SearchRow
            key={politician.id}
            politician={politician}
            onSelect={onSelect}
          />
        ))}

      </div>
    </div>
  );
}