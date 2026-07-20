interface Props {
  insights: string[];
}

export default function InsightCard({
  insights,
}: Props) {
  if (insights.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Insights
      </h2>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl bg-blue-50 p-4"
          >
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {index + 1}
            </div>

            <p className="leading-7 text-slate-700">
              {insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}