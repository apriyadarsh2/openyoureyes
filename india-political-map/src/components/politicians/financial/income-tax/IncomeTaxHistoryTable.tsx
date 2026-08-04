import { IncomeTaxHistory } from "@/src/components/types/financial-disclosure";

interface Props {
  history: IncomeTaxHistory[];
}

// Hydration fix
const formatNumber = (val: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(val);
};

export default function IncomeTaxHistoryTable({ history }: Props) {
  if (!history || history.length === 0) {
    return (
      <p className="py-4 text-center text-xs italic text-politic-muted">
        No history available.
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-politic-border bg-politic-inner">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="border-b border-politic-border bg-politic-card">
          <tr>
            <th className="px-3 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted">
              Financial Year
            </th>
            <th className="px-3 py-2.5 text-right text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted">
              Total Income
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-politic-border">
          {history.map((item) => (
            <tr key={item.financial_year} className="transition-colors hover:bg-white/5">
              <td className="px-3 py-3 font-medium text-politic-text">
                {item.financial_year}
              </td>
              <td className="px-3 py-3 text-right font-bold tabular-nums tracking-tight text-politic-text">
                ₹ {formatNumber(item.total_income)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}