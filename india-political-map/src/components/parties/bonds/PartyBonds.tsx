
import Breadcrumbs from "../../ui/Breadcrumbs";
import {
  getPartyBonds,
  getPartyProfile,
} from "../../lib/repositories/parties";

import BondsTable from "./BondsTable";

interface Props {
  slug: string;
}

export default async function PartyBonds({ slug }: Props) {
  const [party, bonds] = await Promise.all([
    getPartyProfile(slug),
    getPartyBonds(slug),
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

  const totalReceived = bonds.reduce(
    (total, bond) => total + (bond.denomination_inr ?? 0),
    0
  );

  const formattedTotal =
    `₹${(totalReceived / 10000000).toFixed(2)} Cr`;

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
            label: "Electoral Bonds",
          },
        ]}
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Electoral Bonds
          </h1>

          <p className="mt-2 text-[var(--muted)]">
            Electoral bond records associated with this party.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5">
          <p className="text-sm text-[var(--muted)]">
            Total Recorded Value
          </p>

          <h2 className="mt-1 text-2xl font-bold text-emerald-400 sm:text-3xl">
            {formattedTotal}
          </h2>
        </div>
      </div>

      <BondsTable bonds={bonds} />
    </div>
  );
}