import {
  Database,
  Languages,
  Tag,
} from "lucide-react";

import { PartyResponse } from "../../types/parties";

interface Props {
  party: PartyResponse;
}

export default function PartyOverview({
  party,
}: Props) {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-lg
      "
    >

      {/* Header */}

      <div
        className="
          border-b
          border-[var(--border)]
          px-5
          py-5
          sm:px-6
        "
      >
        <h2 className="text-xl font-bold text-white">
          Party Information
        </h2>
      </div>

      {/* Information */}

      <div
        className="
          grid
          grid-cols-1
          divide-y
          divide-[var(--border)]
          sm:grid-cols-2
          sm:divide-x
          sm:divide-y-0
          lg:grid-cols-3
        "
      >

        <Info
          icon={Tag}
          label="English Name"
          value={party.full_name_en}
        />

        <Info
          icon={Languages}
          label="Hindi Name"
          value={party.full_name_hi}
        />

        <Info
          icon={Database}
          label="Recognition Type"
          value={party.party_type}
        />

      </div>

    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Tag;
  label: string;
  value: string | null;
}) {
  return (
    <div className="p-5 sm:p-6">

      <div className="flex items-center gap-2">

        <Icon
          size={16}
          className="text-indigo-400"
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          {label}
        </span>

      </div>

      <p className="mt-3 break-words text-sm font-semibold text-slate-200">
        {value || "Not available"}
      </p>

    </div>
  );
}