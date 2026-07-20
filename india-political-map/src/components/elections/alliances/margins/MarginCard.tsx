import {
  MapPin,
  User,
  Flag,
} from "lucide-react";

import { MarginResult } from "../../../types/election";

interface Props {
  result: MarginResult;
}

export default function MarginCard({
  result,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">

      <h2 className="text-xl font-bold">
        {result.constituency}
      </h2>

      <div className="mt-4 space-y-3">

        <div className="flex items-center gap-2">
          <MapPin
            size={18}
            className="text-slate-500"
          />

          {result.state}
        </div>

        <div className="flex items-center gap-2">
          <User
            size={18}
            className="text-slate-500"
          />

          {result.winner}
        </div>

        <div className="flex items-center gap-2">
          <Flag
            size={18}
            className="text-slate-500"
          />

          {result.party}
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-blue-50 p-4">

        <p className="text-sm text-slate-500">
          Victory Margin
        </p>

        <h3 className="mt-1 text-2xl font-bold text-blue-700">
          {result.margin.toLocaleString()}
        </h3>

      </div>

    </div>
  );
}