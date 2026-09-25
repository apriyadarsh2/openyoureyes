// "use client";

// import { usePolitician } from "@/src/components/politicians/context/PoliticianProvider";

// import AssetsSummary from "./AssetsSummary";
// import AssetsChart from "./AssetsChart";
// import AssetsBreakdown from "./AssetsBreakdown";
// import AssetsInsights from "./AssetsInsights";
// import AssetsHistory from "./AssetsHistory";

// export default function AssetsContent() {
//   const { profile } = usePolitician();

//   return (
//     <div className="space-y-8">
//       <AssetsSummary profile={profile} />

//       <AssetsChart profile={profile} />

//       <AssetsBreakdown profile={profile} />

//       <AssetsInsights profile={profile} />

//       <AssetsHistory profile={profile} /> 
//     </div>
//   );
// }


"use client";

import { usePolitician } from "@/src/components/politicians/context/PoliticianProvider";

import AssetsSummary from "./AssetsSummary";
import AssetsChart from "./AssetsChart";
import AssetsBreakdown from "./AssetsBreakdown";
import AssetsInsights from "./AssetsInsights";
import AssetsHistory from "./AssetsHistory";

export default function AssetsContent() {
  const { financialDisclosure } = usePolitician();
  const disclosure = financialDisclosure?.disclosure;

  if (!financialDisclosure?.available || !disclosure) {
    return (
      <div className="rounded-2xl border border-dashed border-politic-border bg-politic-card p-16 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-politic-text">
          Assets Data Not Available
        </h2>
        <p className="mt-3 text-sm text-politic-muted">
          No asset records found for this politician.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <AssetsSummary disclosure={disclosure} />
      <AssetsChart disclosure={disclosure} />
      <AssetsBreakdown disclosure={disclosure} />
      <AssetsInsights disclosure={disclosure} />
      <AssetsHistory disclosure={disclosure} /> 
    </div>
  );
}