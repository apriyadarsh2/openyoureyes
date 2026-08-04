import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import ImmovableAssetRow from "./ImmovableAssetRow";

interface Props {
  disclosure: FinancialDisclosure;
}

// Hydration and formatting fix
const formatNumber = (val: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(val);
};

export default function ImmovableAssetsTable({
  disclosure,
}: Props) {

  const immovable = disclosure.assets.immovable_assets; 

  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm">
      <div className="border-b border-politic-border p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold text-politic-text">
          Immovable Assets
        </h2>
      </div>

      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full text-xs sm:text-sm text-politic-text">
          <thead className="bg-politic-inner uppercase tracking-wide text-politic-muted border-b border-politic-border">
            <tr>
              <th className="sticky left-0 z-20 bg-politic-inner px-3 py-3 text-left font-bold whitespace-nowrap shadow-[1px_0_0_0_#ffffff1a]">Asset</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Self</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Spouse</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">HUF</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Dep 1</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Dep 2</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Dep 3</th>
              <th className="px-3 py-3 text-right font-bold whitespace-nowrap text-politic-accent">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-politic-border">
            <ImmovableAssetRow title="Agricultural Land" data={immovable.agricultural_land} />
            <ImmovableAssetRow title="Non Agricultural Land" data={immovable.non_agricultural_land} />
            <ImmovableAssetRow title="Commercial Buildings" data={immovable.commercial_buildings} />
            <ImmovableAssetRow title="Residential Buildings" data={immovable.residential_buildings} />
            <ImmovableAssetRow title="Others" data={immovable.others} />

            <tr className="bg-politic-inner font-bold text-politic-text border-t-2 border-politic-border">
              <td className="sticky left-0 z-20 bg-politic-inner px-3 py-3 uppercase tracking-wider text-[10px] sm:text-xs shadow-[1px_0_0_0_#ffffff1a]">Gross Total</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.self)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.spouse)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.huf)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.dependent1)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.dependent2)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(immovable.gross_total_immovable.dependent3)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight text-politic-accent">₹{formatNumber(immovable.gross_total_immovable.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}