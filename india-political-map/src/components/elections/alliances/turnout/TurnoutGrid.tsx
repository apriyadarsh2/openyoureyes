"use client";

import { StateTurnout } from "../../../types/election";

import TurnoutCard from "./TurnoutCard";

interface Props {
  states: StateTurnout[];
}

export default function TurnoutGrid({
  states,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {states.map((state) => (
        <TurnoutCard
          key={state.state}
          turnout={state}
        />
      ))}

    </div>
  );
}