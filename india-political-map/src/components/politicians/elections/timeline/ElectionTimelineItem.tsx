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
    <div className="overflow-x-auto rounded-2xl border border-politic-border bg-politic-card p-6 sm:p-8 shadow-sm [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-center justify-between">
        
        {elections.map((election, index) => {
          const isSelected = selected === election.election.year;

          return (
            <div
              key={election.candidacy_id}
              className="flex flex-1 items-center"
            >
              <button
                onClick={() => onSelect(election.election.year)}
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
              >
                {/* Node Dot */}
                <div
                  className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border-[3px] sm:border-4 transition-all duration-300
                  ${
                    isSelected
                      ? "scale-110 border-politic-base bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      : "border-politic-inner bg-politic-muted group-hover:bg-blue-400 group-hover:border-politic-base"
                  }`}
                />
                
                {/* Year Label */}
                <span
                  className={`text-xs sm:text-sm font-black tracking-wider transition-colors duration-300
                  ${isSelected ? "text-politic-text" : "text-politic-muted group-hover:text-white"}`}
                >
                  {election.election.year}
                </span>
              </button>

              {/* Connecting Line (Don't render after the last item) */}
              {index !== elections.length - 1 && (
                <div className="mx-2 sm:mx-4 h-0.5 sm:h-1 w-12 sm:w-24 rounded-full bg-politic-inner/50" />
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}