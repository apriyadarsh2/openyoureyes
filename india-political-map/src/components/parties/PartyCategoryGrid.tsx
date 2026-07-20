import { PartyCategory } from "../types/party";

import PartyCategoryCard from "./PartyCategoryCard";

interface Props {
  categories: PartyCategory[];
}

export default function PartyCategoryGrid({
  categories,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <PartyCategoryCard
          key={category.slug}
          category={category}
        />
      ))}
    </div>
  );
}