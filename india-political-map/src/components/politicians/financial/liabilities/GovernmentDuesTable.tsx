import {
  FinancialDisclosure,
} from "@/src/components/types/financial-disclosure";

import LiabilityRow from "./LiabilityRow";

interface Props {
  disclosure: FinancialDisclosure;
}

export default function GovernmentDuesTable({
  disclosure,
}: Props) {

  const dues =
    disclosure.liabilities.government_dues;

  return (

    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">

        <h2 className="text-xl font-bold">
          Government Dues
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="bg-slate-100">

              <th>Dues</th>

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
              title="Government Accommodation"
              data={dues.government_accommodation}
            />

            <LiabilityRow
              title="Water Supply"
              data={dues.water_supply}
            />

            <LiabilityRow
              title="Electricity Supply"
              data={dues.electricity_supply}
            />

            <LiabilityRow
              title="Telephones"
              data={dues.telephones}
            />

            <LiabilityRow
              title="Government Transport"
              data={dues.government_transport}
            />

            <LiabilityRow
              title="Income Tax"
              data={dues.income_tax_dues}
            />

            <LiabilityRow
              title="GST"
              data={dues.gst_dues}
            />

            <LiabilityRow
              title="Property Tax"
              data={dues.property_tax_dues}
            />

            <LiabilityRow
              title="Other Dues"
              data={dues.any_other_dues}
            />

            <tr className="bg-slate-200 font-bold">

              <td>Grand Total</td>

              <td>{dues.grand_total_govt_dues.self.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.spouse.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.huf.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.dependent1.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.dependent2.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.dependent3.toLocaleString()}</td>

              <td>{dues.grand_total_govt_dues.total.toLocaleString()}</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}