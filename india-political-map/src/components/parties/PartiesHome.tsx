"use client";

import Breadcrumbs from "../ui/Breadcrumbs";

import { getPartiesHome } from "../lib/repositories/parties";

import PartiesSummary from "./PartiesSummary";
import PartyTable from "./PartyTable";

export default function PartiesHome() {
  const data = getPartiesHome();

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Political Parties",
          },
        ]}
      />

      <div>
        <h1 className="text-4xl font-bold">
          Political Parties
        </h1>

        <p className="mt-2 max-w-3xl text-slate-500">
          Explore all recognised political parties of India,
          including National and State parties, their parliamentary
          strength, election performance and organisational details.
        </p>
      </div>

      <PartiesSummary
        summary={data.summary}
      />

      <PartyTable
        parties={data.results}
      />
    </div>
  );
}