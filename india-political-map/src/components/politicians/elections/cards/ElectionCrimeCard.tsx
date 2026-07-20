"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

export default function ElectionCrimeCard({
  election,
}: Props) {
  const cards = [
    {
      title: "Criminal Cases",
      value: election.criminal_cases_count,
    },
    {
      title: "Serious Cases",
      value: election.serious_cases_count,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <h3 className="mb-5 text-lg font-semibold">
        Criminal Record
      </h3>

      <div className="grid gap-4 md:grid-cols-2">

        {cards.map((item) => (

          <div
            key={item.title}
            className="rounded-xl border border-slate-200 p-5"
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <p
              className={`mt-2 text-3xl font-bold ${
                item.value === 0
                  ? "text-green-600"
                  : item.value <= 2
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {item.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}