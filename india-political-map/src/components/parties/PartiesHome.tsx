import Breadcrumbs from "../ui/Breadcrumbs";
import { getParties, getPartySummary, } from "../lib/repositories/parties";

import PartiesSummary from "./PartiesSummary";
import PartyTable from "./PartyTable";

interface Props {
  search?: string;
}



export default async function PartiesHome({
  search = "",
}: Props) {
  const [parties, summary] = await Promise.all([
    getParties(200, 0),
    getPartySummary(),
  ]);


  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8 sm:space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Political Parties" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border,theme(colors.border))] bg-[var(--card,theme(colors.card))] px-6 py-8 shadow-sm sm:px-10 sm:py-12">
        
        {/* Background Decorative Glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            Political Parties
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground,theme(colors.slate.900))] dark:text-white sm:text-4xl lg:text-5xl">
            Political Parties of India
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted,theme(colors.slate.500))] sm:text-lg">
            Explore political parties, their official recognition status, registered names, and available financial records.
          </p>
        </div>
      </section>

      {/* Summary Widgets */}
      <PartiesSummary summary={summary} />

      {/* Party Table Section */}
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground,theme(colors.slate.900))] dark:text-white">
              Party Directory
            </h2>
            <p className="mt-1 text-sm text-[var(--muted,theme(colors.slate.500))]">
              Browse all political parties currently available in the database.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--muted,theme(colors.slate.500))] shadow-sm">
            Showing <span className="font-semibold text-[var(--foreground,theme(colors.slate.900))] dark:text-white">{parties.length}</span> parties
          </div>
        </div>

        <PartyTable parties={parties} />
      </section>
    </div>
  );
}