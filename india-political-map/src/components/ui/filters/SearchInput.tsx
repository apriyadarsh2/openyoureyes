"use client";

import { Search, X } from "lucide-react";

interface Props {
  value: string;

  onChange: (value: string) => void;

  placeholder?: string;

  ariaLabel?: string;

  disabled?: boolean;

  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  ariaLabel = "Search",
  disabled = false,
  className = "",
}: Props) {
  return (
    <div
      className={`
        group
        relative
        w-full
        ${className}
      `}
    >
      <Search
        size={20}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-all
          duration-300
          group-focus-within:scale-110
          group-focus-within:text-blue-600
        "
      />

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-3.5
          pl-12
          pr-12
          shadow-sm
          transition-all
          duration-300

          placeholder:text-slate-400

          hover:border-slate-300
          hover:shadow-md

          focus:border-blue-500
          focus:outline-none
          focus:ring-4
          focus:ring-blue-500/10

          disabled:cursor-not-allowed
          disabled:bg-slate-100
        "
      />

      {value && (
        <button
          type="button"
          aria-label="Clear Search"
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2

            rounded-full
            bg-slate-100
            p-1.5

            text-slate-500

            transition-all
            duration-200

            hover:bg-slate-200
            hover:text-slate-700
            hover:scale-110
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}