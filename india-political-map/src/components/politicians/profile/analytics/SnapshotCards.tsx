import {
  Wallet,
  Trophy,
  Scale,
  Landmark,
  Calendar,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function SnapshotCards({
  profile,
}: Props) {
  if (!profile) return null;

  const latest =
    profile.elections.at(-1)!;

  const wins =
    profile.elections.filter(
      e => e.result.winner
    ).length;

  const avgUtilisation =
    profile.mplads.reduce(
      (sum, item) =>
        sum + item.utilisation_pct,
      0
    ) / profile.mplads.length;

  const career =
    latest.election.year -
    profile.elections[0].election.year;

  const cards = [
    {
      title: "Net Worth",
      value: `₹${(
        latest.assets.net_assets_inr /
        10000000
      ).toFixed(2)} Cr`,
      icon: Wallet,
    },
    {
      title: "Election Wins",
      value: wins,
      icon: Trophy,
    },
    {
      title: "Career",
      value: `${career} Years`,
      icon: Calendar,
    },
    {
      title: "Cases",
      value: latest.criminal_cases_count,
      icon: Scale,
    },
    {
      title: "MPLADS",
      value: `${avgUtilisation.toFixed(
        1
      )}%`,
      icon: Landmark,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

      {cards.map(card => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <Icon className="mb-5 text-blue-600" />

            <p className="text-sm text-slate-500">
              {card.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {card.value}
            </h3>

          </div>
        );

      })}

    </div>
  );
}