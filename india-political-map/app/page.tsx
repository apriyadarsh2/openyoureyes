"use client";

import { useState } from "react";

import Hero from "@/src/components/hero/Hero";
import KPIGrid from "@/src/components/kpi/KPIGrid";
import HomepageMap from "@/src/components/map/HomepageMap";
import LeaderboardsSection from "@/src/components/leaderboard/LeaderboardsSection";

import { getDataForYear } from "@/src/hooks/usePoliticalData";
import usePoliticianSearch from "@/src/hooks/usePoliticianSearch";


export default function Home() {
  const [year, setYear] = useState(2024);


  const {
    query,
    setQuery,
    filteredPoliticians,
    isSearching,
  } = usePoliticianSearch();

  return (
    <main>

      <Hero
        year={year}
        setYear={setYear}
        query={query}
        setQuery={setQuery}
        filteredPoliticians={filteredPoliticians}
      />

      

      <HomepageMap
      />
      <KPIGrid />

      <LeaderboardsSection />

    </main>
  );
}