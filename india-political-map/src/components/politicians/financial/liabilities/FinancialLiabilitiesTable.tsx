import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import LiabilityRow from "./LiabilityRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function FinancialLiabilitiesTable({
  disclosure,
}: Props) {

  const liabilities =
    disclosure.liabilities.financial_liabilities;

  return (

    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">

        <h2 className="text-xl font-bold">
          Financial & Institutional Liabilities
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="bg-slate-100">

              <th>Liability</th>

              <th>Self</th>

              <th>Spouse</th>

              <th>HUF</th>

              <th>Dep 1</th>

              <th>Dep 2</th>

              <th>Dep 3</th>

              <th>Total</th>

            </tr>

          </thead>

          <tbody>

            <LiabilityRow
              title="Loans from Banks / Financial Institutions"
              data={liabilities.loans_from_banks_fis}
            />

            <LiabilityRow
              title="Loans from Individuals / Entities"
              data={liabilities.loans_from_individuals}
            />

            <LiabilityRow
              title="Other Liabilities"
              data={liabilities.any_other_liability}
            />

            <tr className="bg-slate-200 font-bold">

              <td>Grand Total</td>

              <td>{liabilities.grand_total_private_liabilities.self.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.spouse.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.huf.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.dependent1.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.dependent2.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.dependent3.toLocaleString()}</td>

              <td>{liabilities.grand_total_private_liabilities.total.toLocaleString()}</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}