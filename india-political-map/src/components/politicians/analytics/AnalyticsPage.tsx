"use client";

import PageHeader from "@/src/components/ui/PageHeader";

import AnalyticsKPIs from "./cards/AnalyticsKPIs";
import AssetsGrowthChart from "./charts/AssetsGrowthChart";
import VoteShareChart from "./charts/VoteShareChart";
import CriminalTrendChart from "./charts/CriminalTrendChart";
import MPLADSChart from "./charts/MPLADSChart";
import InsightCard from "./InsightCard";

export default function AnalyticsPage() {

    return (

        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6">

            <PageHeader

                title="Analytics Dashboard"

                subtitle="Visual insights into elections, finances, criminal records and MPLADS."

            />

            <AnalyticsKPIs/>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

    <AssetsGrowthChart />
    <VoteShareChart />
    <CriminalTrendChart />
    <MPLADSChart />

</div>
<InsightCard/>

        </div>

    );

}