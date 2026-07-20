"use client";

import { PARTY_COLORS, PARTY_FULL_NAMES } from "@/data/partyColors";

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

  const totalStates = Object.keys(yearData.states).length;
  const incCount = partyStateCounts["INC"] || 0;
  const bjpCount = partyStateCounts["BJP"] || 0;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide">
        Party Control
      </h3>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-blue-50 rounded-lg p-2 text-center">
          <div
            className="text-lg font-black"
            style={{ color: PARTY_COLORS["INC"] }}
          >
            {incCount}
          </div>
          <div className="text-xs text-gray-500">INC</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-2 text-center">
          <div
            className="text-lg font-black"
            style={{ color: PARTY_COLORS["BJP"] }}
          >
            {bjpCount}
          </div>
          <div className="text-xs text-gray-500">BJP</div>
        </div>
      </div>

      <div className="space-y-1.5 max-h-96 overflow-y-auto">
        {sorted.map((party) => {
          const count = partyStateCounts[party] || 0;
          const pct = (count / totalStates) * 100;
          return (
            <div key={party} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ background: PARTY_COLORS[party] || "#999" }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-xs font-semibold text-gray-700 truncate">
                    {party}
                  </span>
                  <span className="text-xs text-gray-500 ml-1 flex-shrink-0">
                    {count}
                  </span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      background: PARTY_COLORS[party] || "#999",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="text-xs text-gray-400">
          Showing {sorted.length} parties across {totalStates} states/UTs
        </div>
      </div>
    </div>
  );
}
