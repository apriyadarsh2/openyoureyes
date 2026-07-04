import {
  Users,
  Landmark,
  MapPinned,
  Vote,
  IndianRupee,
  Scale,
} from "lucide-react";

import Container from "@/src/components/common/Container";
import KPICard from "./KPICard";



import { getHomepageStats } from "../lib/homepage";
import { formatCrore, formatCurrency } from "../lib/format";

const stats = getHomepageStats();

export default function KPIGrid() {
  const kpis = [
    {
      title: "Politicians",
      value: stats.totalPoliticians,
      subtitle: "Across the dataset",
      icon: <Users size={24} />,
      color: "bg-blue-600",
    },
    {
      title: "Political Parties",
      value: stats.totalParties,
      subtitle: "Unique parties",
      icon: <Landmark size={24} />,
      color: "bg-indigo-600",
    },
    {
      title: "Constituencies",
      value: stats.totalConstituencies,
      subtitle: "Lok Sabha Seats",
      icon: <MapPinned size={24} />,
      color: "bg-emerald-600",
    },
    {
      title: "Latest Election",
      value: stats.latestElection,
      subtitle: "Most recent data",
      icon: <Vote size={24} />,
      color: "bg-orange-500",
    },
    {
      title: "Highest Assets",
      value: formatCrore(stats.wealthLeader.net_assets_inr),
      subtitle: stats.wealthLeader.politician.name_en,
      icon: <IndianRupee size={24} />,
      color: "bg-green-600",
    },
    {
      title: "Criminal Cases",
      value: stats.criminalLeader.total_cases,
      subtitle: stats.criminalLeader.politician.name_en,
      icon: <Scale size={24} />,
      color: "bg-red-600",
    },
  ];
  return (
    <section className="py-20 bg-slate-50">



      <Container>

        <div className="mb-10">

          <h2 className="text-3xl font-bold">
            Political Snapshot
          </h2>

          <p className="mt-2 text-slate-500">
            Key statistics from the latest available political data.
          </p>

        </div>

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {kpis.map((kpi) => (
            <KPICard
              key={kpi.title}
              {...kpi}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}