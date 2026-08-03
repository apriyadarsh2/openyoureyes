"use client";

import { PoliticianProfile } from "@/src/components/types/politician";

import CareerOverview from "./CareerOverview";
import CareerPerformance from "./CareerPerformance";
import ContestHistory from "./ContestHistory";
import CareerInsights from "./CareerInsights";

interface Props {
  profile?: PoliticianProfile;
}

export default function Career({ profile }: Props) {
  if (!profile) return null;

  return (
    <section
      id="career"
      className="space-y-8"
    >
      <CareerOverview profile={profile} />

      <CareerPerformance profile={profile} />

      <ContestHistory profile={profile} />

      <CareerInsights profile={profile} />
    </section>
  );
}