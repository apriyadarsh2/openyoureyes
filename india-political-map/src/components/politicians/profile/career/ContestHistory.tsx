"use client";

import { PoliticianProfile } from "@/src/components/types/politician";
import { PARTY_COLORS } from "@/data/partyColors"; // Tumhari actual file ka path

interface Props {
  profile?: PoliticianProfile;
}

export default function ContestHistory({ profile }: Props) {
  if (!profile || !profile.elections) return null;

  const elections = [...profile.elections].sort(
    (a, b) => b.election.year - a.election.year
  );

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card shadow-sm w-full overflow-hidden">
      
      {/* Header Section */}
      <div className="p-4 sm:p-6 border-b border-politic-border">
        <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
          Contest History
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm font-medium text-politic-muted">
          Every election contested throughout the political career.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full text-left">
          
          {/* Table Head */}
          <thead className="bg-politic-inner border-b border-politic-border">
            <tr>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Year
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Election
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Constituency
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Party
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Position
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap">
                Vote Share
              </th>
              <th className="px-4 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted whitespace-nowrap text-right">
                Margin
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-politic-border">
            {elections.map((election) => {
              const partyAbbr = election.party.abbreviation;
              const partyColor = PARTY_COLORS[partyAbbr] || "#9ca3af";
              const isWinner = election.result.winner;
              const margin = election.result.margin;

              return (
                <tr
                  key={election.candidacy_id}
                  className="group transition-colors hover:bg-white/5"
                >
                  <td className="px-4 py-4 text-xs sm:text-sm font-bold text-politic-text whitespace-nowrap">
                    {election.election.year}
                  </td>
                  
                  <td className="px-4 py-4 text-xs sm:text-sm font-medium text-politic-muted whitespace-nowrap">
                    {election.election.house}
                  </td>
                  
                  <td className="px-4 py-4 text-xs sm:text-sm font-bold text-politic-text whitespace-nowrap">
                    {election.constituency.name_en}
                  </td>

                  <td className="px-4 py-4 text-xs sm:text-sm whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full shadow-sm"
                        style={{ backgroundColor: partyColor }}
                      />
                      <span className="font-bold text-politic-text">
                        {partyAbbr}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap">
                    {isWinner ? (
                      <span className="inline-flex rounded-lg border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-green-400">
                        Won
                      </span>
                    ) : (
                      <span className="inline-flex rounded-lg border border-politic-border bg-politic-inner px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted">
                        {election.result.position_display || `#${election.result.rank}`}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* Vote Share Progress Bar using Party Color */}
                      <div className="h-1.5 w-16 sm:w-24 overflow-hidden rounded-full bg-politic-base border border-politic-border">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${election.result.votes_pct}%`,
                            backgroundColor: partyColor,
                          }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-politic-text">
                        {election.result.votes_pct}%
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-xs sm:text-sm font-bold text-politic-text whitespace-nowrap text-right">
                    {margin ? margin.toLocaleString("en-IN") : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}