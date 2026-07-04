import {
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function Strengths({
  profile,
}: Props) {
  if (!profile) return null;

  const wins =
    profile.elections.filter(
      e => e.result.winner
    ).length;

  const utilisation =
    profile.mplads.reduce(
      (sum, item) =>
        sum + item.utilisation_pct,
      0
    ) / profile.mplads.length;

  const latest =
    profile.elections.at(-1)!;

  const first =
    profile.elections[0];

  const growth =
    (
      ((latest.assets.net_assets_inr -
        first.assets.net_assets_inr) /
        first.assets.net_assets_inr) *
      100
    ).toFixed(0);

  const strengths = [
    `Won ${wins} election(s).`,
    `Declared wealth increased by ${growth}%.`,
    `Average MPLADS utilisation ${utilisation.toFixed(
      1
    )}%.`,
    "Consistent electoral participation.",
  ];

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <TrendingUp className="text-green-600" />

        <h2 className="text-2xl font-bold">
          Key Strengths
        </h2>

      </div>

      <div className="space-y-4">

        {strengths.map(item => (

          <div
            key={item}
            className="flex items-start gap-3 rounded-xl bg-green-50 p-4"
          >

            <CheckCircle2 className="mt-1 text-green-600" />

            <p>{item}</p>

          </div>

        ))}

      </div>

    </div>
  );
}