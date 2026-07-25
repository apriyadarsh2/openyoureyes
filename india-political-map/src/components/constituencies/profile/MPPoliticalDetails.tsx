"use client";

import {
  Calendar,
  Flag,
  Landmark,
  UserCheck,
} from "lucide-react";

import {
  CurrentMP,
  LatestElection,
} from "../../types/constituency";

interface Props {
  mp: CurrentMP;
  election: LatestElection;
}

export default function MPPoliticalDetails({
  mp,
  election,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <h3 className="mb-6 text-lg font-semibold">
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

function InfoRow({
  icon,
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <h4 className="mt-1 font-semibold">
          {value}
        </h4>

      </div>

    </div>
  );
}