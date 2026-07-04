import {
  TrendingUp,
  Wallet,
  Landmark,
  PiggyBank,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function AssetsSummary({
  profile,
}: Props) {
  if (!profile) return null;

  const elections = [...profile.elections].sort(
    (a, b) => a.election.year - b.election.year
  );

  const latest = elections.at(-1)!;
  const first = elections[0];

  const highestAssets = Math.max(
    ...elections.map(
      e => e.assets.net_assets_inr
    )
  );

  const growth =
    (
      ((latest.assets.net_assets_inr -
        first.assets.net_assets_inr) /
        first.assets.net_assets_inr) *
      100
    ).toFixed(1);

  const liabilities =
    latest.assets.total_liabilities_inr;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card
        title="Highest Assets"
        value={`₹${(
          highestAssets /
          10000000
        ).toFixed(2)} Cr`}
        icon={<Wallet />}
        color="blue"
      />

      <Card
        title="Total Growth"
        value={`${growth}%`}
        icon={<TrendingUp />}
        color="green"
      />

      <Card
        title="Liabilities"
        value={`₹${(
          liabilities /
          10000000
        ).toFixed(2)} Cr`}
        icon={<Landmark />}
        color="red"
      />

      <Card
        title="Net Worth"
        value={`₹${(
          latest.assets.net_assets_inr /
          10000000
        ).toFixed(2)} Cr`}
        icon={<PiggyBank />}
        color="amber"
      />

    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color:
    | "blue"
    | "green"
    | "red"
    | "amber";
}

function Card({
  title,
  value,
  icon,
  color,
}: CardProps) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",

    green:
      "bg-green-100 text-green-700",

    red: "bg-red-100 text-red-700",

    amber:
      "bg-amber-100 text-amber-700",
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div
        className={`inline-flex rounded-xl p-3 ${colors[color]}`}
      >
        {icon}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-1 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}