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
import { PARTY_COLORS } from "@/data/partyColors";

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  unit: string;
  color?: string;
}

// 1. STAT BAR: Thoda font bada aur line thick ki hai taaki clear dikhe
function StatBar({ label, value, max, unit, color }: StatBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="mb-1.5">
      <div className="flex justify-between items-end mb-0.5">
        <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-wide">{label}</span>
        <span className="text-[11px] font-black text-[#F2F1EC]">
          {typeof value === "number" ? value.toFixed(1) : value}
          <span className="text-[#94A3B8] text-[9px] ml-0.5">{unit}</span>
        </span>
      </div>
      <div className="h-1 bg-[#14192b] rounded-full overflow-hidden border border-[#2d3654]">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color || "#4F46E5" }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [year, setYear] = useState(2024);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const data = getDataForYear(year);
  const snapshotData = getSnapshotForYear(year);

  const stateInfo = selectedState ? data.states[selectedState] : null;
  const stateStats = selectedState ? data.stateStats[selectedState] : null;

  return (
    <main className="h-[calc(100vh-72px)] w-full overflow-hidden  text-[#F4F4F5] flex flex-col p-4 relative">
      <div className="max-w-[1600px] w-full mx-auto flex-1 flex flex-col h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start h-full">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 h-full">
            <SnapshotPanel year={year} data={snapshotData?.snapshot} mapData={data} />
          </div>

          {/* CENTER: Map Area */}
          <div className="lg:col-span-6 flex flex-col items-center justify-start -mt-6 w-full h-full pb-20 relative z-0">

            {/* Map Wrapper with Left Shift Transition */}
            <div 
              className={`w-full flex-1 flex items-center justify-center transition-transform duration-700 ease-in-out ${
                selectedState ? "-translate-x-12" : "translate-x-0"
              }`}
            >
              <IndiaMap
                yearData={data}
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
            </div>

            {/* FIXED POPUP IN THE RED BOX AREA (Slightly larger, top-[35%]) */}
            <div
              className={`absolute top-[45%] right-4 w-64 max-h-[350px] overflow-y-auto bg-[#14192b]/95 backdrop-blur-xl border border-[#2d3654] rounded-2xl p-4 shadow-2xl z-50 [&::-webkit-scrollbar]:hidden transition-all duration-500 ease-out ${
                selectedState && stateInfo
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-8 pointer-events-none"
              }`}
            >
              {stateInfo && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">
                      State Details
                    </span>
                    <button
                      onClick={() => setSelectedState(null)}
                      className="w-5 h-5 bg-[#1d243c] border border-[#2d3654] rounded-full text-[#94A3B8] hover:text-[#F2F1EC] hover:bg-[#2d3654] flex items-center justify-center text-[10px] font-bold transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="text-lg font-black text-[#F2F1EC] mb-2 leading-tight">
                    {selectedState}
                  </div>

                  {stateInfo.party === "UNKNOWN" ? (
                    <div className="text-xs text-[#94A3B8] py-1.5 bg-[#1d243c] px-3 rounded-lg border border-[#2d3654]">
                      This state did not exist at this time.
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-0.5 rounded text-white text-[10px] font-bold shadow-sm"
                        style={{ background: PARTY_COLORS[stateInfo.party] || "#999" }}
                      >
                        {stateInfo.party}
                      </span>
                      <span className="text-[10px] font-bold text-[#94A3B8] truncate">
                        {stateInfo.cm && stateInfo.cm !== "State not yet formed" ? stateInfo.cm : ""}
                      </span>
                    </div>
                  )}

                  {stateStats && (
                    <div className="mt-2 pt-2 border-t border-[#2d3654]">
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                        <StatBar label="Literacy" value={stateStats.literacyRate} max={100} unit="%" color="#3B82F6" />
                        <StatBar label="Urban" value={stateStats.urbanization} max={100} unit="%" color="#F59E0B" />
                        <StatBar label="Health" value={stateStats.healthIndex * 100} max={100} unit="" color="#14B8A6" />
                        <StatBar label="GDP/Cap" value={stateStats.gdpPerCapita} max={400} unit="k" color="#22C55E" />
                      </div>
                      <div className="mt-1.5">
                        <StatBar label="Crime Rate" value={stateStats.crimeRate} max={700} unit="/lakh" color="#EF4444" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          
          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 flex flex-col mt-20 gap-3 h-full pb-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <InfoPanel data={data} selectedState={null} />
            <PartyLegend yearData={data} />
          </div>
            



            </div>

        </div>
  

      {/* FLOATING TIMELINE SLIDER (Moved OUTSIDE grid, Full Width, Bottom Aligned) */}
      <div className="absolute bottom-2 left-0 w-full px-4 z-40 pointer-events-none">
  <div className="max-w-[1600px] mx-auto">
    <div className="w-full pointer-events-auto bg-[#1F2937] border border-white/10 rounded-2xl shadow-lg px-6 py-4 text-white">
      <TimelineSlider year={year} setYear={setYear} />
    </div>
  </div>
</div>
    </main>
  );
}