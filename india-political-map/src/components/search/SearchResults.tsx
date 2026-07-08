"use client";

import { Politician } from "@/src/components/types/politician";

import SearchResultCard from "./SearchResultCard";

interface Props {
  politicians: Politician[];
}

export default function SearchResults({
  politicians,
}: Props) {
  return (
    <section className="mx-auto mt-12 max-w-6xl space-y-6">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">

          Search Results

        </h2>

        <p className="text-slate-500">

          {politicians.length} politician(s) found

        </p>

      </div>

      <div className="space-y-5">

        {politicians.map((politician) => (

          <SearchResultCard
            key={politician.id}
            politician={politician}
          />

        ))}

      </div>

    </section>
  );
}