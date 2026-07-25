"use client";

import Link from "next/link";

import {
  ArrowRight,
  Award,
  Calendar,
  Flag,
  Landmark,
} from "lucide-react";

import { CurrentMP } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
}

export default function CurrentMPCard({
  mp,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">

        <div>

          <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
            Representation
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Current Member of Parliament
          </h2>

        </div>

        <Link
          href={`/politicians/${mp.id}`}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition-all
            hover:bg-blue-700
            hover:gap-3
          "
        >
          View Profile
          <ArrowRight size={18} />
        </Link>

      </div>

      {/* Profile */}

      <div className="flex flex-col gap-8 px-8 py-8 lg:flex-row lg:items-center">

        {/* Avatar */}

        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 text-4xl font-bold text-blue-700 shadow-inner">

          {mp.name.charAt(0)}

        </div>

        {/* Name */}

        <div className="flex-1">

          <h3 className="text-3xl font-bold tracking-tight">
            {mp.name}
          </h3>

          <p className="mt-2 text-lg text-slate-600">
            {mp.party.full_name}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {mp.party.abbreviation}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {mp.alliance}
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Current MP
            </span>

          </div>

        </div>

      </div>

      {/* Political Details */}

      <div className="border-t border-slate-100 bg-slate-50 px-8 py-7">

        <h3 className="mb-6 text-lg font-semibold">
          Political Details
        </h3>

        <div className="grid gap-4 md:grid-cols-2">

          <DetailRow
            icon={<Landmark size={18} />}
            label="Political Party"
            value={mp.party.full_name}
          />

          <DetailRow
            icon={<Flag size={18} />}
            label="Alliance"
            value={mp.alliance}
          />

          <DetailRow
            icon={<Calendar size={18} />}
            label="Elected"
            value={String(mp.elected_year)}
          />

          <DetailRow
            icon={<Award size={18} />}
            label="Status"
            value="Current Member of Parliament"
          />

        </div>

      </div>

    </section>
  );
}

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function DetailRow({
  icon,
  label,
  value,
}: DetailRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
          {icon}
        </div>

        <span className="text-slate-500">
          {label}
        </span>

      </div>

      <span className="max-w-[55%] text-right font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}