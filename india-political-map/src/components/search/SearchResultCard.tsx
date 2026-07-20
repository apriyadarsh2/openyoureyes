"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Landmark } from "lucide-react";

import { Politician } from "@/src/components/types/politician";

interface Props {
  politician: Politician;
}

export default function SearchResultCard({
  politician,
}: Props) {
  return (
    <Link
      href={`/politicians/${politician.id}`}
      className="block"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

        <div className="flex items-start gap-5">

          {/* Avatar */}

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">

            {politician.name_en.charAt(0)}

          </div>

          <div className="flex-1">

            <div className="flex flex-wrap items-center justify-between gap-4">

              <div>

                <h3 className="text-2xl font-bold">

                  {politician.name_en}

                </h3>

                <p className="mt-1 text-slate-500">

                  {politician.latest_party.abbreviation}

                </p>

              </div>

              <ArrowRight className="text-slate-400" />

            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-slate-600">

              <div className="flex items-center gap-2">

                <MapPin size={18} />

                {politician.latest_constituency.name_en},{" "}
                {politician.latest_constituency.state}

              </div>

              <div className="flex items-center gap-2">

                <Landmark size={18} />

                {politician.latest_election_year}

              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-6">

              <div>

                <p className="text-sm text-slate-500">

                  Net Assets

                </p>

                <h4 className="font-semibold">

                  ₹
                  {(
                    politician.net_assets_inr /
                    10000000
                  ).toFixed(2)}{" "}
                  Cr

                </h4>

              </div>

              <div>

                <p className="text-sm text-slate-500">

                  Criminal Cases

                </p>

                <h4 className="font-semibold">

                  {politician.criminal_cases_count}

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}