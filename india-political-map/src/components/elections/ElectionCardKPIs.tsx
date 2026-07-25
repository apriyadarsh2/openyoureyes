"use client";

import {
  Users,
  Vote,
  Percent,
  Building2,
  UserCheck,
  Landmark,
} from "lucide-react";

import type {
  NationalSummary,
  ElectionKPIs,
} from "../types/election";

interface Props {
  national: NationalSummary;
  kpis: ElectionKPIs;
}

export default function ElectionCardKPIs({
  national,
  kpis,
}: Props) {

  const stats = [
    {
      title: "Registered Voters",
      value:
        national.registered_voters.toLocaleString(),
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Votes Polled",
      value:
        national.votes_polled.toLocaleString(),
      icon: Vote,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Turnout",
      value: `${national.turnout_percentage}%`,
      icon: Percent,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Recognized Parties",
      value: kpis.recognized_parties,
      icon: Building2,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Women MPs",
      value: kpis.women_elected,
      icon: UserCheck,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Registered Parties",
      value: kpis.registered_parties,
      icon: Landmark,
      color: "bg-slate-100 text-slate-700",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          National Statistics
        </h2>

        <p className="mt-2 text-slate-500">
          Key national figures from this
          general election.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-lg
              "
            >

              <div
                className={`
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  transition-transform
                  group-hover:scale-110
                  ${stat.color}
                `}
              >
                <Icon size={22} />
              </div>

              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight">
                {stat.value}
              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}