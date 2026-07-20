"use client";

import { getStateParties } from "../lib/repositories/parties";

import PartyList from "./PartyList";

export default function StateParties() {
  const response = getStateParties();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          State Parties
        </h1>

        <p className="mt-2 text-slate-500">
          Election Commission recognised state political parties.
        </p>
      </div>

      <PartyList
        parties={response.results}
      />

    </div>
  );
}