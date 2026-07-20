// "use client";

// import StateSearch from "./StateSearch";
// import SortDropdown, {
//   SortOption,
// } from "./SortDropdown";

// interface Props {
//   search: string;

//   onSearchChange: (
//     value: string
//   ) => void;

//   sort: SortOption;

//   onSortChange: (
//     value: SortOption
//   ) => void;

//   total: number;

//   filtered: number;
// }

// export default function SearchToolbar({
//   search,
//   onSearchChange,
//   sort,
//   onSortChange,
//   total,
//   filtered,
// }: Props) {
//   return (
//     <div
//       className="
//         mb-10

//         rounded-3xl

//         border

//         bg-white

//         p-5

//         shadow-sm
//       "
//     >
//       <div
//         className="
//           flex
//           flex-col
//           gap-4

//           lg:flex-row
//           lg:items-center
//         "
//       >

//         <div className="flex-1">

//           <StateSearch
//             value={search}
//             onChange={onSearchChange}
//           />

//         </div>

//         <SortDropdown
//           value={sort}
//           onChange={onSortChange}
//         />

//       </div>

//       <div
//         className="
//           mt-5

//           flex
//           flex-col

//           gap-2

//           text-sm

//           text-slate-500

//           sm:flex-row
//           sm:justify-between
//         "
//       >
//         <span>

//           Showing{" "}

//           <strong>
//             {filtered}
//           </strong>

//           {" "}of{" "}

//           <strong>
//             {total}
//           </strong>

//           {" "}States & UTs

//         </span>

//         {search && (
//           <span>

//             Search:

//             <strong>
//               {" "}
//               "{search}"
//             </strong>

//           </span>
//         )}

//       </div>

//     </div>
//   );
// }

"use client";

import StateSearch from "./StateSearch";
import SortDropdown, { SortOption } from "./SortDropdown";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  total: number;
  filtered: number;
}

export default function SearchToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  total,
  filtered,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 mt-4">
      {/* Search and Sort Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <StateSearch value={search} onChange={onSearchChange} />
        </div>

        <div className="w-full sm:w-64">
          <SortDropdown value={sort} onChange={onSortChange} />
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex flex-col gap-2 px-1 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <span>
          Showing <strong className="text-slate-700">{filtered}</strong> of{" "}
          <strong className="text-slate-700">{total}</strong> States & UTs
        </span>

        {search && (
          <span>
            Search: <strong className="text-slate-700">"{search}"</strong>
          </span>
        )}
      </div>
    </div>
  );
}