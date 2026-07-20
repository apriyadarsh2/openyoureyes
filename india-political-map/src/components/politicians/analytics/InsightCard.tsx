"use client";

import {
  TrendingUp,
  Trophy,
  Wallet,
  Scale,
  Landmark,
} from "lucide-react";

import { usePolitician } from "../context/PoliticianProvider";

export default function InsightCard() {

  const { summary, profile } = usePolitician();

  const elections =
    profile?.elections ?? [];

  const mplads =
    profile?.mplads ?? [];

  const firstElection =
    elections[0];

  const latestElection =
    elections[elections.length - 1];

  const assetGrowth =
    firstElection && latestElection
      ? (
          ((latestElection.assets.total_assets_inr -
            firstElection.assets.total_assets_inr) /
            firstElection.assets.total_assets_inr) *
          100
        ).toFixed(0)
      : "0";

  const highestVote =
    elections.length
      ? Math.max(
          ...elections.map(
            e => e.result.votes_pct
          )
        )
      : 0;

  const avgUtilisation =
    mplads.length
      ? (
          mplads.reduce(
            (sum, m) =>
              sum + m.utilisation_pct,
            0
          ) / mplads.length
        ).toFixed(1)
      : "0";

  const insights = [

    {
      title: "Election Performance",

      value:
        `${summary.elections_won}/${summary.elections_contested}`,

      description:
        `Won ${summary.elections_won} of ${summary.elections_contested} elections.`,

      color:
        "bg-blue-50",

      icon:
        Trophy,
    },

    {
      title:
        "Asset Growth",

      value:
        `+${assetGrowth}%`,

      description:
        "Growth in declared assets since first election.",

      color:
        "bg-green-50",

      icon:
        Wallet,
    },

    {
      title:
        "Highest Vote Share",

      value:
        `${highestVote}%`,

      description:
        "Best electoral performance.",

      color:
        "bg-indigo-50",

      icon:
        TrendingUp,
    },

    {
      title:
        "Criminal Cases",

      value:
        summary.criminal_cases_count,

      description:
        `${summary.serious_cases_count} serious cases.`,

      color:
        "bg-red-50",

      icon:
        Scale,
    },

    {
      title:
        "MPLADS",

      value:
        `${avgUtilisation}%`,

      description:
        "Average utilisation of released funds.",

      color:
        "bg-yellow-50",

      icon:
        Landmark,
    },

  ];

  return (

    <div className="space-y-4">

      <h2 className="text-2xl font-bold">

        Key Insights

      </h2>

      <div
        className="
        grid

        grid-cols-1

        md:grid-cols-2

        xl:grid-cols-3

        gap-5
        "
      >

        {insights.map((item) => {

          const Icon =
            item.icon;

          return (

            <div
              key={item.title}
              className={`
                rounded-2xl
                border
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${item.color}
              `}
            >

              <div className="flex items-center justify-between">

                <Icon
                  className="text-slate-700"
                  size={28}
                />

                <span className="text-2xl font-bold">

                  {item.value}

                </span>

              </div>

              <h3 className="mt-5 font-semibold">

                {item.title}

              </h3>

              <p className="mt-2 text-sm text-slate-600">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </div>

  );

}