"use client";

import { getHistoricalParties } from "../lib/repositories/parties";

import PartyList from "./PartyList";

export default function HistoricalParties() {
  const response = getHistoricalParties();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Historical Parties
        </h1>

        <p className="mt-2 text-slate-500">
          Political parties that have merged, dissolved, or ceased to exist.
        </p>
      </div>

      <PartyList
        parties={response.results}
      />

    </div>
  );
}