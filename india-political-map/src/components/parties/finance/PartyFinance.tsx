import Breadcrumbs from "../../ui/Breadcrumbs";
import {
  getPartyFinance,
  getPartyProfile,
} from "../../lib/repositories/parties";

import FinanceTable from "./FinanceTable";

interface Props {
  slug: string;
}

export default async function PartyFinance({ slug }: Props) {
  const [party, finance] = await Promise.all([
    getPartyProfile(slug),
    getPartyFinance(slug),
  ]);

  if (!party) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
        <h2 className="text-xl font-semibold">
          Party not found
        </h2>

        <p className="mt-2 text-[var(--muted)]">
          The requested party could not be found.
        </p>
      </div>
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
            label: party.abbreviation || party.full_name_en || "Party",
            href: `/parties/${party.id}`,
          },
          {
            label: "Finance",
          },
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Party Finance
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Reported income and expenditure by financial year.
        </p>
      </div>

      <FinanceTable rows={finance} />
    </div>
  );
}