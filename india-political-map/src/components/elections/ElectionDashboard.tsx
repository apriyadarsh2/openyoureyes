"use client";

import { getElectionDashboard } from "../lib/repositories/elections";

import ElectionHeader from "./ElectionHeader";
import ElectionCardKPIs from "./ElectionCardKPIs";
import ElectionResultCard from "./ElectionResultCard";
import ElectionNavigation from "./ElectionNavigation";
import Breadcrumbs from "../ui/Breadcrumbs";
import ElectionTimeline from "./ElectionTimeline";

interface Props {
  year: number;
}

export default function ElectionDashboard({
  year,
}: Props) {
  const dashboard = getElectionDashboard(year);

  if (!dashboard) {
    return (
      <h2 className="text-2xl font-semibold">
        Election not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">
      <Breadcrumbs items={[
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Elections",
    },
  ]}/>
      <ElectionHeader
        overview={dashboard.overview}
      />

      <ElectionResultCard
        result={dashboard.result_summary}
      />
      <ElectionTimeline
      overview={dashboard.overview} />

        <ElectionCardKPIs
  national={dashboard.national_summary}
  kpis={dashboard.kpis}
/>

      <ElectionNavigation
        year={dashboard.overview.year}
      />
    </div>
  );
}