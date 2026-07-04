import {
  TrendingUp,
  Trophy,
  Wallet,
  Scale,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function CareerSummary({
  profile,
}: Props) {
  if (!profile) return null;

  const elections = profile.elections;

  const wins = elections.filter(
    election => election.result.winner
  ).length;

  const latest =
    elections[elections.length - 1];

  const first =
    elections[0];

  const growth =
    latest.assets.net_assets_inr -
    first.assets.net_assets_inr;

  const growthPercent =
    (
      (growth /
        first.assets.net_assets_inr) *
      100
    ).toFixed(0);

  const averageVote =
    (
      elections.reduce(
        (sum, election) =>
          sum +
          election.result.votes_pct,
        0
      ) / elections.length
    ).toFixed(1);

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Career Summary
        </h2>

        <p className="mt-2 text-slate-500">
          AI-generated insights based on election
          history and affidavit records.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <Insight
          icon={<TrendingUp size={20} />}
          title="Assets Growth"
          text={`Net assets increased by ${growthPercent}% since the first recorded election.`}
        />

        <Insight
          icon={<Trophy size={20} />}
          title="Winning Performance"
          text={`Won ${wins} of ${elections.length} elections.`}
        />

        <Insight
          icon={<Wallet size={20} />}
          title="Latest Assets"
          text={`Current declared net assets are ₹${(
            latest.assets.net_assets_inr /
            10000000
          ).toFixed(2)} Cr.`}
        />

        <Insight
          icon={<Scale size={20} />}
          title="Average Vote Share"
          text={`${averageVote}% average vote share across all elections.`}
        />

      </div>

    </div>
  );
}

interface InsightProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Insight({
  icon,
  title,
  text,
}: InsightProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-2 text-blue-600">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>

    </div>
  );
}