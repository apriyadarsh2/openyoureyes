"use client";

import { getStateResults } from "../../../lib/repositories/elections";

import StateResultsGrid from "./StateResultsGrid";

interface Props {
  year: number;
}

export default function StateResultsPage({
  year,
}: Props) {
  const data = getStateResults(year);

  if (!data) {
    return (
      <h2 className="text-2xl font-semibold">
        State results not found.
      </h2>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          State-wise Results
        </h1>

        <p className="mt-2 text-slate-500">
          {data.election.type}
        </p>
      </div>

      <StateResultsGrid
        states={data.results}
      />
    </div>
  );
}