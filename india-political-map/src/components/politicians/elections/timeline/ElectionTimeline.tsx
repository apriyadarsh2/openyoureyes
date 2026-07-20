"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  elections: PoliticianElection[];

  selected: number;

  onSelect: (index: number) => void;
}

export default function ElectionTimeline({
  elections,
  selected,
  onSelect,
}: Props) {

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        {elections.map((election, index) => (

          <div
            key={election.candidacy_id}
            className="flex flex-1 items-center"
          >

            <button
              onClick={() => onSelect(election.election.year)}
              className="flex flex-col items-center"
            >

              <div
                className={`h-6 w-6 rounded-full border-4 transition-all

                ${
                  selected === election.election.year
                    ? "scale-125 border-blue-600 bg-blue-600"
                    : "border-slate-400 bg-white"
                }`}
              />

              <span className="mt-2 text-sm font-semibold">

                {election.election.year}

              </span>

            </button>

            {index !== elections.length - 1 && (

              <div className="mx-3 h-1 flex-1 rounded bg-slate-300" />

            )}

          </div>

        ))}

      </div>

    </div>
  );
}