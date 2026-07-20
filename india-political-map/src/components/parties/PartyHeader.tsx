"use client";

import { PartyProfile } from "../types/party";

interface Props {
  party: PartyProfile;
}

export default function PartyHeader({
  party,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div>

        <div className="mb-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
          {party.overview.abbreviation}
        </div>

        <h1 className="text-4xl font-bold">
          {party.overview.party}
        </h1>

        <p className="mt-3 text-slate-500">
          Founded {party.overview.founded}
        </p>

      </div>

    </div>
  );
}