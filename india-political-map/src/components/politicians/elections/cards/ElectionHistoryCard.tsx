"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import {
  PoliticianElection,
} from "@/src/components/types/politician";
import ElectionResultCard from "./ElectionResultCard";
import ElectionHeader from "./ElectionHeader";
import ElectionAssetsCard from "./ElectionAssetsCard";
import ElectionCrimeCard from "./ElectionCrimeCard";
import ElectionComparisonCard from "./ElectionComparisonCard";

interface Props {
  election: PoliticianElection;

  previousElection?: PoliticianElection;

  expanded: boolean;

  onToggle: () => void;
}

export default function ElectionHistoryCard({
  election,
  previousElection,
  expanded,
  onToggle,
}: Props) {

  return (

    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="p-6">

        <ElectionHeader
          election={election}
        />

        <button
          onClick={onToggle}
          className="mt-5 flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >

          {expanded ? (
            <>
              <ChevronUp size={18} />
              Collapse Details
            </>
          ) : (
            <>
              <ChevronDown size={18} />
              Expand Details
            </>
          )}

        </button>

      </div>

      {expanded && (

        <div className="border-t bg-slate-50 p-6">

          <ElectionResultCard
    election={election}
/>

          <div className="mt-5">
    <ElectionAssetsCard
        election={election}
    />
</div>

          <div className="mt-5">
    <ElectionCrimeCard
        election={election}
    />
</div>

         <div className="mt-5">

  <ElectionComparisonCard
    current={election}
    previous={previousElection}
  />

</div>

        </div>

      )}

    </div>

  );
}