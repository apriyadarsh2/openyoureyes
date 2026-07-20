"use client";

import { ConstituencySummary } from "../types/constituency";

import ConstituencyRow from "./ConstituencyCard";

interface Props {
  constituencies: ConstituencySummary[];
  slug: string;
}

export default function ConstituencyList({
  constituencies,
  slug
}: Props) {
  return (
    <div className="grid
    gap-6

    md:grid-cols-2

    xl:grid-cols-3">

      {constituencies.map((item) => (

        <ConstituencyRow
          key={item.id}
          constituency={item}
          slug={slug}
        />

      ))}

    </div>
  );
}