"use client";

import { Scale, AlertTriangle, Landmark, Calendar } from "lucide-react";
import { CourtCase } from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalSummary({ cases }: Props) {
  const pending = cases.filter(c => c.status === "Pending").length;
  const serious = cases.filter(c => c.case_type.toLowerCase().includes("serious")).length;
  const courts = new Set(cases.map(c => c.court)).size;
  const oldest = Math.min(...cases.map(c => c.year_filed));

  const cards = [
    {
      title: "Pending Cases",
      value: pending,
      icon: AlertTriangle,
      color: "text-red-400 bg-red-500/10",
    },
    {
      title: "Serious Cases",
      value: serious,
      icon: Scale,
      color: "text-orange-400 bg-orange-500/10",
    },
    {
      title: "Courts",
      value: courts,
      icon: Landmark,
      color: "text-blue-400 bg-blue-500/10",
    },
    {
      title: "Oldest Case",
      value: oldest,
      icon: Calendar,
      color: "text-green-400 bg-green-500/10",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(card => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-politic-muted">
                  {card.title}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-politic-text">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-xl p-3 ${card.color}`}>
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}