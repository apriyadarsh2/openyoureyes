import { AllianceParty } from "../../types/election";

interface Props {
  parties: AllianceParty[];
}

export default function AllianceSeatChart({
  parties,
}: Props) {
  const maxSeats = Math.max(
    ...parties.map((party) => party.won)
  );

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Seat Distribution
      </h2>

      <p className="mt-1 text-slate-500">
        Seats contributed by each alliance party
      </p>

      <div className="mt-8 space-y-6">

        {parties.map((party) => {

          const width =
            (party.won / maxSeats) * 100;

          return (

            <div key={party.party}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {party.party}
                </span>

                <span className="font-semibold">
                  {party.won}
                </span>

              </div>

              <div className="h-4 rounded-full bg-slate-200">

                <div
                  className="h-4 rounded-full bg-blue-600 transition-all"
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