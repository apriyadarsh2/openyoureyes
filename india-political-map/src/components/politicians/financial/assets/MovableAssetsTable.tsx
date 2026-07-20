import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import MovableAssetRow from "./MovableAssetRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function MovableAssetsTable({
  disclosure,
}: Props) {

  const movable =
    disclosure.assets.movable_assets;

  return (

    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">

        <h2 className="text-xl font-bold">
          Movable Assets
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="bg-slate-100">

              <th>Asset</th>

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

            <MovableAssetRow
              title="Cash in Hand"
              data={movable.cash_in_hand}
            />

            <MovableAssetRow
              title="Bank Deposits"
              data={movable.bank_deposits}
            />

            <MovableAssetRow
              title="Investments"
              data={movable.investments_bonds_shares}
            />

            <MovableAssetRow
              title="Savings & Insurance"
              data={movable.savings_and_insurance}
            />

            <MovableAssetRow
              title="Loans Given"
              data={movable.personal_loans_given}
            />

            <MovableAssetRow
              title="Motor Vehicles"
              data={movable.motor_vehicles}
            />

            <MovableAssetRow
              title="Jewellery"
              data={movable.jewellery}
            />

            <MovableAssetRow
              title="Other Assets"
              data={movable.other_assets}
            />

            <tr className="bg-slate-200 font-bold">

              <td>Gross Total</td>

              <td>{movable.gross_total_movable.self.toLocaleString()}</td>

              <td>{movable.gross_total_movable.spouse.toLocaleString()}</td>

              <td>{movable.gross_total_movable.huf.toLocaleString()}</td>

              <td>{movable.gross_total_movable.dependent1.toLocaleString()}</td>

              <td>{movable.gross_total_movable.dependent2.toLocaleString()}</td>

              <td>{movable.gross_total_movable.dependent3.toLocaleString()}</td>

              <td>{movable.gross_total_movable.total.toLocaleString()}</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );
}