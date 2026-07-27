// "use client";

// import { useState } from "react";


// import KPIGrid from "@/src/components/kpi/KPIGrid";
// // import HomepageMap from "@/src/components/map/HomepageMap";
// import LeaderboardsSection from "@/src/components/leaderboard/LeaderboardsSection";

// import { getDataForYear } from "@/src/hooks/usePoliticalData";
// import usePoliticianSearch from "@/src/hooks/usePoliticianSearch";


// export default function Home() {
//   const [year, setYear] = useState(2024);


//   const {
//     query,
//     setQuery,
//     filteredPoliticians,
//     isSearching,
//   } = usePoliticianSearch();

//   return (
//     <main>

      

      

//       <HomepageMap/>

//       <KPIGrid />

//       <LeaderboardsSection />

//     </main>
//   );
// }



// "use client";

// import { useState } from "react";
// import IndiaMap from "@/src/components/map/IndiaMap";
// import TimelineSlider from "@/src/components/map/TimelineSlider";
// import InfoPanel from "@/src/components/map/InfoPanel";
// import PartyLegend from "@/src/components/map/PartyLegend";
// import SnapshotPanel from "@/src/components/kpi/SnapshotPanel"; 

// import { getDataForYear } from "@/src/hooks/usePoliticalData";
// import { getSnapshotForYear } from "@/src/hooks/useSnapshotData"; 

// export default function Home() {
//   const [year, setYear] = useState(2024);
//   const [selectedState, setSelectedState] = useState<string | null>(null);

//   const data = getDataForYear(year);
//   const snapshotData = getSnapshotForYear(year);

//   return (
//     // FIX 1: h-[calc(100vh-72px)] taaki Navbar ke baad ye exact screen me fit ho (Outer Scrollbar Khatam)
//     <main className="h-[calc(100vh-72px)] w-full overflow-hidden bg-[#fafafa] flex flex-col p-4 relative">
//       <div className="max-w-[1600px] w-full mx-auto flex-1 flex flex-col h-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start h-full">
          
//           {/* LEFT SIDEBAR */}
//           <div className="lg:col-span-3 h-full">
//             <SnapshotPanel year={year} data={snapshotData?.snapshot} />
//           </div>

//           {/* CENTER: India Map */}
//           {/* FIX 2: Map is flex-1 aur center me hai bina height badhaye */}
          
//           <div className="lg:col-span-6 flex flex-col items-center justify-start -mt-6 w-full h-full pb-20 relative z-0">
//             <IndiaMap
//               yearData={data}
//               selectedState={selectedState}
//               onStateSelect={setSelectedState}
//             />
//           </div>

//           {/* RIGHT SIDEBAR */}
//           {/* FIX 3: Scrollbar ko hide kar diya par scroll kaam karega ([&::-webkit-scrollbar]:hidden) */}
//           {/* RIGHT SIDEBAR */}
//           <div className="lg:col-span-3 flex flex-col gap-3 h-full pb-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//             <InfoPanel data={data} selectedState={selectedState} />
//             <PartyLegend yearData={data} />
//           </div>

//         </div>
//       </div>

//       {/* FLOATING TIMELINE SLIDER */}
//       <div className="absolute bottom-4 left-0 w-full px-4 z-50 pointer-events-none">
//         <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
//           <div className="lg:col-span-9 pointer-events-auto bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 px-4 py-3">
//             <TimelineSlider year={year} setYear={setYear} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import IndiaMap from "@/src/components/map/IndiaMap";
import TimelineSlider from "@/src/components/map/TimelineSlider";
import InfoPanel from "@/src/components/map/InfoPanel";
import PartyLegend from "@/src/components/map/PartyLegend";
import SnapshotPanel from "@/src/components/kpi/SnapshotPanel"; 

import { getDataForYear } from "@/src/hooks/usePoliticalData";
import { getSnapshotForYear } from "@/src/hooks/useSnapshotData"; 

export default function Home() {
  const [year, setYear] = useState(2024);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const data = getDataForYear(year);
  const snapshotData = getSnapshotForYear(year);

  return (
<main className="h-[calc(100vh-72px)] w-full overflow-hidden bg-[#1d243c] text-[#F4F4F5] flex flex-col p-4 relative">
        <div className="max-w-[1600px] w-full mx-auto flex-1 flex flex-col h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start h-full">
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 h-full">
            <SnapshotPanel year={year} data={snapshotData?.snapshot} />
          </div>

          {/* CENTER: India Map */}
          <div className="lg:col-span-6 flex flex-col items-center justify-start -mt-6 w-full h-full pb-20 relative z-0">
            <IndiaMap
              yearData={data}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 flex flex-col gap-3 h-full pb-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <InfoPanel data={data} selectedState={selectedState} />
            <PartyLegend yearData={data} />
          </div>

        </div>
      </div>

      {/* FLOATING TIMELINE SLIDER */}
      <div className="absolute bottom-4 left-0 w-full px-4 z-50 pointer-events-none">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-9 pointer-events-auto bg-[#1d243c] border border-[#2d3654] rounded-2xl shadow-lg px-4 py-3 text-[#F2F1EC]">
            <TimelineSlider year={year} setYear={setYear} />
          </div>
        </div>
      </div>
    </main>
  );
}