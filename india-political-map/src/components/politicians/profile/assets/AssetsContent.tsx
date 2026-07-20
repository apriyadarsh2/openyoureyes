"use client";

import { usePolitician } from "@/src/components/politicians/context/PoliticianProvider";

import AssetsSummary from "./AssetsSummary";
import AssetsChart from "./AssetsChart";
import AssetsBreakdown from "./AssetsBreakdown";
import AssetsInsights from "./AssetsInsights";
import AssetsHistory from "./AssetsHistory";

export default function AssetsContent() {
  const { profile } = usePolitician();

  return (
    <div className="space-y-8">
      <AssetsSummary profile={profile} />

      <AssetsChart profile={profile} />

      <AssetsBreakdown profile={profile} />

      <AssetsInsights profile={profile} />

      <AssetsHistory profile={profile} />
    </div>
  );
}