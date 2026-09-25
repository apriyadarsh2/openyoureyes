import { getConstituencyProfile } from "../../lib/repositories/constituencies";

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";

import ConstituencyHeader from "./ConstituencyHeader";
import CurrentMPCard from "./CurrentMPCard";
import LatestElectionCard from "./LatestElectionCard";
import ElectionTimeline from "./ElectionTimeline";
import AssemblyConstituencies from "./AssemblyConstituencies";
import PreviousMPs from "./PreviousMPs";
import InsightCard from "./InsightCard";

interface Props {
  id: number;
}

export default async function ConstituencyProfilePage({
  id,
}: Props) {
  const profile = await getConstituencyProfile(id);

  if (!profile) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-politic-border bg-politic-card">
        <h2 className="text-2xl font-semibold text-politic-text">
          Constituency not found.
        </h2>
      </div>
    );
  }

  const stateSlug = profile.overview.state
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  return (
    <div className="space-y-10">

      {/* Breadcrumb */}
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Constituencies",
            href: "/constituencies",
          },
          {
            label: profile.overview.state,
            href: `/constituencies/${stateSlug}`,
          },
          {
            label: profile.overview.name_en,
          },
        ]}
      />

      {/* Hero */}
      <ConstituencyHeader
        overview={profile.overview}
      />

      {/* Current MP */}
      {profile.current_mp && (
        <CurrentMPCard
          mp={profile.current_mp}
        />
      )}

      {/* Latest Election */}
      {profile.latest_election && (
        <LatestElectionCard
          election={profile.latest_election}
        />
      )}

      {/* Timeline */}
      <ElectionTimeline
        elections={profile.elections}
      />

      {/* Assembly Constituencies */}
      <AssemblyConstituencies
        assembly={profile.assembly_constituencies}
      />

      {/* Previous MPs */}
      <PreviousMPs
        mps={profile.previous_mps}
      />

      {/* Insights */}
      <InsightCard
        insights={profile.insights}
      />

    </div>
  );
}