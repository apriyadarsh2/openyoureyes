import { AllianceStateBreakdown } from "../../types/election";

interface Props {
  states: AllianceStateBreakdown[];
}

export default function AllianceStateTable({
  states,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white shadow-sm">

      <div className="border-b p-6">

        <h2 className="text-2xl font-bold">
          State Performance
        </h2>

        <p className="mt-1 text-slate-500">
          Alliance performance across states
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                State
              </th>

              <th className="px-6 py-4 text-center">
                Contested
              </th>

              <th className="px-6 py-4 text-center">
                Won
              </th>

              <th className="px-6 py-4 text-center">
                Win %
              </th>

            </tr>

          </thead>

          <tbody>

            {states.map((state) => {

              const percentage =
                state.contested
                  ? (
                      (state.won /
                        state.contested) *
                      100
                    ).toFixed(1)
                  : "-";

              return (

                <tr
                  key={state.state}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-medium">
                    {state.state}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {state.contested ?? "-"}
                  </td>

                  <td className="px-6 py-4 text-center font-semibold">
                    {state.won}
                  </td>

                  <td className="px-6 py-4 text-center">

                    {percentage === "-"
                      ? "-"
                      : `${percentage}%`}

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