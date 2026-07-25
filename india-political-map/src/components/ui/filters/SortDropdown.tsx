"use client";

import {
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";

import { SortOption } from "./type";

interface Props {
  value: string;

  options: SortOption[];

  onChange: (value: string) => void;

  className?: string;

  disabled?: boolean;
}

export default function SortDropdown({
  value,
  options,
  onChange,
  className = "",
  disabled = false,
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
      <ArrowUpDown
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-all
          duration-300
          group-focus-within:text-blue-600
          group-focus-within:scale-110
        "
      />

      <select
        value={value}
        disabled={disabled}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          appearance-none
          cursor-pointer

          rounded-2xl
          border
          border-slate-200
          bg-white

          py-3.5
          pl-11
          pr-12

          font-medium
          text-slate-700

          shadow-sm

          transition-all
          duration-300

          hover:border-slate-300
          hover:shadow-md

          focus:border-blue-500
          focus:outline-none
          focus:ring-4
          focus:ring-blue-500/10

          disabled:cursor-not-allowed
          disabled:bg-slate-100
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />
    </div>
  );
}