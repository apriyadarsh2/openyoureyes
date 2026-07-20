import Link from "next/link";

import {
  Calendar,
  Trophy,
  Users,
  ChevronRight,
} from "lucide-react";

import { ElectionSummary } from "../types/election";

interface Props {
  election: ElectionSummary;
}

export default function ElectionCard({
  election,
}: Props) {
  return (
    <Link
      href={`/elections/${election.year}`}
      className="block rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          {election.year}
        </h2>

        <Calendar className="text-slate-400" />
      </div>

      <p className="mt-1 text-slate-500">
        {election.lok_sabha}th Lok Sabha
      </p>

      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <Trophy
            size={18}
            className="text-green-600"
          />

          <span>
            {election.winner_alliance}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Users
            size={18}
            className="text-blue-600"
          />

          <span>
            {election.winner_seats} Seats
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            election.majority
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {election.status}
        </span>

        <ChevronRight className="text-slate-500" />
      </div>
    </Link>
  );
}