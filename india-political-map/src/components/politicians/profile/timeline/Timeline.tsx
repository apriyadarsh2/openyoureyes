import TimelineEvent from "./TimelineEvent";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function Timeline({
  profile,
}: Props) {
  if (!profile) {
    return (
      <section className="mt-12 rounded-xl border bg-white p-8">
        <h2 className="text-2xl font-bold">
          Timeline
        </h2>

        <p className="mt-4 text-slate-500">
          Timeline is not available.
        </p>
      </section>
    );
  }

  const elections = [...profile.elections].sort(
    (a, b) => b.election.year - a.election.year
  );

  return (
    <section className="mt-12">
      <h2 className="mb-8 text-2xl font-bold">
        Political Timeline
      </h2>

      {elections.map((election) => (
        <TimelineEvent
          key={election.candidacy_id}
          election={election}
        />
      ))}
    </section>
  );
}