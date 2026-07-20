
import {
  AllianceCard as AllianceCardType,
} from "../../types/election";

import AllianceCard from "./AllianceCard";

interface Props {
  alliances: AllianceCardType[];
  year: number;
}

export default function AllianceGrid({
  alliances,
  year,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {alliances.map((alliance) => (
        <AllianceCard
          key={alliance.slug}
          alliance={alliance}
          year={year}
        />
      ))}

    </div>
  );
}