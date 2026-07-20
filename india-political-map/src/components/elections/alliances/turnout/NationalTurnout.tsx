import {
  Users,
  Vote,
  Percent,
} from "lucide-react";

interface Props {
  national: {
    electors: number;
    votes_cast: number;
    turnout_percentage: number;
  };
}

export default function NationalTurnout({
  national,
}: Props) {
  const cards = [
    {
      title: "Registered Electors",
      value: national.electors.toLocaleString(),
      icon: Users,
    },
    {
      title: "Votes Cast",
      value: national.votes_cast.toLocaleString(),
      icon: Vote,
    },
    {
      title: "National Turnout",
      value: `${national.turnout_percentage}%`,
      icon: Percent,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <Icon
              size={28}
              className="mb-4 text-blue-600"
            />

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