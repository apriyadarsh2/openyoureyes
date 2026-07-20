"use client";

import { PoliticianElection } from "../../../types/politician";
import ElectionCard from "../cards/ElectionCard";

interface Props {
  election: PoliticianElection;

  isLast: boolean;
}

export default function ElectionTimelineItem({
  election,
  isLast,
}: Props) {

  return (

    <div className="flex gap-6">

      {/* Timeline */}

      <div className="flex w-12 flex-col items-center">

        <div className="h-5 w-5 rounded-full bg-blue-600" />

        {!isLast && (
          <div className="mt-2 w-1 flex-1 rounded bg-slate-300" />
        )}

      </div>

      {/* Card */}

      <div className="flex-1">

        <ElectionCard
          election={election}
        />

      </div>

    </div>

  );
}