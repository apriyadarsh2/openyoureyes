"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ElectionAssetsCard({
  election,
}: Props) {
  const assets = election.assets;

  const cards = [
    {
      title: "Total Assets",
      value: assets.total_assets_inr,
    },
    {
      title: "Net Worth",
      value: assets.net_assets_inr,
    },
    {
      title: "Liabilities",
      value: assets.total_liabilities_inr,
    },
    {
      title: "Movable Assets",
      value: assets.movable_assets_inr ?? 0,
    },
    {
      title: "Immovable Assets",
      value: assets.immovable_assets_inr ?? 0,
    },
    {
      title: "Cash",
      value: assets.cash_inr ?? 0,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <h3 className="mb-5 text-lg font-semibold">
        Asset Declaration
      </h3>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((item) => (

          <div
            key={item.title}
            className="rounded-xl border border-slate-200 p-5"
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <p className="mt-2 text-2xl font-bold">
              ₹ {formatCurrency(item.value)}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}