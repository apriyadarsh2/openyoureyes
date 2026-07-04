import {
  TrendingUp,
  TrendingDown,
  Landmark,
  Wallet,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function AssetsInsights({
  profile,
}: Props) {
  if (!profile) return null;

  const elections = [...profile.elections].sort(
    (a, b) => a.election.year - b.election.year
  );

  const first = elections[0];
  const latest = elections[elections.length - 1];

  const totalGrowth =
    (
      ((latest.assets.net_assets_inr -
        first.assets.net_assets_inr) /
        first.assets.net_assets_inr) *
      100
    );

  const debtRatio =
    (
      (latest.assets.total_liabilities_inr /
        latest.assets.total_assets_inr) *
      100
    );

  const movable =
    latest.assets.movable_assets_inr ?? 0;

  const immovable =
    latest.assets.immovable_assets_inr ?? 0;

  const cash =
    latest.assets.cash_inr ?? 0;

  const totalAssets =
    latest.assets.total_assets_inr;

  const immovableShare =
    (immovable / totalAssets) * 100;

  const movableShare =
    (movable / totalAssets) * 100;

  const cashShare =
    (cash / totalAssets) * 100;

  let biggestJump = 0;
  let jumpYear = latest.election.year;

  for (let i = 1; i < elections.length; i++) {
    const prev =
      elections[i - 1].assets.net_assets_inr;

    const curr =
      elections[i].assets.net_assets_inr;

    const growth =
      ((curr - prev) / prev) * 100;

    if (growth > biggestJump) {
      biggestJump = growth;
      jumpYear = elections[i].election.year;
    }
  }

  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold">
          Financial Insights
        </h2>

        <p className="mt-2 text-slate-500">
          Automatically generated from affidavit data.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <InsightCard
          icon={<TrendingUp />}
          color="green"
          title="Overall Wealth Growth"
          value={`${totalGrowth.toFixed(1)}%`}
          description="Increase in declared net assets from first to latest election."
        />

        <InsightCard
          icon={<Landmark />}
          color="red"
          title="Debt Ratio"
          value={`${debtRatio.toFixed(1)}%`}
          description="Liabilities as a percentage of total declared assets."
        />

        <InsightCard
          icon={<Wallet />}
          color="blue"
          title="Largest Wealth Jump"
          value={`${biggestJump.toFixed(1)}%`}
          description={`Highest increase occurred in ${jumpYear}.`}
        />

        <InsightCard
          icon={<TrendingDown />}
          color="amber"
          title="Cash Holdings"
          value={`${cashShare.toFixed(1)}%`}
          description="Share of cash compared to total declared assets."
        />

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <Lightbulb className="text-yellow-500" />

          <h3 className="text-2xl font-bold">
            Observations
          </h3>

        </div>

        <div className="space-y-4">

          <Observation
            text={`Immovable property accounts for ${immovableShare.toFixed(
              1
            )}% of declared assets.`}
          />

          <Observation
            text={`Movable assets represent ${movableShare.toFixed(
              1
            )}% of total wealth.`}
          />

          <Observation
            text={`Cash holdings account for only ${cashShare.toFixed(
              1
            )}% of total declared assets.`}
          />

          <Observation
            text={`Declared wealth increased by ${totalGrowth.toFixed(
              1
            )}% between ${first.election.year} and ${latest.election.year}.`}
          />

          <Observation
            text={`Current liabilities are ${debtRatio.toFixed(
              1
            )}% of total assets, indicating ${
              debtRatio < 10
                ? "relatively low leverage."
                : "significant leverage."
            }`}
          />

        </div>

      </div>

    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "red" | "amber";
}

function InsightCard({
  title,
  value,
  description,
  icon,
  color,
}: CardProps) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    amber: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div
        className={`inline-flex rounded-xl p-3 ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-3 text-sm text-slate-500">
        {description}
      </p>

    </div>
  );
}

function Observation({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">

      <ArrowUpRight
        size={18}
        className="mt-1 text-blue-600"
      />

      <p className="text-slate-700">
        {text}
      </p>

    </div>
  );
}