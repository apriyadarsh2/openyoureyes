"use client";

import { useParams } from "next/navigation";
import { Vote, Landmark, Building2, Users } from "lucide-react";
import { PartyProfile } from "../../types/party";
import { PARTY_COLORS } from "../../../../data/partyColors"; // Adjust path if needed

interface Props {
  party: PartyProfile;
}

export default function PartyHeader({ party }: Props) {
  const params = useParams();

  // Extract slug from URL (e.g., "bjp" -> "BJP")
  const rawSlug = typeof params?.slug === "string" ? params.slug : "";
  const slugKey = rawSlug.toUpperCase().replace("-", "");

  // Priority: URL slug lookup -> Party abbreviation lookup -> Slate gray fallback
  const abbreviation = party.overview.abbreviation;
  const partyColor =
    PARTY_COLORS[slugKey] || PARTY_COLORS[abbreviation] || "#94a3b8";

  const stats = [
    {
      title: "Lok Sabha",
      value: party.current_strength.lok_sabha,
      icon: Vote,
    },
    {
      title: "Rajya Sabha",
      value: party.current_strength.rajya_sabha,
      icon: Landmark,
    },
    {
      title: "State Assemblies",
      value: party.current_strength.assemblies,
      icon: Building2,
    },
    {
      title: "Legislative Councils",
      value: party.current_strength.councils,
      icon: Users,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* Top Profile Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Dynamic Color Badge derived from URL */}
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-xl font-bold tracking-wider text-white shadow-sm transition-colors duration-200"
          style={{ backgroundColor: partyColor }}
        >
          {abbreviation}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {party.overview.party}
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {party.overview.recognition} &middot; Founded in {party.overview.founded}
          </p>
        </div>
      </div>

      {/* Inline Stats Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="flex flex-col justify-center rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100/80"
            >
              <div className="mb-1.5 flex items-center gap-2 text-slate-500">
                <Icon size={14} className="text-slate-400" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {stat.title}
                </span>
              </div>

              <span className="text-2xl font-bold text-slate-900">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}