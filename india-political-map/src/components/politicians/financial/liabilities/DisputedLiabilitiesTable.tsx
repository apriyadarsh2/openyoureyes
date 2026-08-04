import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";
import LiabilityRow from "./LiabilityRow";

interface Props { disclosure: FinancialDisclosure; }

export default function DisputedLiabilitiesTable({ disclosure }: Props) {
  const disputed = disclosure.liabilities.disputed_liabilities;

  return (
    <div className="overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm">
      <div className="border-b border-politic-border p-4 sm:p-5"> 
        <h2 className="text-lg sm:text-xl font-bold text-politic-text">Disputed Liabilities</h2>
      </div>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full text-xs sm:text-sm text-politic-text">
          <thead className="bg-politic-inner uppercase tracking-wide text-politic-muted border-b border-politic-border">
            <tr>
              <th className="sticky left-0 z-20 bg-politic-inner px-3 py-3 text-left font-bold whitespace-nowrap shadow-[1px_0_0_0_#ffffff1a]">Category</th>
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
            <LiabilityRow title="Liabilities in Dispute" data={disputed.liabilities_in_dispute} />
          </tbody>
        </table>
      </div>
    </div>
  );
}