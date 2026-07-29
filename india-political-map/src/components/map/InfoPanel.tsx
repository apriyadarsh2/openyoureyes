"use client";

import { PARTY_COLORS } from "@/data/partyColors";

interface Props {
  data: any;
  selectedState?: string | null; // Optional rakha hai taaki page.tsx se error na aaye
}

export default function InfoPanel({ data }: Props) {
  const nat = data.national;

  return (
    <div className="space-y-3">
      {/* National Govt Hero Card */}
      <div className="bg-[#1F2937] rounded-2xl border border-white/10 p-4 shadow-sm">
        <div className="text-[11px] font-bold text-gray-400 mb-1 uppercase tracking-widest">
          National Govt
        </div>
        <div className="text-xl font-black text-white">{nat.pm}</div>
        
        <div className="flex items-center gap-2 mt-2">
          <span
            className="px-2.5 py-0.5 rounded-md text-white text-xs font-bold shadow-sm"
            style={{ background: PARTY_COLORS[nat.party] || "#999" }}
          >
            {nat.party}
          </span>
          <span className="text-xs font-semibold text-gray-400">{nat.loksabha}</span>
        </div>

        {nat.gdpGrowth !== undefined && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-[#101827] p-2 rounded-lg border border-white/10">
              <div className="text-[10px] font-bold text-gray-400 uppercase">GDP Growth</div>
              <div className={`text-sm font-black ${nat.gdpGrowth >= 0 ? "text-green-400" : "text-red-400"}`}>
                {nat.gdpGrowth > 0 ? "+" : ""}{nat.gdpGrowth}%
              </div>
            </div>
            {nat.population && (
              <div className="bg-[#101827] p-2 rounded-lg border border-white/10">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Population</div>
                <div className="text-sm font-black text-white">~{nat.population}M</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}