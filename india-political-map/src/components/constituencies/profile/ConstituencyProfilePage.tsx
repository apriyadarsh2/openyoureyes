"use client";

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

export default function ConstituencyProfilePage({
  id,
}: Props) {
  const profile =
    getConstituencyProfile(id);

  if (!profile) {
    return (
      <h2 className="text-2xl font-semibold">
        Constituency not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      {/* Breadcrumb */}

      <Breadcrumbs
        items={[
          {
            label: "Constituencies",
            href: "/constituencies",
          },
          {
            label: profile.overview.state,
            href: `/constituencies/${profile.overview.state
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
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

      <CurrentMPCard
        mp={profile.current_mp}
      />

      {/* Latest Election */}

      <LatestElectionCard
        election={profile.latest_election}
      />

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