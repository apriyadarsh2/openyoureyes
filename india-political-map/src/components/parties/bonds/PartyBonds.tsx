"use client";

import Breadcrumbs from "../../ui/Breadcrumbs";
import { getPartyBonds } from "../../lib/repositories/parties";

import BondsTable from "./BondsTable";

interface Props {
  slug: string;
}

export default function PartyBonds({
  slug,
}: Props) {

  const data =
    getPartyBonds(slug);

  if (!data) {
    return (
      <h2 className="text-2xl font-semibold">
        Electoral bond data not found.
      </h2>
    );
  }

  const totalReceived =
    `₹${(data.total_received_inr / 10000000).toFixed(2)} Cr`;

  return (
    <div className="space-y-8">

      <Breadcrumbs
        items={[
          {
            label: "Parties",
            href: "/parties",
          },
          {
            label: data.party.abbreviation,
            href: `/parties/${slug}`,
          },
          {
            label: "Electoral Bonds",
          },
        ]}
      />

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Electoral Bonds
          </h1>

          <p className="mt-2 text-slate-500">
            Bond receipts received by the party
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 px-6 py-4">

          <p className="text-sm text-slate-500">
            Total Received
          </p>

          <h2 className="text-3xl font-bold text-blue-700">
            {totalReceived}
          </h2>

        </div>

      </div>

      <BondsTable
        bonds={data.bonds}
      />

    </div>
  );
}