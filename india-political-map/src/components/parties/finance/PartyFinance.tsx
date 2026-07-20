"use client";

import Breadcrumbs from "../../ui/Breadcrumbs";
import { getPartyFinance } from "../../lib/repositories/parties";

import FinanceTable from "./FinanceTable";

interface Props {
  slug: string;
}

export default function PartyFinance({
  slug,
}: Props) {

  const finance =
    getPartyFinance(slug);

  if (!finance) {
    return (
      <h2 className="text-2xl font-semibold">
        Finance data not found.
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
            label: finance.party.abbreviation,
            href: `/parties/${slug}`,
          },
          {
            label: "Finance",
          },
        ]}
      />

      <div>

        <h1 className="text-4xl font-bold">
          Party Finance
        </h1>

        <p className="mt-2 text-slate-500">
          Annual income and expenditure
        </p>

      </div>

      <FinanceTable
        rows={finance.finance_by_year}
      />

    </div>
  );
}