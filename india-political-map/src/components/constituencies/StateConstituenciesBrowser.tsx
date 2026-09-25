import {
  getConstituenciesByState,
  getStateBySlug,
} from "../lib/repositories/constituencies";

import ConstituencyList from "./ConstituencyList";
import Breadcrumbs from "../ui/Breadcrumbs";

interface Props {
  slug: string;
}

export default async function StateConstituenciesBrowser({ slug }: Props) {
   const state = await getStateBySlug(slug); 
   const constituencies = await getConstituenciesByState(slug);

  if (!state) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-politic-border bg-politic-card mt-10">
        <h2 className="text-xl font-semibold text-politic-text">
          State not found.
        </h2>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Constituencies", href: "/constituencies" },
          { label: state.name },
        ]}
      />

      <div className="relative overflow-hidden rounded-3xl border border-politic-border bg-politic-card p-8 mt-6">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-politic-accent/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-politic-border bg-politic-inner px-4 py-1.5 text-sm font-medium text-politic-accent">
              🏛 State Overview
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-politic-text">
              {state.name}
            </h1>

            <p className="mt-3 max-w-2xl text-politic-muted">
              Browse all Lok Sabha constituencies, reservation categories, electoral statistics, and parliamentary representation across {state.name}.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="rounded-2xl border border-politic-border bg-politic-inner px-5 py-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-politic-muted">
                Constituencies
              </p>
              <h3 className="mt-1 text-3xl font-bold text-politic-accent">
                {state.total_constituencies}
              </h3>
            </div>

            <div className="rounded-2xl border border-politic-border bg-politic-inner px-5 py-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-politic-muted">
                Reservation
              </p>
              <h3 className="mt-1 text-lg font-semibold text-politic-text">
                {state.seats_general} GEN · {state.seats_sc} SC · {state.seats_st} ST
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <ConstituencyList
          constituencies={constituencies}
          slug={slug}
        />
      </div>
    </>
  );
}