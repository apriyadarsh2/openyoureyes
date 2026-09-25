"use client";

import { PartyFinanceResponse } from "../../types/parties";

interface Props {
  rows: PartyFinanceResponse[];
}

function formatAmount(value: number | null) {
  if (value == null) return "—";

  return `₹${(value / 10000000).toFixed(2)} Cr`;
}

export default function FinanceTable({ rows }: Props) {
  if (!rows.length) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <p className="text-[var(--muted)]">
          No financial records are available for this party.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead className="bg-[#1d2433]">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Financial Year
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Income
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Expenditure
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Electoral Bonds
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Election Expenses
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-[var(--border)] transition-colors hover:bg-[#2d3345]"
              >
                <td className="px-5 py-4 font-semibold text-[var(--foreground)]">
                  {row.fy_start && row.fy_end
                    ? `${row.fy_start}-${String(row.fy_end).slice(-2)}`
                    : "—"}
                </td>

                <td className="px-5 py-4 text-right text-sm text-slate-300">
                  {formatAmount(row.total_income_inr)}
                </td>

                <td className="px-5 py-4 text-right text-sm text-slate-300">
                  {formatAmount(row.total_expenditure_inr)}
                </td>

                <td className="px-5 py-4 text-right text-sm text-slate-300">
                  {formatAmount(row.electoral_bonds_inr)}
                </td>

                <td className="px-5 py-4 text-right text-sm text-slate-300">
                  {formatAmount(row.election_expenditure_inr)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}