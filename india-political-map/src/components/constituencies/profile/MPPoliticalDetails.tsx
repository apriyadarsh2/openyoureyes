"use client";

import { Calendar, Flag, Landmark, UserCheck } from "lucide-react";
import { CurrentMP, LatestElection } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
  election: LatestElection;
}

export default function MPPoliticalDetails({ mp, election }: Props) {
  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-6">
      <h3 className="mb-6 text-lg font-bold text-politic-text">
        Political Details
      </h3>

      <div className="space-y-6">
        <InfoRow
          icon={<Landmark size={18} />}
          label="Political Party"
          value={mp.party.full_name}
        />
        <InfoRow
          icon={<Flag size={18} />}
          label="Alliance"
          value={mp.alliance}
        />
        <InfoRow
          icon={<Calendar size={18} />}
          label="Elected"
          value={String(mp.elected_year)}
        />
        <InfoRow
          icon={<UserCheck size={18} />}
          label="Status"
          value="Current MP"
        />
      </div>
    </div>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: RowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-politic-muted">
          {label}
        </p>
        <h4 className="mt-1 font-semibold text-politic-text">
          {value}
        </h4>
      </div>
    </div>
  );
}