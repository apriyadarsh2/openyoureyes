import Link from "next/link";
import { Politician } from "../types/politician";

interface Props {
  politicians: Politician[];
}

export default function PoliticianList({
  politicians,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th>Party</th>
            <th>State</th>
            <th>Assets</th>
            <th>Cases</th>
          </tr>
        </thead>

        <tbody>
          {politicians.map((p) => (
            <tr
              key={p.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <Link
                  href={`/politicians/${p.id}`}
                  className="font-semibold text-blue-600"
                >
                  {p.name_en}
                </Link>
              </td>

              <td>{p.latest_party.abbreviation}</td>

              <td>
                {p.latest_constituency.state}
              </td>

              <td>
                ₹
                {p.net_assets_inr.toLocaleString(
                  "en-IN"
                )}
              </td>

              <td>{p.criminal_cases_count}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}