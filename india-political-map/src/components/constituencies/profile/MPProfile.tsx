"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CurrentMP } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
}

export default function MPProfile({ mp }: Props) {
  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-6">
      <div className="flex flex-col items-center text-center">
        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            text-4xl
            font-bold
            text-blue-400
            shadow-inner
          "
        >
          {mp.name.charAt(0)}
        </div>

        <h3 className="mt-5 text-2xl font-bold text-politic-text">
          {mp.name}
        </h3>

        <p className="mt-2 font-medium text-politic-muted">
          {mp.party.full_name}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-400">
            {mp.party.abbreviation}
          </span>
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-bold text-green-400">
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
            hover:bg-blue-500
          "
        >
          View Profile
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}