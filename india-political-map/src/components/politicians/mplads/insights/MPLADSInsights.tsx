"use client";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  records: MPLADSRecord[];
}

export default function MPLADSInsights({
  records,
}: Props) {

  const highest =
    [...records].sort(
      (a, b) =>
        b.utilisation_pct -
        a.utilisation_pct
    )[0];

  const lowest =
    [...records].sort(
      (a, b) =>
        a.utilisation_pct -
        b.utilisation_pct
    )[0];

  return (

    <div className="grid gap-5 md:grid-cols-2">

      <div className="rounded-xl border bg-white p-6">

        <h3 className="font-semibold">

          Highest Utilisation

        </h3>

        <p className="mt-3 text-2xl font-bold">

          {highest.utilisation_pct}%

        </p>

        <p className="text-slate-500">

          FY {highest.fy_start}-{String(
            highest.fy_start + 1
          ).slice(2)}

        </p>

      </div>

      <div className="rounded-xl border bg-white p-6">

        <h3 className="font-semibold">

          Lowest Utilisation

        </h3>

        <p className="mt-3 text-2xl font-bold">

          {lowest.utilisation_pct}%

        </p>

        <p className="text-slate-500">

          FY {lowest.fy_start}-{String(
            lowest.fy_start + 1
          ).slice(2)}

        </p>

      </div>

    </div>

  );

}