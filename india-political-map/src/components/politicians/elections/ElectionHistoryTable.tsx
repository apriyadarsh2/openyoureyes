"use client";

import { PoliticianElection } from "../../types/politician";

interface Props {
  elections: PoliticianElection[];
}

function money(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ElectionHistoryTable({
  elections,
}: Props) {

  return (

    <div className="overflow-hidden rounded-xl border bg-white">

      <div className="border-b px-6 py-4">

        <h2 className="text-xl font-semibold">
          Election History
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full text-sm">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Year
              </th>

              <th className="px-4 py-3 text-left">
                Constituency
              </th>

              <th className="px-4 py-3 text-left">
                Party
              </th>

              <th className="px-4 py-3 text-right">
                Votes
              </th>

              <th className="px-4 py-3 text-right">
                Vote %
              </th>

              <th className="px-4 py-3 text-right">
                Margin
              </th>

              <th className="px-4 py-3 text-right">
                Assets
              </th>

              <th className="px-4 py-3 text-center">
                Result
              </th>

            </tr>

          </thead>

          <tbody>

            {elections.map((election) => (

              <tr
                key={election.candidacy_id}
                className="border-t"
              >

                <td className="px-4 py-3">
                  {election.election.year}
                </td>

                <td className="px-4 py-3">
                  {election.constituency.name_en}
                </td>

                <td className="px-4 py-3">
                  {election.party.abbreviation}
                </td>

                <td className="px-4 py-3 text-right">
                  {money(election.result.votes)}
                </td>

                <td className="px-4 py-3 text-right">
                  {election.result.votes_pct.toFixed(2)}%
                </td>

                <td className="px-4 py-3 text-right">
                  {money(election.result.margin)}
                </td>

                <td className="px-4 py-3 text-right">
                  ₹ {money(election.assets.net_assets_inr)}
                </td>

                <td className="px-4 py-3 text-center">

                  {election.result.winner ? (

                    <span className="rounded bg-green-100 px-3 py-1 text-green-700">
                      Won
                    </span>

                  ) : (

                    <span className="rounded bg-red-100 px-3 py-1 text-red-700">
                      Lost
                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}