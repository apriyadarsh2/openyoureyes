"use client";

import { useEffect, useState } from "react";
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

export default function StickyProfileHeader({
  politician,
}: Props) {
  const { summary, profile } = politician;

  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > 120);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const wins =
    profile?.elections.filter(
      e => e.result.winner
    ).length ?? 0;

  return (
    <header
      className={`border-b bg-white/95 backdrop-blur transition-all duration-300 ${
        compact ? "py-3 shadow-md" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div
            className={`flex items-center justify-center rounded-full bg-blue-600 font-bold text-white transition-all duration-300 ${
              compact
                ? "h-12 w-12 text-lg"
                : "h-16 w-16 text-2xl"
            }`}
          >
            {summary.name_en
              .split(" ")
              .map(word => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>

            <h1
              className={`font-bold transition-all ${
                compact
                  ? "text-xl"
                  : "text-3xl"
              }`}
            >
              {summary.name_en}
            </h1>

            {!compact && profile?.name_hi && (
              <p className="text-slate-500">
                {profile.name_hi}
              </p>
            )}

            <div className="mt-1 flex items-center gap-3">

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                {summary.latest_party.abbreviation}
              </span>

              <div className="flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={15} />
                {summary.latest_constituency.name_en}
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="hidden gap-6 lg:flex">

          <HeaderCard
            icon={<Wallet size={18} />}
            label="Assets"
            value={`₹${(
              summary.net_assets_inr /
              10000000
            ).toFixed(2)} Cr`}
          />

          <HeaderCard
            icon={<Scale size={18} />}
            label="Cases"
            value={summary.criminal_cases_count}
          />

          <HeaderCard
            icon={<Trophy size={18} />}
            label="Wins"
            value={wins}
          />

          <HeaderCard
            icon={<Vote size={18} />}
            label="Latest"
            value={summary.latest_election_year}
          />

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

function HeaderCard({
  icon,
  label,
  value,
}: HeaderCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">

      <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}