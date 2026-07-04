import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

export default function ElectionCard({
  election,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold">
            {election.election.year}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {election.election.election_type}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            election.result.winner
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {election.result.winner ? "Winner" : "Lost"}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <Row
          label="Party"
          value={election.party.abbreviation}
        />

        <Row
          label="Constituency"
          value={election.constituency.name_en}
        />

        <Row
          label="State"
          value={election.constituency.state}
        />

        <Row
          label="Votes"
          value={election.result.votes.toLocaleString("en-IN")}
        />

        <Row
          label="Vote Share"
          value={`${election.result.votes_pct}%`}
        />

        <Row
          label="Winning Margin"
          value={election.result.margin.toLocaleString("en-IN")}
        />

        <Row
          label="Net Assets"
          value={`₹${election.assets.net_assets_inr.toLocaleString(
            "en-IN"
          )}`}
        />

        <Row
          label="Criminal Cases"
          value={election.criminal_cases_count}
        />
      </div>
    </div>
  );
}

interface RowProps {
  label: string;
  value: string | number;
}

function Row({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}