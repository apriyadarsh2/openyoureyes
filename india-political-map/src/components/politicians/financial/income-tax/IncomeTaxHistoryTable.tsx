import {
  IncomeTaxHistory,
} from "@/src/components/types/financial-disclosure";

interface Props {
  history: IncomeTaxHistory[];
}

export default function IncomeTaxHistoryTable({
  history,
}: Props) {

  return (

    <table className="mt-4 w-full border-collapse">

      <thead>

        <tr className="border-b bg-slate-100">

          <th className="px-4 py-2 text-left">
            Financial Year
          </th>

          <th className="px-4 py-2 text-right">
            Total Income
          </th>

        </tr>

      </thead>

      <tbody>

        {history.map((item) => (

          <tr
            key={item.financial_year}
            className="border-b"
          >

            <td className="px-4 py-3">
              {item.financial_year}
            </td>

            <td className="px-4 py-3 text-right font-medium">

              ₹{" "}

              {item.total_income.toLocaleString("en-IN")}

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}