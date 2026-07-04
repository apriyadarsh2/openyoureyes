import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
  election: PoliticianElection;
}

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function AssetsCard({
  election,
}: Props) {
  const { assets } = election;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">
          {election.election.year}
        </h3>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {election.party.abbreviation}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <Row
          label="Net Assets"
          value={formatCurrency(assets.net_assets_inr)}
        />

        <Row
          label="Total Assets"
          value={formatCurrency(assets.total_assets_inr)}
        />

        <Row
          label="Liabilities"
          value={formatCurrency(assets.total_liabilities_inr)}
        />

        <Row
          label="Movable Assets"
          value={formatCurrency(
            assets.movable_assets_inr ?? 0
          )}
        />

        <Row
          label="Immovable Assets"
          value={formatCurrency(
            assets.immovable_assets_inr ?? 0
          )}
        />

        <Row
          label="Cash"
          value={formatCurrency(
            assets.cash_inr ?? 0
          )}
        />
      </div>
    </div>
  );
}

interface RowProps {
  label: string;
  value: string;
}

function Row({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}