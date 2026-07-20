interface Props {
  title: string;

  description: string;

  amount: number;
}

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function DetailCard({
  title,
  description,
  amount,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

      <div className="flex items-start justify-between gap-5">

        <div className="space-y-2">

          <h4 className="font-semibold text-slate-900">
            {title}
          </h4>

          <p className="text-sm leading-6 text-slate-600">
            {description}
          </p>

        </div>

        <div className="shrink-0 rounded-lg bg-blue-50 px-4 py-2">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Amount
          </p>

          <p className="mt-1 font-bold text-blue-700">
            ₹ {formatAmount(amount)}
          </p>

        </div>

      </div>

    </div>
  );
}