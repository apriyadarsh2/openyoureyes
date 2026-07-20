import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import IncomeTaxCard from "./IncomeTaxCard";

interface Props {

  disclosure: FinancialDisclosure;

}

export default function IncomeTaxSection({
  disclosure,
}: Props) {

  const income =
    disclosure.income_tax_returns;

  return (

    <div className="space-y-8">

      <div>

        <h2 className="text-2xl font-bold">

          Income Tax Returns

        </h2>

        <p className="mt-2 text-slate-500">

          Declared income over previous financial years.

        </p>

      </div>

      <IncomeTaxCard

        title="Self"

        entity={income.self}

      />

      <IncomeTaxCard

        title="Spouse"

        entity={income.spouse}

      />

      <IncomeTaxCard

        title="HUF"

        entity={income.huf}

      />

    </div>

  );

}