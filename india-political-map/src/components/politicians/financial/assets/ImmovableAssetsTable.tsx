import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import ImmovableAssetRow from "./ImmovableAssetRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function ImmovableAssetsTable({
  disclosure,
}: Props) {

  const immovable =
    disclosure.assets.immovable_assets;

  return (

    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">

        <h2 className="text-xl font-bold">
          Immovable Assets
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

            <ImmovableAssetRow
              title="Agricultural Land"
              data={immovable.agricultural_land}
            />

            <ImmovableAssetRow
              title="Non Agricultural Land"
              data={immovable.non_agricultural_land}
            />

            <ImmovableAssetRow
              title="Commercial Buildings"
              data={immovable.commercial_buildings}
            />

            <ImmovableAssetRow
              title="Residential Buildings"
              data={immovable.residential_buildings}
            />

            <ImmovableAssetRow
              title="Others"
              data={immovable.others}
            />

            <tr className="bg-slate-200 font-bold">

              <td>Gross Total</td>

              <td>{immovable.gross_total_immovable.self.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.spouse.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.huf.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.dependent1.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.dependent2.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.dependent3.toLocaleString()}</td>

              <td>{immovable.gross_total_immovable.total.toLocaleString()}</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );
}