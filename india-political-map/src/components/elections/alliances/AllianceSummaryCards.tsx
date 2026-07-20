import {
  Trophy,
  Vote,
  Flag,
  Building2,
} from "lucide-react";

import { AllianceProfileSummary } from "../../types/election";

interface Props {
  summary: AllianceProfileSummary;
}

export default function AllianceSummaryCards({
  summary,
}: Props) {

  const cards = [
    {
      title: "Seats Won",
      value: summary.total_won,
      icon: Trophy,
    },
    {
      title: "Seats Contested",
      value: summary.total_contested,
      icon: Flag,
    },
    {
      title: "Vote Share",
      value: `${summary.vote_percentage}%`,
      icon: Vote,
    },
    {
      title: "Major Party",
      value: summary.major_party,
      icon: Building2,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <div className="mb-4 flex items-center justify-between">

              <Icon
                size={28}
                className="text-blue-600"
              />

            </div>

            <p className="text-sm text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {card.value}
            </h2>

          </div>

        );

      })}

    </div>
  );
}