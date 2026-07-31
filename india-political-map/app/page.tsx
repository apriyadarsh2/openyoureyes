

"use client";

import { useState, useMemo } from "react";
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

function StateDetailsCard({ selectedState, stateInfo, stateStats, onClose }: any) {
  if (!selectedState || !stateInfo) return null;
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">
          State Details
        </span>
        <button
          onClick={onClose}
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
  );
}

export default function Home() {
  const [year, setYear] = useState(2024);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const data = getDataForYear(year);
  const snapshotData = getSnapshotForYear(year);

  const stateInfo = selectedState ? data.states[selectedState] : null;
  const stateStats = selectedState ? data.stateStats[selectedState] : null;

  const topParties = useMemo(() => {
    const counts: Record<string, number> = {};
    if (data?.states) {
      Object.values(data.states).forEach((state: any) => {
        if (state.party && state.party !== "UNKNOWN" && state.party !== "State not yet formed") {
          counts[state.party] = (counts[state.party] || 0) + 1;
        }
      });
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);
  }, [data]);

  const centerGovt = snapshotData?.snapshot?.ruling_party?.party || "NDA";

  return (
    // Changed lg:overflow-hidden to xl:overflow-hidden
    <main className="h-[calc(100vh-64px)] w-full text-[#F4F4F5] flex flex-col relative overflow-x-hidden overflow-y-auto xl:overflow-hidden">
      {/* Changed lg: breakpoints to xl: */}
      <div className="max-w-[1600px] w-full mx-auto flex flex-col xl:grid xl:grid-cols-12 gap-4 xl:h-full p-4 pb-6 xl:pb-4 relative">
        
        {/* 1. MAP AREA */}
        <div className="order-1 xl:order-none xl:col-span-6 flex flex-col items-center justify-center w-full h-[55vh] min-h-[400px] xl:h-full relative z-0">
          
          <div 
  className={`w-full flex-1 flex items-center justify-center transition-transform duration-700 ease-in-out ${
    selectedState ? "xl:-translate-x-12 translate-x-0" : "translate-x-0"
  } scale-125 xl:scale-100 -mt-2 xl:mt-0 origin-center`}
>
            <IndiaMap
              yearData={data}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>

          {/* MOBILE MINI LEGEND (Top 4 + Center Govt) */}
          <div className="absolute bottom-0 left-2 right-2 xl:hidden flex gap-2 pointer-events-none z-10">
            <div className="bg-[#14192b]/95 backdrop-blur-md border border-[#2d3654] rounded-xl p-2 flex flex-col justify-center pointer-events-auto shadow-lg shrink-0 min-w-[80px]">
              <span className="text-[8px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5">Center</span>
              <div className="flex items-center gap-1.5">
                <span 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ background: PARTY_COLORS[centerGovt] || "#4F46E5" }} 
                />
                <span className="text-[11px] font-black text-white truncate">
                  {centerGovt}
                </span>
              </div>
            </div>

            <div className="flex-1 bg-[#14192b]/95 backdrop-blur-md border border-[#2d3654] rounded-xl p-2 flex flex-wrap items-center justify-evenly pointer-events-auto shadow-lg gap-2">
              {topParties.map(([party, count]) => (
                <div key={party} className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: PARTY_COLORS[party] || "#999" }} />
                  <span className="text-[10px] font-bold text-[#F2F1EC]">{party}</span>
                  <span className="text-[9px] text-[#94A3B8]">({count})</span>
                </div>
              ))}
</div>
          </div>

          {/* DESKTOP STATE POPUP */}
          <div
            className={`hidden xl:block absolute top-[48%] right-4 w-64 max-h-[350px] overflow-y-auto bg-[#14192b]/95 backdrop-blur-xl border border-[#2d3654] rounded-2xl p-4 shadow-2xl z-50 [&::-webkit-scrollbar]:hidden transition-all duration-500 ease-out ${
              selectedState && stateInfo
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <StateDetailsCard 
              selectedState={selectedState} 
              stateInfo={stateInfo} 
              stateStats={stateStats} 
              onClose={() => setSelectedState(null)} 
            />
          </div>
        </div>

        {/* 2. TIMELINE SLIDER */}
        <div className="order-2 xl:order-none xl:absolute xl:bottom-2 xl:left-0 xl:w-full xl:px-4 z-40 mt-2 xl:mt-0 pointer-events-none">
          <div className="max-w-[1600px] mx-auto">
            <div className="w-full pointer-events-auto bg-[#1F2937] border border-white/10 rounded-2xl shadow-lg px-4 py-3 xl:px-6 xl:py-4 text-white">
              <TimelineSlider year={year} setYear={setYear} />
            </div>
          </div>
        </div>

        {/* 3. MOBILE STATE CARD */}
        <div 
          className={`order-3 xl:hidden w-full transition-all duration-500 ease-in-out transform origin-top overflow-hidden bg-[#14192b] rounded-2xl shadow-xl ${
            selectedState && stateInfo 
              ? "max-h-[600px] opacity-100 translate-y-0 mt-3 border border-[#2d3654]" 
              : "max-h-0 opacity-0 -translate-y-4 mt-0 border-transparent"
          }`}
        >
          <div className={`${selectedState && stateInfo ? "p-4" : "p-0 h-0"}`}>
            <StateDetailsCard 
              selectedState={selectedState} 
              stateInfo={stateInfo} 
              stateStats={stateStats} 
              onClose={() => setSelectedState(null)} 
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR ITEMS */}
        <div className="contents xl:flex xl:flex-col xl:col-span-3 xl:mt-20 gap-3 xl:h-full xl:pb-20 xl:overflow-y-auto [&::-webkit-scrollbar]:hidden">
          
          {/* 4. INFO PANEL */}
          <div className="order-4 xl:order-none w-full mt-4 xl:mt-0">
            <InfoPanel data={data} selectedState={null} />
          </div>

          {/* Party Legend */}
          <div className="hidden xl:block xl:order-none w-full">
            <PartyLegend yearData={data} />
          </div>
        </div>

        {/* 5. SNAPSHOT PANEL */}
        <div className="order-5 xl:order-none xl:col-span-3 xl:col-start-1 xl:row-start-1 h-auto xl:h-full pt-2 xl:pt-0 xl:mt-20 w-full">
          <SnapshotPanel year={year} data={snapshotData?.snapshot} mapData={data} />
        </div>

      </div>
    </main>
  );
}