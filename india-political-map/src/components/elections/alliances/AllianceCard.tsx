"use client";

import Link from "next/link";

import {
  ArrowRight,
  Users,
  Trophy,
} from "lucide-react";

import { AllianceCard as AllianceCardType } from "../../types/election";

interface Props {
  alliance: AllianceCardType;
  year: number;
}

export default function AllianceCard({
  alliance,
  year,
}: Props) {
  return (
    <Link
      href={`/elections/${year}/alliances/${alliance.slug}`}
      className="block rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {alliance.abbreviation}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {alliance.name}
          </p>
        </div>

        <ArrowRight className="text-blue-600" />
      </div>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <Trophy
            size={20}
            className="text-yellow-500"
          />

          <span>
            <strong>{alliance.seats}</strong> Seats
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Users
            size={20}
            className="text-blue-600"
          />

          <span>
            {alliance.vote_percentage}% Vote Share
          </span>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">

        <div className="flex justify-between text-sm">
          <span>Major Party</span>

          <span className="font-semibold">
            {alliance.major_party ?? "-"}
          </span>
        </div>

        <div className="mt-2 flex justify-between text-sm">
          <span>Seat Change</span>

          <span
            className={`font-semibold ${
              alliance.seat_change === null
                ? ""
                : alliance.seat_change >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {alliance.seat_change === null
              ? "-"
              : alliance.seat_change > 0
              ? `+${alliance.seat_change}`
              : alliance.seat_change}
          </span>
        </div>

      </div>

      <div className="mt-6 text-sm font-semibold text-blue-600">
        View Analysis →
      </div>
    </Link>
  );
}