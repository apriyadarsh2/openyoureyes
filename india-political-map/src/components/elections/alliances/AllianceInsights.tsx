import {
  Lightbulb,
  Trophy,
  MapPinned,
  Vote,
} from "lucide-react";

import {
  AllianceParty,
  AllianceProfileSummary,
  AllianceStateBreakdown,
} from "../../types/election";

interface Props {
  summary: AllianceProfileSummary;
  parties: AllianceParty[];
  states: AllianceStateBreakdown[];
}

export default function AllianceInsights({
  summary,
  parties,
  states,
}: Props) {

  const biggestParty =
    [...parties].sort(
      (a, b) => b.won - a.won
    )[0];

  const bestState =
    [...states].sort(
      (a, b) => b.won - a.won
    )[0];

  const strikeRate =
    bestState.contested
      ? (
          (bestState.won /
            bestState.contested) *
          100
        ).toFixed(1)
      : "-";

  const contribution =
    (
      (biggestParty.won /
        summary.total_won) *
      100
    ).toFixed(1);

  const insights = [
    {
      icon: Trophy,
      title: "Largest Contributor",
      value: `${biggestParty.party} contributed ${contribution}% of alliance seats.`,
    },
    {
      icon: MapPinned,
      title: "Strongest State",
      value: `${bestState.state} delivered ${bestState.won} seats with a ${strikeRate}% strike rate.`,
    },
    {
      icon: Vote,
      title: "Vote Share",
      value: `The alliance secured ${summary.vote_percentage}% of the national vote.`,
    },
    {
      icon: Lightbulb,
      title: "Overall Performance",
      value: `The alliance won ${summary.total_won} out of ${summary.total_contested} contested seats.`,
    },
  ];

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Key Insights
      </h2>

      <p className="mt-1 text-slate-500">
        Automatically generated from alliance data
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {insights.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-xl border bg-slate-50 p-5"
            >

              <div className="mb-4 flex items-center gap-3">

                <Icon
                  size={22}
                  className="text-blue-600"
                />

                <h3 className="font-semibold">
                  {item.title}
                </h3>

              </div>

              <p className="text-slate-600">
                {item.value}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}