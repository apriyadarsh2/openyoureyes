"use client";

import { PartyPresenceRow } from "../../types/party";

interface Props {
  title: string;
  rows: PartyPresenceRow[];
}

export default function PresenceTable({
  title,
  rows,
}: Props) {

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div className="border-b bg-slate-50 px-6 py-4">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

      </div>

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Legislature
            </th>

            <th className="px-6 py-4 text-left">
              Seats
            </th>

            <th className="px-6 py-4 text-left">
              Legislative Leader
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row) => (

            <tr
              key={row.legislature}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4">
                {row.legislature}
              </td>

              <td className="px-6 py-4 font-semibold">
                {row.seats}
              </td>

              <td className="px-6 py-4">
                {row.legislative_leader}
              </td>

              <td className="px-6 py-4">
                {row.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}