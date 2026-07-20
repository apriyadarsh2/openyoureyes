"use client";

import {
  Landmark,
  Building2,
  Users,
  Vote,
} from "lucide-react";

import { PartyProfile } from "../types/party";

interface Props {
  party: PartyProfile;
}

export default function PartyStats({
  party,
}: Props) {

  const cards = [
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
      title: "Assemblies",
      value: party.current_strength.state_assemblies,
      icon: Building2,
    },
    {
      title: "Councils",
      value: party.current_strength.state_councils,
      icon: Users,
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

            <Icon
              className="mb-4 text-blue-600"
              size={28}
            />

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