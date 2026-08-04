import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import MovableAssetRow from "./MovableAssetRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export const formatNumber = (val: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(val);
};

export default function MovableAssetsTable({
  disclosure,
}: Props) {

  const movable = disclosure.assets.movable_assets;
 
  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm">
      <div className="border-b border-politic-border p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold text-politic-text">
          Movable Assets
        </h2>
      </div>

      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full text-xs sm:text-sm text-politic-text">
          <thead className="bg-politic-inner uppercase tracking-wide text-politic-muted border-b border-politic-border">
            <tr>
              {/* STICKY COLUMN: Asset name hamesha left mein fix rahega */}
              <th className="sticky left-0 z-20 bg-politic-inner px-3 py-3 text-left font-bold whitespace-nowrap shadow-[1px_0_0_0_#ffffff1a]">
                Asset
              </th>
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
            <MovableAssetRow title="Cash in Hand" data={movable.cash_in_hand} />
            <MovableAssetRow title="Bank Deposits" data={movable.bank_deposits} />
            <MovableAssetRow title="Investments" data={movable.investments_bonds_shares} />
            <MovableAssetRow title="Savings & Insurance" data={movable.savings_and_insurance} />
            <MovableAssetRow title="Loans Given" data={movable.personal_loans_given} />
            <MovableAssetRow title="Motor Vehicles" data={movable.motor_vehicles} />
            <MovableAssetRow title="Jewellery" data={movable.jewellery} />
            <MovableAssetRow title="Other Assets" data={movable.other_assets} />
            
            {/* Gross Total Row */}
            <tr className="bg-politic-inner font-bold text-politic-text border-t-2 border-politic-border">
              {/* STICKY COLUMN FOR TOTAL ROW */}
              <td className="sticky left-0 z-20 bg-politic-inner px-3 py-3 uppercase tracking-wider text-[10px] sm:text-xs shadow-[1px_0_0_0_#ffffff1a]">
                Gross Total
              </td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.self)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.spouse)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.huf)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.dependent1)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.dependent2)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(movable.gross_total_movable.dependent3)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight text-politic-accent">₹{formatNumber(movable.gross_total_movable.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}