import { ConstituencyElection } from "../../types/constituency";

interface Props {
  elections: ConstituencyElection[];
}

export default function ElectionTimeline({
  elections,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Election History
      </h2>

      <div className="space-y-5">

        {elections.map((election) => (
          <div
            key={`${election.year}-${election.type}`}
            className="rounded-xl border p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">

              <div>
                <h3 className="text-xl font-semibold">
                  {election.year}
                </h3>

                <p className="text-slate-500">
                  {election.type}
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {election.party}
              </span>

            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">

              <div>
                <p className="text-sm text-slate-500">
                  Winner
                </p>

                <h4 className="font-semibold">
                  {election.winner}
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Runner Up
                </p>

                <h4 className="font-semibold">
                  {election.runner_up}
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Votes
                </p>

                <h4 className="font-semibold">
                  {election.votes.toLocaleString()}
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Victory Margin
                </p>

                <h4 className="font-semibold">
                  {election.margin.toLocaleString()}
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Turnout
                </p>

                <h4 className="font-semibold">
                  {election.turnout_percentage}%
                </h4>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}