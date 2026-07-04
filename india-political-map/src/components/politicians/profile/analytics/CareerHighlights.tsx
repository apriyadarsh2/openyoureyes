import {
  CalendarDays,
  Trophy,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function CareerHighlights({
  profile,
}: Props) {
  if (!profile) return null;

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <CalendarDays className="text-blue-600" />

        <h2 className="text-2xl font-bold">
          Career Highlights
        </h2>

      </div>

      <div className="space-y-8">

        {profile.elections.map(election => (

          <div
            key={election.candidacy_id}
            className="flex gap-6"
          >

            <div className="mt-2 h-4 w-4 rounded-full bg-blue-600" />

            <div className="flex-1">

              <div className="flex flex-wrap items-center justify-between">

                <h3 className="text-xl font-semibold">

                  {election.election.year}

                </h3>

                {election.result.winner && (

                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

                    <Trophy size={16} />

                    Won Election

                  </span>

                )}

              </div>

              <p className="mt-2 text-slate-600">

                {election.constituency.name_en},{" "}
                {election.constituency.state}

              </p>

              <p className="mt-1 text-sm text-slate-500">

                Vote Share{" "}
                {election.result.votes_pct}%

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}