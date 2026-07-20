import { LatestElection } from "../../types/constituency";

interface Props {
  election: LatestElection;
}

export default function LatestElectionCard({
  election,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Latest Election ({election.year})
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-xl bg-green-50 p-5">
          <p className="text-sm text-slate-500">
            Winner
          </p>

          <h3 className="mt-2 text-xl font-bold text-green-700">
            {election.winner.name}
          </h3>

          <p className="mt-1">
            {election.winner.party}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-5">
          <p className="text-sm text-slate-500">
            Runner Up
          </p>

          <h3 className="mt-2 text-xl font-bold text-red-700">
            {election.runner_up.name}
          </h3>

          <p className="mt-1">
            {election.runner_up.party}
          </p>
        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Victory Margin
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {election.margin.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Total Turnout
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {election.turnout.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Turnout %
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {election.turnout_percentage}%
          </h3>
        </div>

      </div>
    </div>
  );
}