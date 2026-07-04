import {
  Sparkles,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function ExecutiveSummary({
  profile,
}: Props) {
  if (!profile) return null;

  const elections =
    profile.elections;

  const first =
    elections[0];

  const latest =
    elections.at(-1)!;

  const growth =
    (
      ((latest.assets.net_assets_inr -
        first.assets.net_assets_inr) /
        first.assets.net_assets_inr) *
      100
    ).toFixed(0);

  const wins =
    elections.filter(
      e => e.result.winner
    ).length;

  const utilisation =
    (
      profile.mplads.reduce(
        (sum, item) =>
          sum + item.utilisation_pct,
        0
      ) /
      profile.mplads.length
    ).toFixed(1);

  return (
    <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Sparkles className="text-blue-600" />

        <h2 className="text-2xl font-bold">
          Executive Summary
        </h2>

      </div>

      <p className="leading-8 text-slate-700">

        This politician has won{" "}
        <strong>{wins}</strong>{" "}
        election(s) and increased declared
        net assets by{" "}
        <strong>{growth}%</strong>{" "}
        during the observed election
        period. Average MPLADS fund
        utilisation stands at{" "}
        <strong>{utilisation}%</strong>,
        indicating effective utilisation
        of constituency development
        funds. The latest affidavit reports{" "}
        <strong>
          {latest.criminal_cases_count}
        </strong>{" "}
        pending criminal case(s), including{" "}
        <strong>
          {latest.serious_cases_count}
        </strong>{" "}
        serious case(s). Overall, the
        profile demonstrates strong
        electoral consistency, substantial
        financial growth, and high public
        fund utilisation, while legal
        matters remain an area requiring
        continued public scrutiny.

      </p>

    </div>
  );
}