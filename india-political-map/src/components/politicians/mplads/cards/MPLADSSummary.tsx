"use client";

import {
  MPLADSRecord,
} from "@/src/components/types/politician";

interface Props {
  records: MPLADSRecord[];
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export default function MPLADSSummary({
  records,
}: Props) {

  const totalReleased =
    records.reduce(
      (sum, r) => sum + r.funds_released_lakh,
      0
    );

  const totalUtilised =
    records.reduce(
      (sum, r) => sum + r.funds_utilised_lakh,
      0
    );

  const totalWorks =
    records.reduce(
      (sum, r) => sum + r.works_sanctioned,
      0
    );

  const utilisation =
    totalReleased === 0
      ? 0
      : (totalUtilised / totalReleased) * 100;

  return (

    <div className="grid gap-5 md:grid-cols-4">

      <Card
        title="Funds Released"
        value={`₹ ${formatMoney(totalReleased)} L`}
      />

      <Card
        title="Funds Utilised"
        value={`₹ ${formatMoney(totalUtilised)} L`}
      />

      <Card
        title="Utilisation"
        value={`${utilisation.toFixed(1)}%`}
      />

      <Card
        title="Works Sanctioned"
        value={totalWorks.toString()}
      />

    </div>

  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        {value}
      </h2>

    </div>

  );

}