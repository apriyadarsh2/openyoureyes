"use client";

import { ElectoralBond } from "../../types/party";

interface Props {
  bonds: ElectoralBond[];
}

export default function BondsTable({
  bonds,
}: Props) {

  const formatAmount = (amount: number) =>
    `₹${(amount / 10000000).toFixed(2)} Cr`;

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Bond No.
            </th>

            <th className="px-6 py-4 text-left">
              Purchaser
            </th>

            <th className="px-6 py-4 text-left">
              Purchase Date
            </th>

            <th className="px-6 py-4 text-left">
              Encashment
            </th>

            <th className="px-6 py-4 text-left">
              Amount
            </th>

          </tr>

        </thead>

        <tbody>

          {bonds.map((bond) => (

            <tr
              key={bond.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4 font-medium">
                {bond.bond_number}
              </td>

              <td className="px-6 py-4">
                {bond.purchaser_name}
              </td>

              <td className="px-6 py-4">
                {bond.purchase_date}
              </td>

              <td className="px-6 py-4">
                {bond.encashment_date}
              </td>

              <td className="px-6 py-4 font-semibold text-green-700">
                {formatAmount(
                  bond.denomination_inr
                )}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}