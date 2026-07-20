"use client";

import { usePolitician } from "@/src/components/politicians/context/PoliticianProvider";

import ProfileHero from "../layout/ProfileHero";
import KPIGrid from "../kpi/KPIGrid";
import ProfileInfoCards from "../layout/ProfileInfoCards";
import CareerSummary from "../career/CareerSummary";

export default function OverviewContent() {
  const { summary, profile } = usePolitician();

  return (
    <div className="space-y-8">
      <ProfileHero
        summary={summary}
        profile={profile}
      />

      <KPIGrid
        summary={summary}
        profile={profile}
      />

      <ProfileInfoCards
        summary={summary}
        profile={profile}
      />

      <CareerSummary
        profile={profile}
      />
    </div>
  );
}