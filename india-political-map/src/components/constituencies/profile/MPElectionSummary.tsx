"use client";

import {
  Trophy,
  Users,
  Vote,
  TrendingUp,
} from "lucide-react";

import { LatestElection } from "../../types/constituency";

interface Props {
  election: LatestElection;
}

export default function MPElectionSummary({
  election,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

      <h3 className="mb-6 text-lg font-semibold">
        {election.year} Election Summary
      </h3>

      <div className="space-y-4">

        <ElectionCard
          icon={<Trophy size={18} />}
          label="Winner"
          value={election.winner.name}
          sub={election.winner.party}
        />

        <ElectionCard
          icon={<Users size={18} />}
          label="Runner-up"
          value={election.runner_up.name}
          sub={election.runner_up.party}
        />

        <ElectionCard
          icon={<TrendingUp size={18} />}
          label="Victory Margin"
          value={election.margin.toLocaleString()}
        />

        <ElectionCard
          icon={<Vote size={18} />}
          label="Votes Cast"
          value={election.turnout.toLocaleString()}
        />

        <ElectionCard
          icon={<Vote size={18} />}
          label="Turnout"
          value={`${election.turnout_percentage}%`}
        />

      </div>

    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}

function ElectionCard({
  icon,
  label,
  value,
  sub,
}: CardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">

      <div className="mb-3 flex items-center gap-2 text-blue-600">
        {icon}

        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      <h4 className="text-lg font-bold">
        {value}
      </h4>

      {sub && (
        <p className="mt-1 text-sm text-slate-500">
          {sub}
        </p>
      )}

    </div>
  );
}