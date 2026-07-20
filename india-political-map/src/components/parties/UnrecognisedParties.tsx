"use client";

import { getUnrecognisedParties } from "../lib/repositories/parties";

import PartyList from "./PartyList";

export default function UnrecognisedParties() {
  const response = getUnrecognisedParties();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Unrecognised Parties
        </h1>

        <p className="mt-2 text-slate-500">
          Registered political parties that are not recognised as National or State parties.
        </p>
      </div>

      <PartyList
        parties={response.results}
      />

    </div>
  );
}