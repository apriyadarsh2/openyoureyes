"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

function numberFormat(value: number) {
  return value.toLocaleString("en-IN");
}

export default function ElectionResultCard({
  election,
}: Props) {

  const result = election.result;

  const cards = [
    {
      title: "Votes",
      value: numberFormat(result.votes),
    },
    {
      title: "Vote Share",
      value: `${result.votes_pct}%`,
    },
    {
      title: "Winning Margin",
      value: numberFormat(result.margin),
    },
    {
      title: "Poll Turnout",
      value: `${result.votes_pct}%`,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <h3 className="mb-5 text-lg font-semibold">
        Election Result
      </h3>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (

          <div
            key={card.title}
            className="rounded-xl border border-slate-200 p-5"
          >
            <p className="text-sm text-slate-500">
              {card.title}
            </p>

            <p className="mt-2 text-2xl font-bold">
              {card.value}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
}