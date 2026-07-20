import { StateResult } from "../../../types/election";

import StateResultCard from "./StateResultCard";

interface Props {
  states: StateResult[];
}

export default function StateResultsGrid({
  states,
}: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {states.map((state) => (
        <StateResultCard
          key={state.state}
          state={state}
        />
      ))}
    </div>
  );
}