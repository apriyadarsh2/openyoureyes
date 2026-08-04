import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";
import LiabilityRow from "./LiabilityRow";

interface Props { disclosure: FinancialDisclosure; }

const formatNumber = (val: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(val);

export default function FinancialLiabilitiesTable({ disclosure }: Props) {
  const liabilities = disclosure.liabilities.financial_liabilities; 

  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm">
      <div className="border-b border-politic-border p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold text-politic-text">Financial & Institutional Liabilities</h2>
      </div>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full text-xs sm:text-sm text-politic-text">
          <thead className="bg-politic-inner uppercase tracking-wide text-politic-muted border-b border-politic-border">
            <tr>
              <th className="sticky left-0 z-20 bg-politic-inner px-3 py-3 text-left font-bold whitespace-nowrap shadow-[1px_0_0_0_#ffffff1a]">Liability</th>
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
            <LiabilityRow title="Loans from Banks / Financial Institutions" data={liabilities.loans_from_banks_fis} />
            <LiabilityRow title="Loans from Individuals / Entities" data={liabilities.loans_from_individuals} />
            <LiabilityRow title="Other Liabilities" data={liabilities.any_other_liability} />

            <tr className="bg-politic-inner font-bold text-politic-text border-t-2 border-politic-border">
              <td className="sticky left-0 z-20 bg-politic-inner px-3 py-3 uppercase tracking-wider text-[10px] sm:text-xs shadow-[1px_0_0_0_#ffffff1a]">Grand Total</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.self)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.spouse)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.huf)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.dependent1)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.dependent2)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight">₹{formatNumber(liabilities.grand_total_private_liabilities.dependent3)}</td>
              <td className="px-3 py-3 text-right tabular-nums tracking-tight text-politic-accent">₹{formatNumber(liabilities.grand_total_private_liabilities.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}