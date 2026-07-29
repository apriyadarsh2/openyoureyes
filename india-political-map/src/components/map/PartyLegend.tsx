"use client";

import { PARTY_COLORS } from "@/data/partyColors";

interface Props {
  yearData: {
    states: Record<string, { party: string; cm: string }>;
  };
}

export default function PartyLegend({ yearData }: Props) {
  const partyStateCounts: Record<string, number> = {};

  Object.values(yearData.states).forEach((s) => {
    if (s.party !== "UNKNOWN") {
      partyStateCounts[s.party] = (partyStateCounts[s.party] || 0) + 1;
    }
  });

  const sorted = Object.keys(partyStateCounts).sort(
    (a, b) => (partyStateCounts[b] || 0) - (partyStateCounts[a] || 0)
  );

  const totalStates = sorted.reduce((acc, party) => acc + partyStateCounts[party], 0);

  let currentPct = 0;
  const gradientStops = sorted
    .map((party) => {
      const count = partyStateCounts[party];
      const pct = (count / totalStates) * 100;
      const color = PARTY_COLORS[party] || "#999";
      const start = currentPct;
      const end = currentPct + pct;
      currentPct = end;
      return `${color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="bg-[#1F2937] rounded-2xl border border-white/10 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          State Control Overview
        </h3>
        <span className="text-[10px] font-semibold text-gray-400 bg-[#101827] px-2 py-0.5 rounded border border-white/10">
          {totalStates} States / UTs
        </span>
      </div>

      {totalStates > 0 ? (
        <div className="flex items-center gap-4">
          {/* Enhanced Donut/Pie Chart */}
          <div className="relative flex-shrink-0">
            <div
              className="w-18 h-18 rounded-full shadow-inner border-2 border-white/10"
              style={{
                background: `conic-gradient(${gradientStops})`,
              }}
            />
            {/* Center inner circle updated to match the new card background */}
            <div className="absolute inset-2 bg-[#1F2937] rounded-full flex items-center justify-center">
              <span className="text-[10px] font-black text-white">{sorted.length}</span>
            </div>
          </div>

          {/* Party List with Percentage & Counts */}
          <div className="flex-1 max-h-28 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-2">
              {sorted.map((party) => {
                const count = partyStateCounts[party];
                const percentage = ((count / totalStates) * 100).toFixed(0);
                return (
                  <div key={party} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm"
                        style={{ background: PARTY_COLORS[party] || "#999" }}
                      />
                      <span className="font-bold text-white truncate">
                        {party}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] text-gray-400 font-medium">{percentage}%</span>
                      <span className="text-[10px] font-black text-white bg-[#101827] px-1.5 py-0.5 rounded border border-white/10">
                        {count}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xs text-gray-400 text-center py-3 font-medium">
          No party data available
        </div>
      )}
    </div>
  );
}