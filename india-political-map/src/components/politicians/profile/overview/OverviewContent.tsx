"use client";

import { usePolitician } from "@/src/components/politicians/context/PoliticianProvider";
import ProfileInfoCards from "../layout/ProfileInfoCards";
import Career from "../career/Career";

export default function OverviewContent() {
  const { summary, profile } = usePolitician();

  return (
    <div className="space-y-6 lg:space-y-8">
      <div>
        <h2 className="text-xl font-bold text-politic-text lg:text-2xl">Personal Details</h2>
        <div className="mt-2 h-px w-full bg-politic-border"></div>
      </div>

      <ProfileInfoCards 
        summary={summary}
        profile={profile}
      />

      <Career
    profile={profile}
/>
    </div>
  ); 
}