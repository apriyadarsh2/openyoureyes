import {
  ArrowLeftRight,
  TrendingUp,
  BarChart3,
} from "lucide-react";

interface Props {
  summary: {
    average_margin: number;
    closest_margin: number;
    largest_margin: number;
  };
}

export default function MarginSummary({
  summary,
}: Props) {
  const cards = [
    {
      title: "Average Margin",
      value: summary.average_margin.toLocaleString(),
      icon: BarChart3,
    },
    {
      title: "Closest Victory",
      value: summary.closest_margin.toLocaleString(),
      icon: ArrowLeftRight,
    },
    {
      title: "Largest Victory",
      value: summary.largest_margin.toLocaleString(),
      icon: TrendingUp,
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