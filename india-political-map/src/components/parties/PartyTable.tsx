"use client";

import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { PartyResponse } from "../types/parties";

interface Props {
  parties: PartyResponse[];
}

function getPartyTypeStyles(type: string | null) {
  switch (type?.trim().toUpperCase()) {
    case "NATIONAL":
      return {
        badge: "border-indigo-400/20 bg-indigo-500/10 text-indigo-300",
        dot: "bg-indigo-400",
        label: "National",
      };
    case "STATE":
      return {
        badge: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
        dot: "bg-emerald-400",
        label: "State",
      };
    case "REGISTERED":
      return {
        badge: "border-amber-400/20 bg-amber-500/10 text-amber-300",
        dot: "bg-amber-400",
        label: "Registered",
      };
    case "IND":
      return {
        badge: "border-slate-400/20 bg-slate-500/10 text-slate-300",
        dot: "bg-slate-400",
        label: "Independent",
      };
    default:
      return {
        badge: "border-slate-400/20 bg-slate-500/10 text-slate-300",
        dot: "bg-slate-400",
        label: type || "Unknown",
      };
  }
}

export default function PartyTable({ parties }: Props) {
  if (!parties.length) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          px-6
          py-14
          text-center
          shadow-lg
        "
      >
        <Building2 size={34} className="mx-auto text-slate-500" />
        <h3 className="mt-4 text-lg font-semibold text-white">
          No parties found
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)]">
          There are no political parties available for this request.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-lg
      "
    >
      {/* Mobile helper */}
      <div className="border-b border-[var(--border)] px-4 py-3 sm:hidden">
        <p className="text-xs text-slate-500">
          Swipe horizontally to view all columns
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          {/* Header */}
          <thead>
            <tr className="border-b border-[var(--border)] bg-[#202638] text-left">
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:px-6">
                Party
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Abbreviation
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Type
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Hindi Name
              </th>
              <th className="w-12 px-5 py-4">
                <span className="sr-only">Open</span>
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {parties.map((party) => {
              const typeStyles = getPartyTypeStyles(party.party_type);

              return (
                <tr
                  key={party.id}
                  className="
                    group
                    border-b
                    border-[var(--border)]
                    last:border-b-0
                    transition-colors
                    hover:bg-[#20283A]
                  "
                >
                  {/* Party */}
                  <td className="px-5 py-5 sm:px-6">
                    <Link
                      href={`/parties/${party.id}`}
                      className="block"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-slate-700
                            bg-slate-800/70
                            text-xs
                            font-bold
                            text-slate-300
                            transition
                            group-hover:border-indigo-400/30
                            group-hover:bg-indigo-500/10
                            group-hover:text-indigo-300
                          "
                        >
                          {party.abbreviation?.slice(0, 3).toUpperCase() || "—"}
                        </div>

                        <div className="min-w-0">
                          <div
                            className="
                              max-w-[280px]
                              truncate
                              font-semibold
                              text-slate-100
                              transition
                              group-hover:text-indigo-300
                            "
                            title={party.full_name_en || undefined}
                          >
                            {party.full_name_en || "Unnamed Party"}
                          </div>
                          
                          
                        </div>
                      </div>
                    </Link>
                  </td>

                  {/* Abbreviation */}
                  <td className="px-5 py-5">
                    <span
                      className="
                        inline-flex
                        rounded-lg
                        border
                        border-slate-700
                        bg-slate-800/60
                        px-2.5
                        py-1
                        text-xs
                        font-semibold
                        tracking-wide
                        text-slate-300
                      "
                    >
                      {party.abbreviation || "—"}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-5 py-5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        whitespace-nowrap
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        ${typeStyles.badge}
                      `}
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          ${typeStyles.dot}
                        `}
                      />
                      {typeStyles.label}
                    </span>
                  </td>

                  {/* Hindi */}
                  <td className="px-5 py-5">
                    <span
                      className="
                        block
                        max-w-[260px]
                        truncate
                        text-sm
                        text-slate-400
                      "
                      title={party.full_name_hi || undefined}
                    >
                      {party.full_name_hi || "—"}
                    </span>
                  </td>

                  {/* Arrow */}
                  <td className="px-5 py-5">
                    <Link
                      href={`/parties/${party.id}`}
                      aria-label={`View ${party.full_name_en || "party"}`}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-500
                        transition
                        hover:bg-indigo-500/10
                        hover:text-indigo-300
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        className="
                          transition-transform
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}