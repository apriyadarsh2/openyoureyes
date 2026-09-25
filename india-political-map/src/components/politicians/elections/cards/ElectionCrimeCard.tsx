"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props { election: PoliticianElection; }

export default function ElectionCrimeCard({ election }: Props) {
  const cards = [
    { title: "Criminal Cases", value: election.criminal_cases_count },
    { title: "Serious Cases", value: election.serious_cases_count },
  ];

  return (
    <div className="rounded-xl border border-politic-border bg-politic-card p-4 sm:p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-politic-text border-b border-politic-border pb-2">
        Criminal Record
      </h3>
      <div className="grid gap-3 sm:gap-4 grid-cols-2">
        {cards.map((item) => (
          <div key={item.title} className="rounded-lg border border-politic-border/50 bg-politic-inner p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-politic-muted">
              {item.title}
            </p>
            <p className={`mt-1 sm:mt-2 text-xl sm:text-2xl font-black tabular-nums ${
              item.value === 0 ? "text-green-400" : item.value <= 2 ? "text-amber-400" : "text-red-400"
            }`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}