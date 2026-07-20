"use client";

import { getNationalParties } from "../lib/repositories/parties";

import PartyList from "./PartyList";

export default function NationalParties() {
  const response = getNationalParties();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          National Parties
        </h1>

        <p className="mt-2 text-slate-500">
          Election Commission of India recognised national parties.
        </p>
      </div>

      <PartyList
        parties={response.results}
      />
    </div>
  );
}