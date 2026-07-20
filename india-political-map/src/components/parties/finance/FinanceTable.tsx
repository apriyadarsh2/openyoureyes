"use client";

import { PartyFinanceYear } from "../../types/party";

interface Props {
  rows: PartyFinanceYear[];
}

export default function FinanceTable({
  rows,
}: Props) {

  const format = (value: number) =>
    `₹${(value / 10000000).toFixed(2)} Cr`;

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              FY
            </th>

            <th className="px-6 py-4 text-left">
              Income
            </th>

            <th className="px-6 py-4 text-left">
              Expenditure
            </th>

            <th className="px-6 py-4 text-left">
              Electoral Bonds
            </th>

            <th className="px-6 py-4 text-left">
              Election Expenses
            </th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row) => (

            <tr
              key={row.fy_start}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4 font-semibold">
                {row.fy_start}-{row.fy_end}
              </td>

              <td className="px-6 py-4">
                {format(row.total_income_inr)}
              </td>

              <td className="px-6 py-4">
                {format(row.total_expenditure_inr)}
              </td>

              <td className="px-6 py-4">
                {format(row.electoral_bonds_inr)}
              </td>

              <td className="px-6 py-4">
                {format(row.election_expenditure_inr)}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}