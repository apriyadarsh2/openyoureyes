import { AllianceProfileSummary } from "../../types/election";

interface AllianceInfo {
  slug: string;
  name: string;
  abbreviation: string;
}

interface Props {
  alliance: AllianceInfo;
  summary: AllianceProfileSummary;
}

export default function AllianceHeader({
  alliance,
  summary,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            {alliance.abbreviation}
          </span>

          <h1 className="mt-4 text-4xl font-bold">
            {alliance.name}
          </h1>

          <p className="mt-2 text-slate-500">
            Alliance Performance Overview
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-6">

          <p className="text-sm text-slate-500">
            Major Party
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {summary.major_party}
          </h2>

          <p className="mt-2 text-lg text-blue-600 font-semibold">
            {summary.vote_percentage}% Vote Share
          </p>

        </div>

      </div>

    </section>
  );
}