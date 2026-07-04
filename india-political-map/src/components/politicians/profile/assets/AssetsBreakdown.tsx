import {
  Building2,
  Wallet,
  Landmark,
  Banknote,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function AssetsBreakdown({
  profile,
}: Props) {
  if (!profile) return null;

  const latest =
    [...profile.elections].sort(
      (a, b) => b.election.year - a.election.year
    )[0];

  const assets = latest.assets;

  const total = assets.total_assets_inr;

  const movable =
    assets.movable_assets_inr ?? 0;

  const immovable =
    assets.immovable_assets_inr ?? 0;

  const cash =
    assets.cash_inr ?? 0;

  const liabilities =
    assets.total_liabilities_inr;

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Assets Breakdown
        </h2>

        <p className="mt-2 text-slate-500">
          Latest declared financial disclosure.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <AssetCard
          title="Movable Assets"
          icon={<Wallet size={22} />}
          value={movable}
          total={total}
          color="blue"
        />

        <AssetCard
          title="Immovable Assets"
          icon={<Building2 size={22} />}
          value={immovable}
          total={total}
          color="green"
        />

        <AssetCard
          title="Cash in Hand"
          icon={<Banknote size={22} />}
          value={cash}
          total={total}
          color="amber"
        />

        <AssetCard
          title="Liabilities"
          icon={<Landmark size={22} />}
          value={liabilities}
          total={total}
          color="red"
        />

      </div>

    </div>
  );
}

interface CardProps {
  title: string;
  value: number;
  total: number;
  icon: React.ReactNode;
  color:
    | "blue"
    | "green"
    | "amber"
    | "red";
}

function AssetCard({
  title,
  value,
  total,
  icon,
  color,
}: CardProps) {
  const percent =
    total > 0
      ? (value / total) * 100
      : 0;

  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      bar: "bg-blue-600",
    },

    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      bar: "bg-green-600",
    },

    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      bar: "bg-amber-500",
    },

    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      bar: "bg-red-600",
    },
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center gap-4">

        <div
          className={`rounded-xl p-3 ${colors[color].bg} ${colors[color].text}`}
        >
          {icon}
        </div>

        <div>

          <h3 className="font-semibold text-slate-800">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            ₹
            {(value / 10000000).toFixed(2)} Cr
          </p>

        </div>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">
            Share
          </span>

          <span className="font-semibold">
            {percent.toFixed(1)}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className={`${colors[color].bar} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${Math.min(
                percent,
                100
              )}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}