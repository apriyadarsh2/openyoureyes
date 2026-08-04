import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";
import IncomeTaxCard from "./IncomeTaxCard";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function IncomeTaxSection({ disclosure }: Props) {
  const income = disclosure.income_tax_returns;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
          Income Tax Returns
        </h2>
        <p className="mt-1 text-xs font-medium text-politic-muted sm:text-sm">
          Declared income over previous financial years.
        </p>
      </div>

      {/* Grid use kiya hai taaki teeno cards side-by-side aayen */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <IncomeTaxCard title="Self" entity={income.self} />
        <IncomeTaxCard title="Spouse" entity={income.spouse} />
        <IncomeTaxCard title="HUF" entity={income.huf} />
      </div>
    </div>
  );
}