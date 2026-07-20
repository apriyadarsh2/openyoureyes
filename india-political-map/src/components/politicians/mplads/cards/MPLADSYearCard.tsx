"use client";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  record: MPLADSRecord;
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export default function MPLADSYearCard({
  record,
}: Props) {

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">

            FY {record.fy_start}-
            {String(record.fy_start + 1).slice(2)}

          </h2>

          <p className="text-sm text-slate-500">

            MPLADS Performance

          </p>

        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-semibold
          ${
            record.utilisation_pct >= 90
              ? "bg-green-100 text-green-700"
              : record.utilisation_pct >= 75
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >

          {record.utilisation_pct}%

        </div>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <Info
          label="Funds Released"
          value={`₹ ${formatMoney(
            record.funds_released_lakh
          )} L`}
        />

        <Info
          label="Funds Utilised"
          value={`₹ ${formatMoney(
            record.funds_utilised_lakh
          )} L`}
        />

        <Info
          label="Works Sanctioned"
          value={record.works_sanctioned.toString()}
        />

      </div>

      <div className="mt-6">

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-green-500"
            style={{
              width: `${record.utilisation_pct}%`,
            }}
          />

        </div>

      </div>

    </div>

  );

}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (

    <div className="rounded-lg bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold">
        {value}
      </p>

    </div>

  );

}