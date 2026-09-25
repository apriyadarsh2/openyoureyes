import { getStateResults } from "../../lib/repositories/elections";

import StateResultsGrid from "./StateResultsGrid";
import Breadcrumbs from "../../ui/Breadcrumbs";

interface Props {
  year: number;
}

export default async function StateResultsPage({ year }: Props) {
  const data = await getStateResults(year);

  if (!data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h2 className="text-xl sm:text-2xl font-bold text-politic-muted">
          State results not found.
        </h2>
      </div>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 sm:py-10 space-y-8">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Elections",
            href: "/elections",
          },
          {
            label: `Election ${data.election.year}`,
            href: `/elections/${data.election.year}`,
          },
          {
            label: "State Results",
          },
        ]}
      />

      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-politic-border pb-6">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
            {data.election.type}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-politic-text">
            State-wise <span className="text-politic-accent">Results</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base font-medium text-politic-muted">
            Explore state-by-state alliance outcomes and top party performance for the {data.election.year} General Election.
          </p>
        </div>

        <div className="rounded-xl border border-politic-border bg-politic-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-politic-muted self-start sm:self-auto">
          Total States & UTs: <span className="text-politic-text font-bold">{data.results.length}</span>
        </div>
      </div>

      <StateResultsGrid states={data.results} />
    </main>
  );
}