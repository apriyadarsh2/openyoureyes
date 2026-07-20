import {
  Vote,
  Users,
  BarChart3,
  Trophy,
  Landmark,
  Building2,
  UserCheck,
  BadgeCheck,
} from "lucide-react";

import type {
  NationalSummary,
  ResultSummary,
  ElectionKPIs,
} from "../types/election";

interface Props {
  national: NationalSummary;
  result: ResultSummary;
  kpis: ElectionKPIs;
}

export default function ElectionCardKPIs({
  national,
  result,
  kpis,
}: Props) {
  const cards = [
    {
      title: "Registered Voters",
      value: national.registered_voters.toLocaleString(),
      icon: Users,
    },
    {
      title: "Votes Polled",
      value: national.votes_polled.toLocaleString(),
      icon: Vote,
    },
    {
      title: "Turnout",
      value: `${national.turnout_percentage}%`,
      icon: BarChart3,
    },
    {
      title: "Winning Alliance",
      value: result.winning_alliance,
      icon: Trophy,
    },
    {
      title: "Recognized Parties",
      value: kpis.recognized_parties,
      icon: Building2,
    },
    {
      title: "Women MPs",
      value: kpis.women_elected,
      icon: UserCheck,
    },
    {
      title: "Independent Candidates",
      value: kpis.independent_candidates.toLocaleString(),
      icon: Landmark,
    },
    {
      title: "Registered Parties",
      value: kpis.registered_parties,
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <Icon
                className="text-blue-600"
                size={28}
              />
            </div>

            <p className="text-sm text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}