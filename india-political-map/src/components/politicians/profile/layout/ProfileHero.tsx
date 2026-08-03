"use client";

import {
  Trophy,
  Wallet,
  Scale,
  CalendarDays,
  GraduationCap,
  MapPinned,
  Landmark,
} from "lucide-react";

import {
  Politician,
  PoliticianProfile,
} from "@/src/components/types/politician";

interface Props {
  summary: Politician;
  profile?: PoliticianProfile;
}

export default function ProfileHero({
  summary,
  profile,
}: Props) {

  const elections =
    profile?.elections ?? [];

  const wins =
    elections.filter(
      e => e.result.winner
    ).length;

  const age = profile?.dob
    ? new Date().getFullYear() -
      new Date(profile.dob).getFullYear()
    : "-";

  return (

    <section className="overflow-hidden rounded-3xl border border-politic-border bg-politic-card shadow-sm">

      {/* TOP */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-8 py-10 text-white">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

          {/* Avatar */}

          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 text-4xl font-bold">

            {summary.name_en
              .split(" ")
              .map(word => word[0])
              .join("")
              .slice(0, 2)}

          </div>

          {/* Identity */}

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h1 className="text-4xl font-bold">

                {summary.name_en}

              </h1>

              <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-700">

                {summary.latest_party.abbreviation}

              </span>

            </div>

            <p className="mt-2 text-xl text-blue-100">

              {profile?.name_hi}

            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Chip
                icon={<MapPinned size={16} />}
                text={`${summary.latest_constituency.name_en}, ${summary.latest_constituency.state}`}
              />

              <Chip
                icon={<Landmark size={16} />}
                text={`Lok Sabha ${summary.latest_election_year}`}
              />

              <Chip
                icon={<CalendarDays size={16} />}
                text="Current Term"
              />

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="grid gap-px bg-politic-border md:grid-cols-6">

        <StatCard
          icon={<Trophy size={20} />}
          label="Contests"
          value={elections.length}
        />

        <StatCard
          icon={<Trophy size={20} />}
          label="Wins"
          value={wins}
        />

        <StatCard
          icon={<Wallet size={20} />}
          label="Net Assets"
          value={`₹${(
            summary.net_assets_inr /
            10000000
          ).toFixed(2)} Cr`}
        />

        <StatCard
          icon={<Scale size={20} />}
          label="Cases"
          value={
            summary.criminal_cases_count
          }
        />

        <StatCard
          icon={
            <GraduationCap size={20} />
          }
          label="Education"
          value={
            profile?.education_level ??
            "-"
          }
        />

        <StatCard
          icon={
            <CalendarDays size={20} />
          }
          label="Age"
          value={age}
        />

      </div>

    </section>

  );

}

interface ChipProps {
  icon: React.ReactNode;
  text: string;
}

function Chip({
  icon,
  text,
}: ChipProps) {

  return (

    <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">

      {icon}

      <span>{text}</span>

    </div>

  );

}

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function StatCard({
  icon,
  label,
  value,
}: StatProps) {

  return (

    <div className="bg-politic-card p-6">

      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-politic-base text-politic-accent">

        {icon}

      </div>

      <p className="text-xs uppercase tracking-wide text-politic-muted">

        {label}

      </p>

      <h3 className="mt-2 text-2xl font-bold text-politic-text">

        {value}

      </h3>

    </div>

  );

}