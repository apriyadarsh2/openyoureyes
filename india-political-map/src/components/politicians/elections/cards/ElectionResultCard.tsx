"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props { election: PoliticianElection; }

function numberFormat(value: number) {
  return value.toLocaleString("en-IN");
}

export default function ElectionResultCard({ election }: Props) {
  const result = election.result;
  const cards = [
    { title: "Votes", value: numberFormat(result.votes) },
    { title: "Vote Share", value: `${result.votes_pct.toFixed(1)}%` },
    { title: "Winning Margin", value: numberFormat(result.margin) },
    { title: "Poll Turnout", value: `${result.votes_pct.toFixed(1)}%` }, // Assuming fallback
  ];

  return (
    <div className="rounded-xl border border-politic-border bg-politic-card p-4 sm:p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-politic-text border-b border-politic-border pb-2">
        Election Result
      </h3>
      <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-lg border border-politic-border/50 bg-politic-inner p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-politic-muted">
              {card.title}
            </p>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-black text-politic-text tabular-nums">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}