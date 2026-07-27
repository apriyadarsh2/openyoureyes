// "use client";

// import { PARTY_COLORS, PARTY_FULL_NAMES } from "@/data/partyColors";

// interface Props {
//   yearData: {
//     states: Record<string, { party: string; cm: string }>;
//   };
// }

// export default function PartyLegend({ yearData }: Props) {
//   const partyStateCounts: Record<string, number> = {};

//   Object.values(yearData.states).forEach((s) => {
//     if (s.party !== "UNKNOWN") {
//       partyStateCounts[s.party] = (partyStateCounts[s.party] || 0) + 1;
//     }
//   });

//   const sorted = Object.keys(partyStateCounts).sort(
//     (a, b) => (partyStateCounts[b] || 0) - (partyStateCounts[a] || 0)
//   );

//   const totalStates = Object.keys(yearData.states).length;
//   const incCount = partyStateCounts["INC"] || 0;
//   const bjpCount = partyStateCounts["BJP"] || 0;

//   return (
//     <div className="bg-white rounded-xl shadow p-4">
//       <h3 className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide">
//         Party Control
//       </h3>

//       {/* Quick stats */}
//       <div className="grid grid-cols-2 gap-2 mb-3">
//         <div className="bg-blue-50 rounded-lg p-2 text-center">
//           <div
//             className="text-lg font-black"
//             style={{ color: PARTY_COLORS["INC"] }}
//           >
//             {incCount}
//           </div>
//           <div className="text-xs text-gray-500">INC</div>
//         </div>
//         <div className="bg-orange-50 rounded-lg p-2 text-center">
//           <div
//             className="text-lg font-black"
//             style={{ color: PARTY_COLORS["BJP"] }}
//           >
//             {bjpCount}
//           </div>
//           <div className="text-xs text-gray-500">BJP</div>
//         </div>
//       </div>

//       <div className="space-y-1.5 max-h-96 overflow-y-auto">
//         {sorted.map((party) => {
//           const count = partyStateCounts[party] || 0;
//           const pct = (count / totalStates) * 100;
//           return (
//             <div key={party} className="flex items-center gap-2">
//               <div
//                 className="w-3 h-3 rounded-sm flex-shrink-0"
//                 style={{ background: PARTY_COLORS[party] || "#999" }}
//               />
//               <div className="flex-1 min-w-0">
//                 <div className="flex justify-between items-center mb-0.5">
//                   <span className="text-xs font-semibold text-gray-700 truncate">
//                     {party}
//                   </span>
//                   <span className="text-xs text-gray-500 ml-1 flex-shrink-0">
//                     {count}
//                   </span>
//                 </div>
//                 <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
//                   <div
//                     className="h-full rounded-full transition-all duration-500"
//                     style={{
//                       width: `${pct}%`,
//                       background: PARTY_COLORS[party] || "#999",
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-3 pt-3 border-t border-gray-100">
//         <div className="text-xs text-gray-400">
//           Showing {sorted.length} parties across {totalStates} states/UTs
//         </div>
//       </div>
//     </div>
//   );
// }


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
    <div className="bg-[#1d243c] rounded-2xl border border-[#2d3654] p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">
          State Control Overview
        </h3>
        <span className="text-[10px] font-semibold text-[#94A3B8] bg-[#14192b] px-2 py-0.5 rounded border border-[#2d3654]">
          {totalStates} States / UTs
        </span>
      </div>

      {totalStates > 0 ? (
        <div className="flex items-center gap-4">
          {/* Enhanced Donut/Pie Chart */}
          <div className="relative flex-shrink-0">
            <div
              className="w-18 h-18 rounded-full shadow-inner border-2 border-[#2d3654]"
              style={{
                background: `conic-gradient(${gradientStops})`,
              }}
            />
            {/* Center inner circle for modern donut chart look */}
            <div className="absolute inset-2 bg-[#1d243c] rounded-full flex items-center justify-center">
              <span className="text-[10px] font-black text-[#F2F1EC]">{sorted.length}</span>
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
                      <span className="font-bold text-[#F2F1EC] truncate">
                        {party}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] text-[#94A3B8] font-medium">{percentage}%</span>
                      <span className="text-[10px] font-black text-[#F2F1EC] bg-[#14192b] px-1.5 py-0.5 rounded border border-[#2d3654]">
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
        <div className="text-xs text-[#94A3B8] text-center py-3 font-medium">
          No party data available
        </div>
      )}
    </div>
  );
}