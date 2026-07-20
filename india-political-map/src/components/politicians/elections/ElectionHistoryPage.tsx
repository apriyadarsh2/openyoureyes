"use client";

import { useState } from "react";

import { usePolitician } from "../context/PoliticianProvider";

import ElectionTimeline from "./timeline/ElectionTimeline";
import ElectionHistoryCard from "./cards/ElectionHistoryCard";

export default function ElectionHistoryPage() {
  const { profile } = usePolitician();

  const elections =
    [...(profile?.elections ?? [])].sort(
      (a, b) =>
        b.election.year - a.election.year
    );

  const [expandedYear, setExpandedYear] =
    useState(elections[0]?.election.year);

  if (!elections.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        No election history available.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ElectionTimeline
        elections={elections}
        selected={expandedYear}
        onSelect={setExpandedYear}
      />

      <div className="space-y-6">

        {elections.map((election, index) => (

          <ElectionHistoryCard
            key={election.candidacy_id}
            election={election}
            previousElection={elections[index + 1]}
            expanded={
              expandedYear ===
              election.election.year
            }
            onToggle={() =>
              setExpandedYear(
                expandedYear ===
                  election.election.year
                  ? -1
                  : election.election.year
              )
            }
          />

        ))}

      </div>

    </div>
  );
}