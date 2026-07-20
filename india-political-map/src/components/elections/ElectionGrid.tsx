import { ElectionSummary } from "../types/election";

import ElectionCard from "./ElectionCard";

interface Props {
  elections: ElectionSummary[];
}

export default function ElectionGrid({
  elections,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {elections.map((election) => (
        <ElectionCard
          key={election.id}
          election={election}
        />
      ))}
    </div>
  );
}