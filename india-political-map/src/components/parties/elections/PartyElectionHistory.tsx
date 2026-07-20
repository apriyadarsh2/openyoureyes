"use client";

import { getPartyElectionHistory } from "../../lib/repositories/parties";

import Breadcrumbs from "../../ui/Breadcrumbs";
import ElectionTable from "./ElectionTable";

interface Props {
  slug: string;
}

export default function PartyElectionHistory({
  slug,
}: Props) {

  const history =
    getPartyElectionHistory(slug);

  if (!history) {
    return (
      <h2 className="text-2xl font-semibold">
        Election history not found.
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      <Breadcrumbs
        items={[
          {
            label: "Parties",
            href: "/parties",
          },
          {
            label: history.party,
            href: `/parties/${slug}`,
          },
          {
            label: "Election History",
          },
        ]}
      />

      <div>

        <h1 className="text-4xl font-bold">
          {history.party}
        </h1>

        <p className="mt-2 text-slate-500">
          General Election Performance
        </p>

      </div>

      <ElectionTable
        results={history.results}
      />

    </div>
  );
}