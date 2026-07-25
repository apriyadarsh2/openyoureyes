"use client";

import { ElectionSummary } from "../types/election";

import ElectionCard from "./ElectionCard";

interface Props {
  elections: ElectionSummary[];
}

export default function ElectionGrid({
  elections,
}: Props) {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-8

        md:grid-cols-2

        2xl:grid-cols-3
      "
    >
      {elections.map((election) => (
        <ElectionCard
          key={election.id}
          election={election}
        />
      ))}
    </section>
  );
}