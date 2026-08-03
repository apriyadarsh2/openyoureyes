import {
  Wallet,
  Scale,
  Trophy,
  Vote,
  MapPin,
} from "lucide-react";

import { PoliticianProfileResponse } from "@/src/components/types/politician";

interface Props {
  politician: PoliticianProfileResponse;
}

export default function ProfileHeader({
  politician,
}: Props) {
  const { summary, profile } = politician;

  const wins =
    profile?.elections.filter(
      (e) => e.result.winner
    ).length ?? 0;

  return (

    <header className="relative z-10 border-b border-[#2d3654] bg-[#14192b] py-4 lg:py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">

        {/* Left Side: Profile Info */}
        <div className="flex items-center gap-3 lg:gap-4">
          
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2d3654] bg-[#2d3654]/50 text-lg font-bold text-amber-400 lg:h-14 lg:w-14 lg:text-xl">
            {summary.name_en
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold leading-tight text-[#FACC15] lg:text-2xl">
              {summary.name_en}
            </h1>

            {profile?.name_hi && (
              <p className="text-xs text-[#94A3B8] lg:text-sm">
                {profile.name_hi}
              </p>
            )}

            <div className="mt-1.5 flex flex-wrap items-center gap-2 lg:gap-3">
              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400 lg:text-xs">
                {summary.latest_party.abbreviation}
              </span>

              <div className="flex items-center gap-1 text-[10px] text-[#94A3B8] lg:text-xs">
                <MapPin size={12} className="shrink-0" />
                <span className="truncate sm:max-w-none">
                  {summary.latest_constituency.name_en}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Stats Grid (Compact) */}
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:flex lg:gap-3">
            <HeaderCard
              icon={<Wallet size={16} />}
              label="Assets"
              value={`₹${(summary.net_assets_inr / 10000000).toFixed(2)} Cr`}
            />

            <HeaderCard
              icon={<Scale size={16} />}
              label="Cases"
              value={summary.criminal_cases_count}
            />

            <HeaderCard
              icon={<Trophy size={16} />}
              label="Wins"
              value={wins}
            />

            <HeaderCard
              icon={<Vote size={16} />}
              label="Latest"
              value={summary.latest_election_year}
            />
          </div>
        </div>

      </div>
    </header>
  );
}

interface HeaderCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function HeaderCard({ icon, label, value }: HeaderCardProps) {
  return (
    <div className="flex w-full shrink-0 items-center gap-2.5 rounded-xl border border-[#2d3654] bg-[#14192b] p-2 shadow-sm lg:w-auto lg:px-3 lg:py-2">
      <div className="rounded-lg bg-[#2d3654]/50 p-1.5 text-amber-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-medium uppercase tracking-wider text-[#94A3B8] lg:text-[10px]">
          {label}
        </p>
        <p className="truncate text-xs font-semibold text-[#F2F1EC] lg:text-sm">
          {value}
        </p>
      </div>
    </div>
  );
}