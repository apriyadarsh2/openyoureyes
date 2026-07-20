"use client";

import {
  PoliticianElection,
} from "@/src/components/types/politician";

import ElectionHeader from "./ElectionHeader";

interface Props {
  election: PoliticianElection;
  previousElection?: PoliticianElection;
}

export default function ElectionCard({
  election,
  previousElection,
}: Props) {
  return (
    <div className="space-y-6">

      <ElectionHeader election={election} />

      {/* Election Result Card */}

      {/* Assets Card */}

      {/* Criminal Cases Card */}

      {/* Comparison Card */}

    </div>
  );
}