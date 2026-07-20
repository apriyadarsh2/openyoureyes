import {
  Vote,
  TrendingUp,
} from "lucide-react";

import { AllianceProfileSummary } from "../../types/election";

interface Props {
  summary: AllianceProfileSummary;
}

export default function AllianceVoteShare({
  summary,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <Vote
          className="text-blue-600"
          size={28}
        />

        <h2 className="text-2xl font-bold">
          Vote Share
        </h2>

      </div>

      <div className="mt-8 text-center">

        <p className="text-6xl font-bold text-blue-600">
          {summary.vote_percentage}%
        </p>

        <p className="mt-3 text-slate-500">
          {summary.total_votes.toLocaleString()} votes
        </p>

      </div>

      <div className="mt-8 h-6 rounded-full bg-slate-200">

        <div
          className="h-6 rounded-full bg-blue-600"
          style={{
            width: `${summary.vote_percentage}%`,
          }}
        />

      </div>

      <div className="mt-6 flex items-center gap-2 text-green-600">

        <TrendingUp size={18} />

        <span className="font-medium">
          National Vote Share
        </span>

      </div>

    </section>
  );
}