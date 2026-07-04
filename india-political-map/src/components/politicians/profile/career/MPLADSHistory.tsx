import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function MPLADSHistory({
  profile,
}: Props) {
  if (!profile || profile.mplads.length === 0) {
    return null;
  }

  return (
    <section
      id="mplads"
      className="scroll-mt-28 space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold">
          MPLADS Fund Utilisation
        </h2>

        <p className="mt-2 text-slate-500">
          Year-wise MPLADS funds released,
          utilised and sanctioned works.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="sticky top-0 bg-slate-50">

              <tr className="border-b">

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Financial Year
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                  Released
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                  Utilised
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                  Utilisation
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                  Works
                </th>

              </tr>

            </thead>

            <tbody>

              {profile.mplads.map((record) => (

                <tr
                  key={record.fy_start}
                  className="border-b transition hover:bg-slate-50"
                >

                  <td className="px-6 py-5 font-medium">
                    {record.fy_start}-
                    {String(record.fy_start + 1).slice(-2)}
                  </td>

                  <td className="px-6 py-5 text-right">
                    ₹
                    {(
                      record.funds_released_lakh /
                      100
                    ).toFixed(2)}{" "}
                    Cr
                  </td>

                  <td className="px-6 py-5 text-right">
                    ₹
                    {(
                      record.funds_utilised_lakh /
                      100
                    ).toFixed(2)}{" "}
                    Cr
                  </td>

                  <td className="px-6 py-5 text-center">
                    <StatusBadge
                      value={record.utilisation_pct}
                    />
                  </td>

                  <td className="px-6 py-5 text-right font-semibold">
                    {record.works_sanctioned}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

function StatusBadge({
  value,
}: {
  value: number;
}) {
  let color =
    "bg-red-100 text-red-700";

  if (value >= 100) {
    color =
      "bg-blue-100 text-blue-700";
  } else if (value >= 95) {
    color =
      "bg-green-100 text-green-700";
  } else if (value >= 80) {
    color =
      "bg-yellow-100 text-yellow-700";
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${color}`}
    >
      {value.toFixed(2)}%
    </span>
  );
}