import { Landmark, Map, Users } from "lucide-react";

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";
import HeroStat from "@/src/components/ui/HeroStat";
import { getStates } from "../lib/repositories/constituencies";
import StateGrid from "./StateGrid";

export default async function StateBrowser() {
   const states = await getStates();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Constituencies" },
        ]}
      />

      <div className="mb-10 mt-2 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-politic-text tracking-tight">
            Every <span className="text-politic-accent">Seat</span> Has a Story.
          </h1>
          <p className="mt-4 text-politic-muted text-base sm:text-lg leading-relaxed">
            Explore all 543 Lok Sabha constituencies—track their representatives, election history, and the political forces shaping them.
          </p>
        </div>

        <div className="flex w-full flex-col divide-y divide-politic-border/50 rounded-2xl border border-politic-border bg-politic-card shadow-sm lg:w-auto lg:flex-row lg:divide-x lg:divide-y-0">
          <HeroStat value="543" label="Lok Sabha Seats" icon={<Landmark size={22} />} />
          <HeroStat value={states.length.toString()} label="States & UTs" icon={<Map size={22} />} />
          <HeroStat value="412" label="General Category" icon={<Users size={22} />} />
        </div>
      </div>

      <div className="space-y-12">
        <StateGrid states={states} />
      </div>
    </main>
  );
}