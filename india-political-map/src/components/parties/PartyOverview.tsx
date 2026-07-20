"use client";

import { PartyProfile } from "../types/party";

interface Props {
  party: PartyProfile;
}

export default function PartyOverview({
  party,
}: Props) {

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">
          Party Information
        </h2>

        <div className="space-y-4">

          <Info
            label="Leader"
            value={party.overview.leader}
          />

          <Info
            label="Political Position"
            value={party.overview.political_position ?? "-"}
          />

          <Info
            label="Recognition"
            value={party.overview.recognition ?? "-"}
          />

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">
          Ideology
        </h2>

        <div className="flex flex-wrap gap-3">

          {(party.overview.ideology ?? []).map(
            (item: string) => (
              <span
                key={item}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {item}
              </span>
            )
          )}

        </div>

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}