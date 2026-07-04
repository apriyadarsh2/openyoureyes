import Link from "next/link";
import { Building2, IndianRupee, MapPin, Scale, Calendar } from "lucide-react";

import { Politician } from "../types/politician";
import { formatCrore } from "../lib/format";

interface Props {
  politician: Politician;
}

export default function PoliticianCard({ politician }: Props) {
  return (
    <Link href={`/politicians/${politician.id}`}>
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Avatar */}

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
          {politician.name_en.charAt(0)}
        </div>

        {/* Name */}

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
          {politician.name_en}
        </h3>

        {/* Party */}

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <Building2 size={16} />
          <span>{politician.latest_party.abbreviation}</span>
        </div>

        {/* Constituency */}

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} />
          <span>
            {politician.latest_constituency.name_en},{" "}
            {politician.latest_constituency.state}
          </span>
        </div>

        {/* Election */}

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <Calendar size={16} />
          <span>{politician.latest_election_year}</span>
        </div>

        {/* Assets */}

        <div className="mt-5 flex items-center justify-between rounded-xl bg-emerald-50 p-3">

          <div className="flex items-center gap-2">
            <IndianRupee size={18} className="text-emerald-700" />

            <span className="text-sm text-slate-700">
              Assets
            </span>
          </div>

          <span className="font-bold text-emerald-700">
            {formatCrore(politician.net_assets_inr)}
          </span>

        </div>

        {/* Cases */}

        <div className="mt-3 flex items-center justify-between rounded-xl bg-red-50 p-3">

          <div className="flex items-center gap-2">
            <Scale size={18} className="text-red-700" />

            <span className="text-sm text-slate-700">
              Criminal Cases
            </span>
          </div>

          <span className="font-bold text-red-700">
            {politician.criminal_cases_count}
          </span>

        </div>

      </div>
    </Link>
  );
}