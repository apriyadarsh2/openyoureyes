"use client";

import SearchInput from "./SearchInput";
import SortDropdown from "./SortDropdown";
import ResultsInfo from "./ResultsInfo";
import { SortOption } from "./type";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  placeholder?: string;
  ariaLabel?: string;

  sort: string;
  onSortChange: (value: string) => void;

  sortOptions: SortOption[];

  total: number;
  filtered: number;
  resultLabel: string;

  className?: string;
}

export default function SearchToolbar({
  search,
  onSearchChange,
  placeholder = "Search...",
  ariaLabel = "Search",
  sort,
  onSortChange,
  sortOptions,
  total,
  filtered,
  resultLabel,
  className = "",
}: Props) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search + Sort */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchInput
            value={search}
            onChange={onSearchChange}
            placeholder={placeholder}
            ariaLabel={ariaLabel}
          />
        </div>

        <div className="w-full sm:w-72">
          <SortDropdown
            value={sort}
            options={sortOptions}
            onChange={onSortChange}
          />
        </div>
      </div>

      {/* Results */}

      <ResultsInfo
        total={total}
        filtered={filtered}
        label={resultLabel}
        search={search}
      />
    </div>
  );
}