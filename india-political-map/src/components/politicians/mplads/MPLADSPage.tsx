"use client";

import { usePolitician } from "../context/PoliticianProvider";

import MPLADSSummary from "./cards/MPLADSSummary";
import MPLADSYearCard from "./cards/MPLADSYearCard";
import FundsTrendChart from "./charts/FundsTrendChart";
import UtilisationDashboard from "./charts/UtilisationDashboard";
import UtilisationTrendChart from "./charts/UtilisationTrendChart";
import MPLADSInsights from "./insights/MPLADSInsights";

export default function MPLADSPage() {

  const { profile } = usePolitician();

  const records = profile?.mplads ?? [];

  if (!records.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        No MPLADS data available.
      </div>
    );
  }

  return (

  <div className="space-y-8">

    <MPLADSSummary
      records={records}
    />
    

    <FundsTrendChart
      records={records}
    />

    <MPLADSInsights
      records={records}
    />

    <div className="space-y-5">

      {[...records]
        .sort(
          (a, b) => b.fy_start - a.fy_start
        )
        .map(record => (

          <MPLADSYearCard
            key={record.fy_start}
            record={record}
          />

      ))}

    </div>

  </div>

);
}