"use client";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  records: MPLADSRecord[];
}

export default function UtilisationDashboard({
  records,
}: Props) {

  const sorted = [...records].sort(
    (a, b) => b.fy_start - a.fy_start
  );

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">

          Utilisation Efficiency

        </h2>

        <p className="text-sm text-slate-500">

          Percentage of released funds utilised each year

        </p>

      </div>

      <div className="space-y-8">

        {sorted.map((item) => (

          <div key={item.fy_start}>

            <div className="mb-2 flex items-center justify-between">

              <div>

                <p className="font-semibold">

                  FY {item.fy_start}-
                  {String(item.fy_start + 1).slice(2)}

                </p>

                <p className="text-sm text-slate-500">

                  ₹
                  {item.funds_utilised_lakh.toLocaleString()}
                  L utilised out of ₹
                  {item.funds_released_lakh.toLocaleString()}
                  L

                </p>

              </div>

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">

                {item.utilisation_pct}%

              </span>

            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-700"
                style={{
                  width: `${item.utilisation_pct}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}