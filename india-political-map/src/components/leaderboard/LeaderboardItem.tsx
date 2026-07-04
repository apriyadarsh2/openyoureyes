interface Props {
  rank: number;
  name: string;
  subtitle?: string;
  value: string;
}

export default function LeaderboardItem({
  rank,
  name,
  subtitle,
  value,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:shadow-md">

      <div className="flex items-center gap-4">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {rank}
        </div>

        <div>

          <h4 className="font-semibold text-slate-800">
            {name}
          </h4>

          {subtitle && (
            <p className="text-sm text-slate-500">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      <div className="text-right">

        <p className="font-bold text-slate-800">
          {value}
        </p>

      </div>

    </div>
  );
}