"use client";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props { election: PoliticianElection; }

// Compact format to avoid sea of zeroes
function formatAsset(value: number) {
  if (!value) return "₹0";
  return `₹${(value / 10000000).toFixed(2)} Cr`;
}

export default function ElectionAssetsCard({ election }: Props) {
  const assets = election.assets;
  const cards = [
    { title: "Total Assets", value: assets.total_assets_inr },
    { title: "Net Worth", value: assets.net_assets_inr },
    { title: "Liabilities", value: assets.total_liabilities_inr },
    { title: "Movable Assets", value: assets.movable_assets_inr ?? 0 },
    { title: "Immovable Assets", value: assets.immovable_assets_inr ?? 0 },
    { title: "Cash", value: assets.cash_inr ?? 0 },
  ];

  return (
    <div className="rounded-xl border border-politic-border bg-politic-card p-4 sm:p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-politic-text border-b border-politic-border pb-2">
        Asset Declaration
      </h3>
      <div className="grid gap-3 sm:gap-4 grid-cols-2 xl:grid-cols-3">
        {cards.map((item) => (
          <div key={item.title} className="rounded-lg border border-politic-border/50 bg-politic-inner p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-politic-muted">
              {item.title}
            </p>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-black text-politic-text tabular-nums">
              {formatAsset(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}