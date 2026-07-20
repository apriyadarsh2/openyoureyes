import {
  MapPin,
  Users,
  Vote,
} from "lucide-react";

import { StateTurnout } from "../../../types/election";

interface Props {
  turnout: StateTurnout;
}

export default function TurnoutCard({
  turnout,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">

      <div className="flex items-center gap-2">

        <MapPin
          size={18}
          className="text-blue-600"
        />

        <h2 className="text-xl font-bold">
          {turnout.state}
        </h2>

      </div>

      <div className="mt-5 space-y-3 text-sm">

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Users size={16} />
            Electors
          </span>

          <strong>
            {turnout.electors.toLocaleString()}
          </strong>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Vote size={16} />
            Votes Cast
          </span>

          <strong>
            {turnout.votes_cast.toLocaleString()}
          </strong>
        </div>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">
          <span>Turnout</span>

          <strong>
            {turnout.turnout_percentage}%
          </strong>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-green-600"
            style={{
              width: `${turnout.turnout_percentage}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}