import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import LiabilityRow from "./LiabilityRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function DisputedLiabilitiesTable({
  disclosure,
}: Props) {

  const disputed =
    disclosure.liabilities.disputed_liabilities;

  return (

    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">

        <h2 className="text-xl font-bold">
          Disputed Liabilities
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="bg-slate-100">

              <th>Category</th>

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
              title="Liabilities in Dispute"
              data={disputed.liabilities_in_dispute}
            />

          </tbody>

        </table>

      </div>

    </div>

  );

}