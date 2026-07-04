import ElectionTimelineCard from "./ElectionTimelineCard";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function ElectionHistory({
  profile,
}: Props) {
  if (!profile) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
        Election history unavailable.
      </div>
    );
  }

  const elections = [...profile.elections].sort(
    (a, b) =>
      b.election.year -
      a.election.year
  );

  return (
    <div>

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Election Timeline
        </h2>

        <p className="mt-2 text-slate-500">
          Complete history of elections
          contested by this politician.
        </p>

      </div>

      {elections.map(
        (election, index) => (
          <ElectionTimelineCard
            key={election.candidacy_id}
            election={election}
            isLast={
              index === elections.length - 1
            }
          />
        )
      )}

    </div>
  );
}