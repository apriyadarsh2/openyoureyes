"use client";

import { useState } from "react";
import { usePolitician } from "../context/PoliticianProvider";
import ElectionTimeline from "./timeline/ElectionTimeline";
import ElectionHistoryCard from "./cards/ElectionHistoryCard";

export default function ElectionHistoryPage() {
  const { profile } = usePolitician();

  // Sort descending: Latest year first
  const elections = [...(profile?.elections ?? [])].sort(
    (a, b) => b.election.year - a.election.year
  );

  const [selectedYear, setSelectedYear] = useState(elections[0]?.election.year);

  if (!elections.length) {
    return (
      <div className="rounded-2xl border border-dashed border-politic-border bg-politic-card p-10 text-center text-politic-muted font-medium">
        No election history available.
      </div>
    );
  }

  // Find the currently selected election object
  const selectedIndex = elections.findIndex(e => e.election.year === selectedYear);
  const selectedElection = elections[selectedIndex];
  
  // Previous election is the next one in the descending array
  const previousElection = elections[selectedIndex + 1];

  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* Top Timeline acting as Tabs */}
      <ElectionTimeline
        elections={elections}
        selected={selectedYear}
        onSelect={setSelectedYear}
      />

      {/* Render ONLY the selected election card (No expanded/onToggle props needed anymore) */}
      {selectedElection && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ElectionHistoryCard
            election={selectedElection}
            previousElection={previousElection}
          />
        </div>
      )}

    </div>
  );
}