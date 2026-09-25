import { Calendar, Landmark, Trophy } from "lucide-react";

import Breadcrumbs from "@/src/components/ui/Breadcrumbs";
import HeroBanner from "@/src/components/ui/HeroBanner";
import HeroStat from "@/src/components/ui/HeroStat";

import { getElections } from "../lib/repositories/elections";
import ElectionGrid from "./ElectionGrid";

export default async function ElectionBrowser() {
  const elections = await getElections();

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-10">
      {/* ================= Hero ================= */}
      <div className="flex flex-col gap-6">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Elections",
            },
          ]}
        />

        <HeroBanner
          badge="Election Archive"
          title={
            <>
              Every <span className="text-politic-accent">Election</span> Changed India.
            </>
          }
          icon={<Calendar size={18} />}
          subtitle="Explore every Lok Sabha General Election since 1951—trace the verdicts, alliances, governments, and political shifts that shaped the nation."
        >
          <div
            className="
              flex
              w-full
              flex-col
              divide-y
              divide-politic-border/50
              overflow-hidden
              rounded-2xl
              border
              border-politic-border
              bg-politic-card
              shadow-sm
            "
          >
            <HeroStat
              value={elections.length}
              label="General Elections"
              icon={<Calendar size={22} />}
            />

            <HeroStat
              value="75+"
              label="Years of Democracy"
              icon={<Landmark size={22} />}
            />

            <HeroStat
              value="543"
              label="Lok Sabha Seats"
              icon={<Trophy size={22} />}
            />
          </div>
        </HeroBanner>
      </div>

      {/* ================= Search / Grid ================= */}
      <div className="mt-12 flex flex-col gap-6">
        <ElectionGrid elections={elections} />
      </div>
    </main>
  );
}