"use client";

import Link from "next/link";

import {
  ArrowRight,
  Building2,
} from "lucide-react";

import { PartyCategory } from "../types/party";

interface Props {
  category: PartyCategory;
}

export default function PartyCategoryCard({
  category,
}: Props) {

  return (
    <Link
      href={`/parties/${category.slug}`}
      className="block"
    >
      <div
        className="
          rounded-2xl
          border
          bg-white
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <div className="flex items-center justify-between">

          <Building2
            className="text-blue-600"
            size={34}
          />

          <ArrowRight
            className="text-slate-500"
          />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          {category.title}
        </h2>

        <p className="mt-2 text-slate-500">
          {category.count} Parties
        </p>

      </div>
    </Link>
  );
}