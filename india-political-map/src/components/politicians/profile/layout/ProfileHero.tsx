import {
  Wallet,
  Scale,
  Trophy,
  Vote,
  MapPin,
  Landmark,
} from "lucide-react";
import ProfileInfoCards from "./ProfileInfoCards";
import CareerSummary from "../career/CareerSummary";

import KPICard from "../kpi/KPICard";

import {
  Politician,
  PoliticianProfile,
} from "@/src/components/types/politician";

interface Props {
  summary: Politician;
  profile?: PoliticianProfile;
}

export default function ProfileHero({
  summary,
  profile,
}: Props) {
  const elections = profile?.elections ?? [];

  const wins = elections.filter(
    election => election.result.winner
  ).length;

  return (
    <div className="space-y-8">

      {/* Hero Header */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

          {/* Avatar */}

          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 text-5xl font-bold backdrop-blur">

            {summary.name_en
              .split(" ")
              .map(word => word[0])
              .join("")
              .slice(0, 2)}

          </div>

          {/* Info */}

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {summary.name_en}
            </h1>

            {profile?.name_hi && (
              <p className="mt-2 text-lg text-blue-100">
                {profile.name_hi}
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                {summary.latest_party.abbreviation}
              </span>

              <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">

                <MapPin size={16} />

                {summary.latest_constituency.name_en},{" "}
                {summary.latest_constituency.state}

              </span>

              <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">

                <Landmark size={16} />

                {summary.latest_election_year}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* KPI Cards */}

      {/* <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <KPICard
          icon={<Wallet size={24} />}
          label="Net Assets"
          value={`₹${(
            summary.net_assets_inr / 10000000
          ).toFixed(2)} Cr`}
        />

        <KPICard
          icon={<Scale size={24} />}
          label="Criminal Cases"
          value={summary.criminal_cases_count}
        />

        <KPICard
          icon={<Trophy size={24} />}
          label="Elections Won"
          value={wins}
          subtitle={`Out of ${elections.length} elections`}
        />

        <KPICard
          icon={<Vote size={24} />}
          label="Latest Election"
          value={summary.latest_election_year}
        />
        <ProfileInfoCards
          summary={summary}
          profile={profile}
        />
        <CareerSummary profile={profile} /> */}

      </div>

    // </div>
  );
}