// "use client";

// import { useState } from "react";

// import IndiaMap from "@/components/IndiaMap";
// import TimelineSlider from "@/components/TimelineSlider";
// import InfoPanel from "@/components/InfoPanel";

// import { getDataForYear } from "@/hooks/usePoliticalData";

// export default function Home() {
//   const [year, setYear] = useState(2024);

//   const data = getDataForYear(year);

//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         India Political Timeline
//       </h1>

//       <TimelineSlider
//         year={year}
//         setYear={setYear}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         <div className="lg:col-span-3">
//           <IndiaMap yearData={data} />
//         </div>

//         <InfoPanel data={data} />
//       </div>
//     </main>
//   );
// }\
"use client";

import { useState } from "react";

import Hero from "@/src/components/hero/Hero";
import KPIGrid from "@/src/components/kpi/KPIGrid";
import HomepageMap from "@/src/components/map/HomepageMap";
import LeaderboardsSection from "@/src/components/leaderboard/LeaderboardsSection";

import { getDataForYear } from "@/src/hooks/usePoliticalData";
import usePoliticianSearch from "@/src/hooks/usePoliticianSearch";


export default function Home() {
  const [year, setYear] = useState(2024);

  const data = getDataForYear(year);

  const {
    query,
    setQuery,
    filteredPoliticians,
    isSearching,
  } = usePoliticianSearch();

  return (
    <main>

      <Hero
        year={year}
        setYear={setYear}
        query={query}
        setQuery={setQuery}
        filteredPoliticians={filteredPoliticians}
      />

      <KPIGrid />

      <HomepageMap
        year={year}
        data={data}
      />

      <LeaderboardsSection />

    </main>
  );
}