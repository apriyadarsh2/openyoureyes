import { AllianceParty } from "../../types/election";

interface Props {
  parties: AllianceParty[];
}

export default function AlliancePartyTable({
  parties,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white shadow-sm">

      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Alliance Parties
        </h2>

        <p className="mt-1 text-slate-500">
          Performance of constituent parties
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Party
              </th>

              <th className="px-6 py-4 text-center">
                Contested
              </th>

              <th className="px-6 py-4 text-center">
                Won
              </th>

              <th className="px-6 py-4 text-center">
                Strike Rate
              </th>

            </tr>

          </thead>

          <tbody>

            {parties.map((party) => {

              const strikeRate =
                party.contested
                  ? (
                      (party.won /
                        party.contested) *
                      100
                    ).toFixed(1)
                  : "-";

              return (

                <tr
                  key={party.party}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-medium">
                    {party.party}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {party.contested ?? "-"}
                  </td>

                  <td className="px-6 py-4 text-center font-semibold">
                    {party.won}
                  </td>

                  <td className="px-6 py-4 text-center">

                    {strikeRate === "-"
                      ? "-"
                      : `${strikeRate}%`}

                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}