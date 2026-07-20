"use client";

import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Flag,
  Landmark,
  UserRound,
} from "lucide-react";

import { CurrentMP } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
}

export default function CurrentMPCard({
  mp,
}: Props) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Current Member of Parliament
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            People's Representative
          </h2>

        </div>

        <Link
          href={`/politicians/${mp.id}`}
          className="
            hidden
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

            md:flex
          "
        >
          View Profile

          <ArrowRight size={18} />
        </Link>

      </div>

      <div
        className="
          mt-8
          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-center
        "
      >

        {/* Avatar */}

        <div
          className="
            flex
            h-28
            w-28
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

        {/* Main */}

        <div className="flex-1">

          <h3 className="text-3xl font-bold">
            {mp.name}
          </h3>

          <p className="mt-2 text-lg text-slate-600">
            {mp.party.full_name}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {mp.party.abbreviation}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {mp.alliance}
            </span>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          mt-10
          grid
          gap-5

          md:grid-cols-3
        "
      >

        <InfoCard
          icon={<Calendar className="text-blue-600" />}
          label="Elected"
          value={mp.elected_year}
        />

        <InfoCard
          icon={<Flag className="text-green-600" />}
          label="Political Party"
          value={mp.party.abbreviation}
        />

        <InfoCard
          icon={<Landmark className="text-purple-600" />}
          label="Alliance"
          value={mp.alliance}
        />

      </div>

      <Link
        href={`/politicians/${mp.id}`}
        className="
          mt-8
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-5
          py-4
          font-medium
          text-white

          md:hidden
        "
      >
        View Profile

        <ArrowRight size={18} />
      </Link>

    </section>
  );
}

interface CardProps {
  icon: React.ReactNode;

  label: string;

  value: string | number;
}

function InfoCard({
  icon,
  label,
  value,
}: CardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        bg-slate-50
        p-5
      "
    >
      <div className="flex items-center gap-3">

        {icon}

        <div>

          <p className="text-sm text-slate-500">
            {label}
          </p>

          <h3 className="font-semibold">
            {value}
          </h3>

        </div>

      </div>
    </div>
  );
}