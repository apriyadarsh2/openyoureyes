// "use client";

// import PoliticianGrid from "../../src/components/politicians/PoliticianGrid";
// import PoliticianSearch from "../../src/components/politicians/PoliticianSearch";
// import PoliticianFilters from "../../src/components/politicians/PoliticianFilters";
// import SortDropdown from "../../src/components/politicians/SortDropdown";

// import {
//   getPoliticians,
// } from "../../src/components/lib/repositories/politicians";

// import { getStates, getParties} from "../../src/components/lib/repositories/master";

// import usePoliticianFilters from "@/hooks/usePoliticianFilters";



// export default function PoliticiansPage() {
//   const politicians = getPoliticians();

//   const states = getStates();
//   const parties = getParties();

//   const {
//     filteredPoliticians,

//     search,
//     setSearch,

//     state,
//     setState,

//     party,
//     setParty,

//     criminal,
//     setCriminal,

//     sort,
//     setSort,
//   } = usePoliticianFilters(politicians);

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-10">

//       <div className="mb-10">
//         <h1 className="text-4xl font-bold">
//           Politicians
//         </h1>

//         <p className="mt-2 text-slate-500">
//           Browse, search and filter politicians.
//         </p>
//       </div>

//       <div className="mb-6">
//         <PoliticianSearch
//           value={search}
//           onChange={setSearch}
//         />
//       </div>

//       <div className="mb-6">
//         <PoliticianFilters
//           states={states}
//           parties={parties}

//           state={state}
//           setState={setState}

//           party={party}
//           setParty={setParty}

//           criminal={criminal}
//           setCriminal={setCriminal}
//         />
//       </div>

//       <div className="mb-8 flex justify-end">
//         <SortDropdown
//           value={sort}
//           onChange={setSort}
//         />
//       </div>

//       <PoliticianGrid
//         politicians={filteredPoliticians}
//       />

//     </main>
//   );
// }

"use client";

import { useState } from "react";

import PoliticianGrid from "../../src/components/politicians/PoliticianGrid";
import PoliticianSearch from "../../src/components/politicians/PoliticianSearch";
import PoliticianFilters from "../../src/components/politicians/PoliticianFilters";
import SortDropdown from "../../src/components/politicians/SortDropdown";

import Pagination from "../../src/components/politicians/Pagination";
import PoliticianList from "../../src/components/politicians/PoliticianList";
import ViewToggle from "../../src/components/politicians/ViewToggle";

import {
  getPoliticians,
} from "../../src/components/lib/repositories/politicians";

import { getStates, getParties} from "../../src/components/lib/repositories/master";

import usePoliticianFilters from "@/hooks/usePoliticianFilters";

export default function PoliticiansPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  
  const politicians = getPoliticians();

  const states = getStates();
  const parties = getParties();

  const {
    paginatedPoliticians,
    filteredPoliticians,

    page,
    setPage,
    totalPages,

    search,
    setSearch,

    state,
    setState,

    party,
    setParty,

    criminal,
    setCriminal,

    sort,
    setSort,
    
    resetFilters,
  } = usePoliticianFilters(politicians);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Politicians
        </h1>

        <p className="mt-2 text-slate-500">
          Browse, search and filter politicians.
        </p>
      </div>

      <div className="mb-6">
        <PoliticianSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="mb-6">
        <PoliticianFilters
          states={states}
          parties={parties}

          state={state}
          setState={setState}

          party={party}
          setParty={setParty}

          criminal={criminal}
          setCriminal={setCriminal}
        />
      </div>

      <div className="mb-8 flex justify-end">
        <SortDropdown
          value={sort}
          onChange={setSort}
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-600">
          {filteredPoliticians.length} politicians found
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={resetFilters}
            className="rounded-lg border px-4 py-2"
          >
            Reset
          </button>

          <ViewToggle
            view={view}
            setView={setView}
          />
        </div>
      </div>

      {view === "grid" ? (
        <PoliticianGrid
          politicians={paginatedPoliticians}
        />
      ) : (
        <PoliticianList
          politicians={paginatedPoliticians}
        />
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

    </main>
  );
}