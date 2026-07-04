import { Politician } from "../types/politician";

import PoliticianCard from "./PoliticianCard";

interface Props {
  politicians: Politician[];
}

export default function PoliticianGrid({
  politicians,
}: Props) {
  if (politicians.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-16 text-center">
        <h2 className="text-xl font-semibold">
          No Politicians Found
        </h2>

        <p className="mt-2 text-slate-500">
          Try changing the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {politicians.map((politician) => (
        <PoliticianCard
          key={politician.id}
          politician={politician}
        />
      ))}
    </div>
  );
}