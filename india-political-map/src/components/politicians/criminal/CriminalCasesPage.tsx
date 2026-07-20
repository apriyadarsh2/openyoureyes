"use client";

import { usePolitician } from "../context/PoliticianProvider";

import CriminalSummary from "./cards/CriminalSummary";
import CriminalSeverityChart from "./charts/CriminalSeverityChart";
import CriminalTimeline from "./timeline/CriminalTimeline";
import CriminalCaseCard from "./cards/CriminalCaseCard";
import CriminalStatusChart from "./charts/CriminalStatusChart";

export default function CriminalCasesPage() {

  const { profile } = usePolitician();

  const cases = profile?.court_cases ?? [];

  if (!cases.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        No criminal cases available.
      </div>
    );
  }

  return (

    <div className="space-y-8">

      <CriminalSummary cases={cases} />

      <div className="grid gap-6 lg:grid-cols-2 mt-6">

    <CriminalSeverityChart
        cases={cases}
    />

    <CriminalStatusChart
        cases={cases}
    />

</div>


      <CriminalTimeline cases={cases} />

      <div className="space-y-6">

        {cases
          .sort(
            (a, b) => b.year_filed - a.year_filed
          )
          .map((item) => (

            <CriminalCaseCard

              key={item.case_id_source}

              criminalCase={item}

            />

        ))}

      </div>

    </div>

  );

}