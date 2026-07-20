"use client";

import { PartyElectionResult } from "../../types/party";

interface Props {
  result: PartyElectionResult;
}

export default function ElectionRow({
  result,
}: Props) {
  return (
    <tr className="border-t hover:bg-slate-50">

      <td className="px-6 py-4 font-semibold">
        {result.year}
      </td>

      <td className="px-6 py-4">
        {result.party_leader}
      </td>

      <td className="px-6 py-4">
        {result.seats_won}
      </td>

      <td className="px-6 py-4">
        {result.percentage_of_votes}
      </td>

      <td className="px-6 py-4">
        {result.outcome}
      </td>

    </tr>
  );
}