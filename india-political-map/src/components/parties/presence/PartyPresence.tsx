"use client";

import Breadcrumbs from "../../ui/Breadcrumbs";
import { getPartyPresence } from "../../lib/repositories/parties";

import PresenceTable from "./PresenceTable";

interface Props {
  slug: string;
}

export default function PartyPresence({
  slug,
}: Props) {

  const presence =
    getPartyPresence(slug);

  if (!presence) {
    return (
      <h2 className="text-2xl font-semibold">
        State presence not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      <Breadcrumbs
        items={[
          {
            label: "Parties",
            href: "/parties",
          },
          {
            label: slug.toUpperCase(),
            href: `/parties/${slug}`,
          },
          {
            label: "State Presence",
          },
        ]}
      />

      <div>

        <h1 className="text-4xl font-bold">
          State Presence
        </h1>

        <p className="mt-2 text-slate-500">
          Legislative representation across India
        </p>

      </div>

      <PresenceTable
        title="Upper House"
        rows={presence.upper_house}
      />

      <PresenceTable
        title="State Assemblies"
        rows={presence.lower_house}
      />

    </div>
  );
}