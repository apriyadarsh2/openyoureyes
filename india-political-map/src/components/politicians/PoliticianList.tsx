import Link from "next/link";
import { Politician } from "../types/politician";

interface Props {
  politicians: Politician[];
}

export default function PoliticianList({ politicians }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-politic-border bg-politic-inner shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-politic-text">
          <thead className="border-b border-politic-border bg-politic-inner text-xs uppercase tracking-wider text-politic-muted">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Party</th>
              <th className="p-4">State</th>
              <th className="p-4">Assets</th>
              <th className="p-4">Cases</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-politic-border">
            {politicians.map((p) => (
              <tr
                key={p.id}
                className="group transition hover:bg-white/5"
              >
                <td className="p-0 font-medium">
                  <Link
                    href={`/politicians/${p.id}`}
                    className="block p-4 font-semibold text-politic-accent group-hover:underline"
                  >
                    {p.name_en}
                  </Link>
                </td>

                <td className="p-0 text-politic-text">
                  <Link href={`/politicians/${p.id}`} className="block p-4">
                    {p.latest_party.abbreviation}
                  </Link>
                </td>

                <td className="p-0 text-politic-muted">
                  <Link href={`/politicians/${p.id}`} className="block p-4">
                    {p.latest_constituency.state}
                  </Link>
                </td>

                <td className="p-0 text-politic-text">
                  <Link href={`/politicians/${p.id}`} className="block p-4">
                    ₹{p.net_assets_inr.toLocaleString("en-IN")}
                  </Link>
                </td>

                <td className="p-0">
                  <Link href={`/politicians/${p.id}`} className="block p-4 flex items-center">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${
                      p.criminal_cases_count > 0 
                        ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}>
                      {p.criminal_cases_count}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}