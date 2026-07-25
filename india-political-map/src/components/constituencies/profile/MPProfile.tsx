"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { CurrentMP } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
}

export default function MPProfile({
  mp,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">

      <div className="flex flex-col items-center text-center">

        <div
          className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          text-4xl
          font-bold
          text-white
        "
        >
          {mp.name.charAt(0)}
        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {mp.name}
        </h3>

        <p className="mt-2 text-slate-600">
          {mp.party.full_name}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {mp.party.abbreviation}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {mp.alliance}
          </span>

        </div>

        <Link
          href={`/politicians/${mp.id}`}
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-blue-700
        "
        >
          View Profile

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}