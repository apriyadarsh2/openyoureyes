import {
  Users,
  Landmark,
  MapPinned,
  Vote,
  IndianRupee,
  Scale,
} from "lucide-react";

import KPICard from "./KPICard";
import { getHomepageStats } from "../lib/homepage";
import { formatCrore } from "../lib/format";

const stats = getHomepageStats();

export default function KPIGrid() {
  const kpis = [
    {
      title: "Politicians",
      value: stats.totalPoliticians,
      subtitle: "Across the dataset",
      icon: <Users size={20} />,
      color: "bg-blue-600",
    },
    {
      title: "Political Parties",
      value: stats.totalParties,
      subtitle: "Unique parties",
      icon: <Landmark size={20} />,
      color: "bg-indigo-600",
    },
    {
      title: "Constituencies",
      value: stats.totalConstituencies,
      subtitle: "Lok Sabha Seats",
      icon: <MapPinned size={20} />,
      color: "bg-emerald-600",
    },
    {
      title: "Latest Election",
      value: stats.latestElection,
      subtitle: "Most recent data",
      icon: <Vote size={20} />,
      color: "bg-orange-500",
    },
    {
      title: "Highest Assets",
      value: formatCrore(stats.wealthLeader.net_assets_inr),
      subtitle: stats.wealthLeader.politician.name_en,
      icon: <IndianRupee size={20} />,
      color: "bg-green-600",
    },
    {
      title: "Criminal Cases",
      value: stats.criminalLeader.total_cases,
      subtitle: stats.criminalLeader.politician.name_en,
      icon: <Scale size={20} />,
      color: "bg-red-600",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Political Snapshot</h2>
        <p className="text-xs text-gray-500 mt-1">
          Key statistics from the latest dataset.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 overflow-y-auto max-h-[calc(100vh-280px)] pr-1">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>
    </div>
  );
}