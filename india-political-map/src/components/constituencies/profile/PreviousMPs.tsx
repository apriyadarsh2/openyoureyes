import { PreviousMP } from "../../types/constituency";

interface Props {
  mps?: PreviousMP[];
}

export default function PreviousMPs({
  mps = [],
}: Props) {
  if (mps.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Previous Members of Parliament
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left">
                MP
              </th>

              <th className="px-4 py-3 text-left">
                Party
              </th>

              <th className="px-4 py-3 text-left">
                From
              </th>

              <th className="px-4 py-3 text-left">
                To
              </th>
            </tr>
          </thead>

          <tbody>
            {mps.map((mp, index) => (
              <tr
                key={index}
                className="border-b last:border-none"
              >
                <td className="px-4 py-4 font-medium">
                  {mp.name}
                </td>

                <td className="px-4 py-4">
                  {mp.party}
                </td>

                <td className="px-4 py-4">
                  {mp.term_start}
                </td>

                <td className="px-4 py-4">
                  {mp.term_end}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}