"use client";

import {
  Users,
  Landmark,
  Trophy,
  Vote,
  Flag,
  UserRound,
} from "lucide-react";

import { ConstituencyOverview } from "../../types/constituency";

interface Props {
  overview: ConstituencyOverview;

  currentMP: string;
}

export default function ConstituencyKPIs({
  overview,
  currentMP,
}: Props) {
  return (
    <section
      className="
        grid
        gap-5

        sm:grid-cols-2

        xl:grid-cols-3
      "
    >
      <KPI
        icon={<Users className="text-blue-600" />}
        title="Electors"
        value={overview.electors.toLocaleString()}
      />

      <KPI
        icon={<Landmark className="text-indigo-600" />}
        title="Assembly Segments"
        value={overview.assembly_segments}
      />

      <KPI
        icon={<UserRound className="text-emerald-600" />}
        title="Current MP"
        value={currentMP}
      />

      <KPI
        icon={<Trophy className="text-orange-600" />}
        title="Winning Margin"
        value={overview.latest_margin.toLocaleString()}
      />

      <KPI
        icon={<Vote className="text-purple-600" />}
        title="Turnout"
        value={`${overview.latest_turnout}%`}
      />

      <KPI
        icon={<Flag className="text-rose-600" />}
        title="Reservation"
        value={overview.reservation_type}
      />
    </section>
  );
}

interface KPIProps {
  icon: React.ReactNode;

  title: string;

  value: string | number;
}

function KPI({
  icon,
  title,
  value,
}: KPIProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            transition

            group-hover:scale-110
          "
        >
          {icon}
        </div>

      </div>

      <p className="mt-6 text-sm text-slate-500">
        {title}
      </p>

      <h3
        className="
          mt-2
          text-2xl
          font-bold
          tracking-tight
        "
      >
        {value}
      </h3>
    </div>
  );
}