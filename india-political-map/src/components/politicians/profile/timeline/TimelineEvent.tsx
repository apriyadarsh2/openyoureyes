import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

export default function TimelineEvent({
  election,
}: Props) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-blue-600" />
        <div className="mt-2 h-full w-px bg-slate-300" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">
              {election.election.year}
            </h3>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                election.result.winner
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {election.result.winner ? "Won" : "Lost"}
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Info
              label="Party"
              value={election.party.abbreviation}
            />

            <Info
              label="Constituency"
              value={election.constituency.name_en}
            />

            <Info
              label="Vote Share"
              value={`${election.result.votes_pct}%`}
            />

            <Info
              label="Margin"
              value={election.result.margin.toLocaleString(
                "en-IN"
              )}
            />

            <Info
              label="Net Assets"
              value={`₹${election.assets.net_assets_inr.toLocaleString(
                "en-IN"
              )}`}
            />

            <Info
              label="Criminal Cases"
              value={election.criminal_cases_count}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoProps {
  label: string;
  value: string | number;
}

function Info({ label, value }: InfoProps) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}