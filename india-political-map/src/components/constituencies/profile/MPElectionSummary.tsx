"use client";

import { Trophy, Users, Vote, TrendingUp } from "lucide-react";
import { LatestElection } from "../../types/constituency";

interface Props {
  election: LatestElection;
}

export default function MPElectionSummary({ election }: Props) {
  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-bold text-politic-text">
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

function ElectionCard({ icon, label, value, sub }: CardProps) {
  return (
    <div className="rounded-xl border border-politic-border bg-politic-inner p-4 transition hover:bg-politic-border/30">
      <div className="mb-3 flex items-center gap-2 text-blue-400">
        {icon}
        <span className="text-sm font-bold">
          {label}
        </span>
      </div>
      <h4 className="text-lg font-bold text-politic-text">
        {value}
      </h4>
      {sub && (
        <p className="mt-1 text-sm font-medium text-politic-muted">
          {sub}
        </p>
      )}
    </div>
  );
}