"use client";

import { getPartiesHome } from "../lib/repositories/parties";

import Breadcrumbs from "../ui/Breadcrumbs";
import PartiesSummary from "./PartiesSummary";
import PartyCategoryGrid from "./PartyCategoryGrid";

export default function PartiesHome() {

  const data = getPartiesHome();

  return (
    <div className="space-y-10">

      

      <div>

        <h1 className="text-4xl font-bold">
          Political Parties
        </h1>

        <p className="mt-2 text-slate-500">
          Explore National, State, Historical and
          Unrecognised Political Parties of India.
        </p>

      </div>

      <PartiesSummary
        summary={data.summary}
      />

      <PartyCategoryGrid
        categories={data.categories}
      />

    </div>
  );
}