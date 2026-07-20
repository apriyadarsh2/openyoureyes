// "use client";

// import { ArrowUpDown } from "lucide-react";

// export type SortOption =
//   | "az"
//   | "za"
//   | "most"
//   | "least";

// interface Props {
//   value: SortOption;
//   onChange: (
//     value: SortOption
//   ) => void;
// }

// export default function SortDropdown({
//   value,
//   onChange,
// }: Props) {
//   return (
//     <div className="relative w-full lg:w-72">

//       <ArrowUpDown
//         size={18}
//         className="
//           absolute
//           left-4
//           top-1/2
//           -translate-y-1/2
//           text-slate-400
//         "
//       />

//       <select
//         value={value}
//         onChange={(e) =>
//           onChange(
//             e.target.value as SortOption
//           )
//         }
//         className="
//           w-full

//           appearance-none

//           rounded-2xl

//           border
//           border-slate-200

//           bg-white

//           py-4
//           pl-11
//           pr-10

//           shadow-sm

//           focus:border-blue-500
//           focus:outline-none
//           focus:ring-4
//           focus:ring-blue-100
//         "
//       >
//         <option value="az">
//           Alphabetical (A-Z)
//         </option>

//         <option value="za">
//           Alphabetical (Z-A)
//         </option>

//         <option value="most">
//           Most Constituencies
//         </option>

//         <option value="least">
//           Least Constituencies
//         </option>

//       </select>

//     </div>
//   );
// }

"use client";

import { ArrowUpDown, ChevronDown } from "lucide-react";

export type SortOption = "az" | "za" | "most" | "least";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <div className="relative w-full group">
      <ArrowUpDown
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-colors
          group-focus-within:text-blue-500
        "
      />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="
          w-full
          cursor-pointer
          appearance-none
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
        "
      >
        <option value="az">Alphabetical (A-Z)</option>
        <option value="za">Alphabetical (Z-A)</option>
        <option value="most">Most Constituencies</option>
        <option value="least">Least Constituencies</option>
      </select>

      {/* Custom dropdown arrow for the right side */}
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