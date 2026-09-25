"use client";

import AnalyticsKPIs from "./cards/AnalyticsKPIs";
import AssetsGrowthChart from "./charts/AssetsGrowthChart";
import VoteShareChart from "./charts/VoteShareChart";
import CriminalTrendChart from "./charts/CriminalTrendChart";
import MPLADSChart from "./charts/MPLADSChart";
import InsightCard from "./InsightCard";

export default function AnalyticsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      
      {/* Inline Responsive Header (Replaces PageHeader) */}
      <div className="mb-10 border-b border-politic-border pb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-politic-text">
          Analytics <span className="text-politic-accent">Dashboard</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-politic-muted">
          Visual insights into elections, finances, criminal records, and MPLADS.
        </p>
      </div>

      <div className="space-y-8">
        {/* Top KPIs */}
        <AnalyticsKPIs />
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <AssetsGrowthChart />
          <VoteShareChart />
          <CriminalTrendChart />
          <MPLADSChart />
        </div>

        {/* Insights Section */}
        <InsightCard />
      </div>
      
    </main>
  );
}