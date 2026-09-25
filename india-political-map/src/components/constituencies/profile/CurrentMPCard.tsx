"use client";

import Link from "next/link";
import { ArrowRight, Award, Calendar, Flag, Landmark } from "lucide-react";
import { CurrentMP } from "../../types/constituency";

interface Props {
  mp: CurrentMP;
}

export default function CurrentMPCard({ mp }: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-politic-border bg-politic-card shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-politic-border px-8 py-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            Representation
          </p>
          <h2 className="mt-1 text-2xl font-bold text-politic-text">
            Current Member of Parliament
          </h2>
        </div>

        <Link
          href={`/politicians/${mp.id}`}
          className="
            flex
            w-max
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition-all
            hover:bg-blue-500
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
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-4xl font-bold text-blue-400 shadow-inner">
          {mp.name.charAt(0)}
        </div>

        {/* Name */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold tracking-tight text-politic-text">
            {mp.name}
          </h3>
          <p className="mt-2 text-lg font-medium text-politic-muted">
            {mp.party.full_name}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-400">
              {mp.party.abbreviation}
            </span>
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400">
              {mp.alliance}
            </span>
            <span className="rounded-full border border-politic-border bg-politic-inner px-4 py-2 text-sm font-medium text-politic-text">
              Current MP
            </span>
          </div>
        </div>
      </div>

      {/* Political Details */}
      <div className="border-t border-politic-border bg-politic-inner/50 px-8 py-7">
        <h3 className="mb-6 text-lg font-semibold text-politic-text">
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

function DetailRow({ icon, label, value }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-politic-border/50 bg-politic-inner px-5 py-4 transition hover:bg-politic-border/30">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2 text-blue-400">
          {icon}
        </div>
        <span className="text-sm font-medium text-politic-muted">
          {label}
        </span>
      </div>

      <span className="max-w-[55%] text-right font-semibold text-politic-text">
        {value}
      </span>
    </div>
  );
}