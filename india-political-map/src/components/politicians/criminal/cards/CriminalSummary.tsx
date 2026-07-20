"use client";

import { Scale, AlertTriangle, Landmark, Calendar } from "lucide-react";

import {
  CourtCase,
} from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalSummary({
  cases,
}: Props) {

  const pending =
    cases.filter(c => c.status === "Pending").length;

  const serious =
    cases.filter(c =>
      c.case_type.toLowerCase().includes("serious")
    ).length;

  const courts =
    new Set(cases.map(c => c.court)).size;

  const oldest =
    Math.min(...cases.map(c => c.year_filed));

  const cards = [
    {
      title: "Pending Cases",
      value: pending,
      icon: AlertTriangle,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Serious Cases",
      value: serious,
      icon: Scale,
      color: "text-orange-600 bg-orange-50",
    },
    {
      title: "Courts",
      value: courts,
      icon: Landmark,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Oldest Case",
      value: oldest,
      icon: Calendar,
      color: "text-green-600 bg-green-50",
    },
  ];

  return (

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {cards.map(card => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

              </div>

              <div
                className={`rounded-xl p-3 ${card.color}`}
              >
                <Icon size={28} />
              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}