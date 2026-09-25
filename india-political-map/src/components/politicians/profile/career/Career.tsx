
"use client";

import {
  PoliticianProfile,
  ElectoralSummary,
} from "@/src/components/types/politician";

import CareerOverview from "./CareerOverview";
import CareerPerformance from "./CareerPerformance";
import CareerInsights from "./CareerInsights";

interface Props {
  profile?: PoliticianProfile;
  electoralSummary: ElectoralSummary;
}
export default function Career({
  profile,
  electoralSummary,
}: Props) {
  return (
    <section
      id="career"
      className="space-y-8"
    >
      <CareerOverview summary={electoralSummary} />

      {/* {profile && (
        <CareerPerformance profile={profile} />
      )} */}

      {profile && (
        <CareerInsights profile={profile} />
      )}
    </section>
  );
}