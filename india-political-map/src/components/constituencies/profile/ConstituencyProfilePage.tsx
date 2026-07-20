"use client";

import { getConstituencyProfile } from "../../lib/repositories/constituencies";

import ConstituencyHeader from "./ConstituencyHeader";
import ConstituencyKPIs from "./ConstituencyKPIs";
import CurrentMPCard from "./CurrentMPCard";
import AssemblyConstituencies from "./AssemblyConstituencies";
import LatestElectionCard from "./LatestElectionCard";
import ElectionTimeline from "./ElectionTimeline";
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
 
      <ConstituencyHeader
        overview={profile.overview}
      />
 
      <CurrentMPCard
        mp={profile.current_mp}
      />

      <ConstituencyKPIs
  overview={profile.overview}
  currentMP={profile.current_mp.name}
/>

      <AssemblyConstituencies
        assembly={profile.assembly_constituencies}
      />

      <LatestElectionCard
        election={profile.latest_election}
      />

      <ElectionTimeline
        elections={profile.elections}
      />

      <PreviousMPs
        mps={profile.previous_mps}
      />

      <InsightCard
        insights={profile.insights}
      /> 

    </div>
  );
}