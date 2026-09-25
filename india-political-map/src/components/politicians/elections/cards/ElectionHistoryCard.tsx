"use client";

import { PoliticianElection } from "@/src/components/types/politician";
import ElectionResultCard from "./ElectionResultCard";
import ElectionHeader from "./ElectionHeader";
import ElectionAssetsCard from "./ElectionAssetsCard";
import ElectionCrimeCard from "./ElectionCrimeCard";
import ElectionComparisonCard from "./ElectionComparisonCard";

interface Props {
  election: PoliticianElection;
  previousElection?: PoliticianElection;
}

export default function ElectionHistoryCard({
  election,
  previousElection,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-lg">
      
      {/* Header Section */}
      <div className="border-b border-politic-border bg-politic-inner/30 p-5 sm:p-6">
        <ElectionHeader election={election} />
      </div>

      {/* Content Section */}
      <div className="space-y-5 sm:space-y-6 p-5 sm:p-6 bg-politic-base/50">
        <ElectionResultCard election={election} />
        
        <ElectionAssetsCard election={election} />
        
        <ElectionCrimeCard election={election} />
        
        <ElectionComparisonCard
          current={election}
          previous={previousElection}
        />
      </div>

    </div>
  );
}