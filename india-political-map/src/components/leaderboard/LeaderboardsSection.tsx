import { Trophy, Scale, BarChart3 } from "lucide-react";

import { ENDPOINTS } from "../lib/endpoints";
import { formatCrore } from "../lib/format";

import LeaderboardCard from "./LeaderboardCard";
import LeaderboardItem from "./LeaderboardItem";

import {
  WealthLeader,
  CriminalLeader,
  MarginLeader,
} from "../types/leaderboard";

export default function LeaderboardsSection() {
  const wealth =
    ENDPOINTS.wealth.leaders.slice(0, 5) as WealthLeader[];

  const criminal =
    ENDPOINTS.criminal.leaders.slice(0, 5) as CriminalLeader[];

  const margin =
    ENDPOINTS.margin.leaders.slice(0, 5) as MarginLeader[];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            National Leaderboards
          </h2>

          <p className="mt-3 text-slate-500">
            Explore India's top political rankings based on wealth,
            criminal records and winning margins.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Wealth */}

          <LeaderboardCard
            title="Highest Assets"
            icon={<Trophy className="text-yellow-500" />}
          >
            {wealth.map((item) => (
              <LeaderboardItem
                key={item.politician.id}
                rank={item.rank}
                name={item.politician.name_en}
                subtitle={`${item.party.abbreviation} • ${item.constituency.name_en}`}
                value={formatCrore(item.net_assets_inr)}
              />
            ))}
          </LeaderboardCard>

          {/* Criminal */}

          <LeaderboardCard
            title="Criminal Cases"
            icon={<Scale className="text-red-500" />}
          >
            {criminal.map((item) => (
              <LeaderboardItem
                key={item.politician.id}
                rank={item.rank}
                name={item.politician.name_en}
                subtitle={`${item.party.abbreviation} • ${item.constituency.name_en}`}
                value={`${item.total_cases} Cases`}
              />
            ))}
          </LeaderboardCard>

          {/* Margin */}

          <LeaderboardCard
            title="Winning Margin"
            icon={<BarChart3 className="text-blue-500" />}
          >
            {margin.map((item) => (
              <LeaderboardItem
                key={`${item.constituency.id}-${item.rank}`}
                rank={item.rank}
                name={item.winner.name_en}
                subtitle={`${item.party.abbreviation} • ${item.constituency.name_en}, ${item.constituency.state}`}
                value={item.margin.toLocaleString("en-IN")}
              />
            ))}
          </LeaderboardCard>

        </div>
      </div>
    </section>
  );
}