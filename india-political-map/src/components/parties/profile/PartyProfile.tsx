"use client";

import { getPartyProfile } from "../../lib/repositories/parties";

import PartyHeader from "./PartyHeader";
import PartyOverview from "./PartyOverview";

import PartyPerformanceChart from "./PartyPerformanceChart";
import PartyElectionTable from "./PartyElectionTable";
import PartyNavigation from "./PartyNavigation";

interface Props {
  slug: string;
}

export default function PartyProfile({
  slug,
}: Props) {

  const party = getPartyProfile(slug);

  if (!party) {
    return (
      <h2 className="text-2xl font-semibold">
        Party not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      <PartyHeader
        party={party}
      />

      <PartyOverview
        party={party}
      />

      <PartyPerformanceChart
        data={party.electoral_performance}
      />

      <PartyElectionTable
        data={party.electoral_performance}
      />

      <PartyNavigation
        slug={slug}
      />

    </div>
  );
}