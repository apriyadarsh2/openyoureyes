"use client";

import { PartyElectionResult } from "../../types/party";

import ElectionRow from "./ElectionRow";

interface Props {
  results: PartyElectionResult[];
}

export default function ElectionTable({
  results,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Year
            </th>

            <th className="px-6 py-4 text-left">
              Leader
            </th>

            <th className="px-6 py-4 text-left">
              Won
            </th>

            <th className="px-6 py-4 text-left">
              Vote %
            </th>

            <th className="px-6 py-4 text-left">
              Outcome
            </th>

          </tr>

        </thead>

        <tbody>

          {results.map((result) => (

            <ElectionRow
              key={result.year}
              result={result}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}