"use client";

import { getAllianceProfile } from "../../lib/repositories/elections";

import AllianceHeader from "./AllianceHeader";
import AllianceSummaryCards from "./AllianceSummaryCards";
import AlliancePartyTable from "./AlliancePartyTable";
import AllianceStateTable from "./AllianceStateTable";
import AllianceSeatChart from "./AllianceSeatChart";
import AllianceVoteShare from "./AllianceVoteShare";
import TopStatesChart from "./TopStatesChart";
import AllianceInsights from "./AllianceInsights";

interface Props {
  year: number;
  slug: string;
}

export default function AllianceProfilePage({
  year,
  slug,
}: Props) {
  const profile =
    getAllianceProfile(year, slug);

  if (!profile) {
    return (
      <h2 className="text-2xl font-semibold">
        Alliance not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">
       

      <AllianceHeader
        alliance={profile.alliance}
        summary={profile.summary}
      />

      <AllianceSummaryCards
        summary={profile.summary}
      />
      <div className="grid gap-6 lg:grid-cols-2">

  <AllianceSeatChart
    parties={profile.parties}
  />

  <AllianceVoteShare
    summary={profile.summary}
  />

</div>

<AlliancePartyTable
  parties={profile.parties}
/>
<TopStatesChart
  states={profile.state_breakdown}
/>

<AllianceStateTable
  states={profile.state_breakdown}
/>
<AllianceInsights
  summary={profile.summary}
  parties={profile.parties}
  states={profile.state_breakdown}
/>

    </div>
  );
}