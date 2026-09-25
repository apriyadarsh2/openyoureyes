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

export default async function ElectionDashboard({
  year,
}: Props) {
  const dashboard = await getElectionDashboard(year);

  if (!dashboard) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h2 className="text-2xl font-semibold text-politic-muted">
          Election not found.
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: `Elections`,
            href: "/elections",
          },
          {
            label: `Elections ${dashboard.overview.year}`,
          },
          
        ]}
      />

      <ElectionHeader
        overview={dashboard.overview}
      />

      <ElectionResultCard
        result={dashboard.result_summary}
      />

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