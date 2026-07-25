"use client";

interface Props {
  total: number;

  filtered: number;

  label: string;

  search?: string;

  className?: string;
}

export default function ResultsInfo({
  total,
  filtered,
  label,
  search,
  className = "",
}: Props) {
  return (
    <div
      className={`
        flex
        flex-col
        gap-2

        px-1

        text-sm
        text-slate-500

        sm:flex-row
        sm:items-center
        sm:justify-between

        ${className}
      `}
    >
      <span>
        Showing{" "}
        <strong className="text-slate-700">
          {filtered}
        </strong>{" "}
        of{" "}
        <strong className="text-slate-700">
          {total}
        </strong>{" "}
        {label}
      </span>

      {search?.trim() && (
        <span>
          Search:&nbsp;

          <strong className="text-slate-700">
            "{search}"
          </strong>
        </span>
      )}
    </div>
  );
}