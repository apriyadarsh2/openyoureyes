import { ConstituencyState } from "../types/constituency";

import StateCard from "./StateCard";

interface Props {
  states: ConstituencyState[];
}

export default function StateGrid({
  states,
}: Props) {
  return (
    <div
      className="
        grid
        gap-6

        grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      "
    >
      {states.map((state) => (
        <StateCard
          key={state.id}
          state={state}
        />
      ))}
    </div>
  );
}