// const legends = [
//   {
//     color: "bg-blue-600",
//     label: "BJP",
//   },
//   {
//     color: "bg-green-600",
//     label: "INC",
//   },
//   {
//     color: "bg-orange-500", 
//     label: "Regional",
//   },
//   {
//     color: "bg-gray-400",
//     label: "Others",
//   }, 
// ];

// export default function MapLegend() {
//   return (
//     <div className="mt-8 flex flex-wrap gap-6">

//       {legends.map((item) => (
//         <div
//           key={item.label}
//           className="flex items-center gap-2"
//         >

//           <span
//             className={`h-4 w-4 rounded-full ${item.color}`}
//           />

//           <span className="text-sm text-slate-600">
//             {item.label}
//           </span>

//         </div>
//       ))}

//     </div>
//   );
// }

"use client";

import { PARTY_COLORS } from "@/data/partyColors";

interface LegendProps {
  yearData: any;
}

export default function MapLegend({ yearData }: LegendProps) {
  if (!yearData || !yearData.states) return null;

  const activeParties = new Set<string>();

  Object.values(yearData.states).forEach((val: any) => {
    if (!val) return;
    const upperStr = val.toUpperCase();
    
    if (upperStr.includes("PART OF")) {
      return; 
    }

    // Administrative mappings
    if (upperStr.includes("PRESIDENT'S RULE") || upperStr.includes("UT ")) {
      activeParties.add("PREZ");
      return;
    }

    // Standard Shorthand Mappings
    if (upperStr.includes("JKNC") || upperStr.includes("NATIONAL CONFERENCE")) { activeParties.add("NC"); return; }
    if (upperStr.includes("AIADMK")) { activeParties.add("ADMK"); return; }
    if (upperStr.includes("CPI-M") || upperStr.includes("CPI(M)")) { activeParties.add("CPM"); return; }
    if (upperStr.includes("CPI")) { activeParties.add("CPI"); return; }

    // Look for matching key tokens from PARTY_COLORS
    Object.keys(PARTY_COLORS).forEach((key) => {
      if (key === "UNKNOWN" || key === "PREZ" || key === "IND") return;
      if (upperStr.includes(key.toUpperCase())) {
        activeParties.add(key);
      }
    });
  });

  // Always append Unknown/Others if there are unmapped elements (and some valid states were parsed)
  const itemsToRender = Array.from(activeParties);
  if (itemsToRender.length === 0) itemsToRender.push("UNKNOWN");

  return (
    <div className="mt-8">
      <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-3">
        Active Parties this Election Year:
      </span>
      
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {itemsToRender.map((partyKey) => {
          const hexColor = PARTY_COLORS[partyKey] || PARTY_COLORS.UNKNOWN;
          
          return (
            <div key={partyKey} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full pl-2 pr-3 py-1 shadow-sm">
              <span 
                className="h-3.5 w-3.5 rounded-full inline-block shrink-0" 
                style={{ backgroundColor: hexColor }}
              />
              <span className="text-xs font-bold text-slate-700">
                {partyKey === "PREZ" ? "President's Rule" : partyKey}
              </span>
            </div>
          );
        })}

        {/* Static Unformed Territory Indicator */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full pl-2 pr-3 py-1 shadow-sm">
          <span className="h-3.5 w-3.5 rounded-full inline-block shrink-0 bg-[#E2E8F0]" />
          <span className="text-xs font-medium text-slate-500 italic">
            Territory Unformed / Part of Parent State
          </span>
        </div>

      </div>
    </div>
  );
}