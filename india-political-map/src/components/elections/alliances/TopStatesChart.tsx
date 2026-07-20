import { AllianceStateBreakdown } from "../../types/election";

interface Props {
  states: AllianceStateBreakdown[];
}

export default function TopStatesChart({
  states,
}: Props) {

  const topStates = [...states]
    .sort((a, b) => b.won - a.won)
    .slice(0, 10);

  const maxWon = Math.max(
    ...topStates.map((state) => state.won)
  );

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Top Performing States
      </h2>

      <p className="mt-1 text-slate-500">
        States contributing the highest seats
      </p>

      <div className="mt-8 space-y-6">

        {topStates.map((state) => {

          const width =
            (state.won / maxWon) * 100;

          return (

            <div key={state.state}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {state.state}
                </span>

                <span className="font-semibold">
                  {state.won}
                </span>

              </div>

              <div className="h-4 rounded-full bg-slate-200">

                <div
                  className="h-4 rounded-full bg-emerald-600"
                  style={{
                    width: `${width}%`,
                  }}
                />

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}