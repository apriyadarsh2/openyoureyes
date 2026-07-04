import {
  Wallet,
  Scale,
  Trophy,
  Vote,
} from "lucide-react";



import {
  Politician,
  PoliticianProfile,
} from "@/src/components/types/politician";
import KPICard from "./KPICard";

interface Props {
  summary: Politician;
  profile?: PoliticianProfile;
}

export default function KPIGrid({
  summary,
  profile,
}: Props) {
  const elections = profile?.elections ?? [];

  const wins = elections.filter(
    election => election.result.winner
  ).length;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      

      <KPICard
        icon={<Wallet size={24} />}
        label="Net Assets"
        value={`₹${(
          summary.net_assets_inr /
          10000000
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

    </div>
  );
}