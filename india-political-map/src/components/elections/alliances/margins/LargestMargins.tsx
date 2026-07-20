import { MarginResult } from "../../../types/election";

import MarginCard from "./MarginCard";

interface Props {
  results: MarginResult[];
}

export default function LargestMargins({
  results,
}: Props) {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          Largest Victories
        </h2>

        <p className="mt-2 text-slate-500">
          Constituencies won by the biggest margins.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {results.map((result) => (
          <MarginCard
            key={`${result.constituency}-${result.margin}`}
            result={result}
          />
        ))}

      </div>

    </section>
  );
}