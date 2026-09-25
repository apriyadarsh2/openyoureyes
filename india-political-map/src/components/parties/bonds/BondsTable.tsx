"use client";

import { ElectoralBondResponse } from "../../types/parties";

interface Props {
  bonds: ElectoralBondResponse[];
}

function formatAmount(amount: number | null) {
  if (amount == null) return "—";

  return `₹${(amount / 10000000).toFixed(2)} Cr`;
}

function formatDate(date: string | null) {
  if (!date) return "—";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BondsTable({ bonds }: Props) {
  if (!bonds.length) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <p className="text-[var(--muted)]">
          No electoral bond records are available for this party.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <div className="overflow-x-auto">
        <table className="min-w-[850px] w-full">
          <thead className="bg-[#1d2433]">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Bond No.
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Purchaser
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Purchase Date
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Encashment
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {bonds.map((bond) => (
              <tr
                key={bond.id}
                className="border-t border-[var(--border)] transition-colors hover:bg-[#2d3345]"
              >
                <td className="px-5 py-4 font-medium text-[var(--foreground)]">
                  {bond.bond_number || "—"}
                </td>

                <td className="px-5 py-4 text-sm text-slate-300">
                  {bond.purchaser_name || "—"}
                </td>

                <td className="px-5 py-4 text-sm text-slate-300">
                  {formatDate(bond.purchase_date)}
                </td>

                <td className="px-5 py-4 text-sm text-slate-300">
                  {formatDate(bond.encashment_date)}
                </td>

                <td className="px-5 py-4 text-right font-semibold text-emerald-400">
                  {formatAmount(bond.denomination_inr)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}