// "use client";

// import { Search, X } from "lucide-react";

// interface Props {
//   value: string;
//   onChange: (value: string) => void;
// }

// export default function StateSearch({
//   value,
//   onChange,
// }: Props) {
//   return (
//     <div className="relative w-full">

//       <Search
//         size={20}
//         className="
//           absolute
//           left-4
//           top-1/2
//           -translate-y-1/2
//           text-slate-400
//         "
//       />

//       <input
//         type="text"
//         value={value}
//         placeholder="Search state or union territory..."
//         onChange={(e) =>
//           onChange(e.target.value)
//         }
//         aria-label="Search states"
//         className="
//           w-full
//           rounded-2xl
//           border
//           border-slate-200
//           bg-white
//           py-4
//           pl-12
//           pr-12
//           shadow-sm
//           transition

//           placeholder:text-slate-400

//           focus:border-blue-500
//           focus:outline-none
//           focus:ring-4
//           focus:ring-blue-100
//         "
//       />

//       {value && (
//         <button
//           onClick={() => onChange("")}
//           aria-label="Clear search"
//           className="
//             absolute
//             right-4
//             top-1/2
//             -translate-y-1/2

//             rounded-full
//             p-1

//             text-slate-400

//             transition

//             hover:bg-slate-100
//             hover:text-slate-700
//           "
//         >
//           <X size={18} />
//         </button>
//       )}

//     </div>
//   );
// }

"use client";

import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function StateSearch({ value, onChange }: Props) {
  return (
    <div className="relative w-full group">
      <Search
        size={20}
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

      <input
        type="text"
        value={value}
        placeholder="Search state or union territory..."
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search states"
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
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-slate-100
            p-1.5
            text-slate-500
            transition-colors
            hover:bg-slate-200
            hover:text-slate-800
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}