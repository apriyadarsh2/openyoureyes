"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { PartySummary } from "../types/party";

interface Props {
  parties: PartySummary[];
}

export default function PartyTable({
  parties,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b bg-slate-50">

            <tr className="text-left text-sm font-semibold text-slate-600">

              <th className="px-6 py-4">
                Party
              </th>

              <th className="px-6 py-4">
                Type
              </th>

              <th className="px-6 py-4 text-center">
                LS Seats
              </th>

              <th className="px-6 py-4 text-center">
                RS Seats
              </th>

              <th className="px-6 py-4 text-center">
                VS Seats
              </th>

              <th className="px-6 py-4 text-center">
                Contested
              </th>

              <th className="px-6 py-4 text-center">
                Active
              </th>

              <th className="px-6 py-4"></th>

            </tr>

          </thead>

          <tbody>

            {parties.map((party) => (

              <tr
                key={party.slug}
                className="
                  group
                  border-b
                  transition
                  hover:bg-blue-50/60
                "
              >

                {/* Party */}

                <td className="px-6 py-5">

                  <Link
                    href={`/parties/${party.slug}`}
                    className="block"
                  >

                    <div className="font-semibold text-slate-900 group-hover:text-blue-700">
                      {party.party}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      {party.abbreviation}
                    </div>

                  </Link>

                </td>

                {/* Type */}

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      party.type === "National"
                        ? "bg-blue-100 text-blue-700"
                        : party.type === "State"
                        ? "bg-green-100 text-green-700"
                        : party.type === "Historical"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {party.type}
                  </span>

                </td>

                {/* LS */}

                <td className="px-6 py-5 text-center font-semibold">
                  {party.lok_sabha}
                </td>

                {/* RS */}

                <td className="px-6 py-5 text-center font-semibold">
                  {party.rajya_sabha}
                </td>

                {/* VS */}

                <td className="px-6 py-5 text-center font-semibold">
                  {party.assembly_seats}
                </td>

                {/* Contested */}

                <td className="px-6 py-5 text-center">
                  {party.contested}
                </td>

                {/* Active */}

                <td className="px-6 py-5 text-center">

                  {party.active ? (

                    <CheckCircle2
                      size={20}
                      className="mx-auto text-green-600"
                    />

                  ) : (

                    <XCircle
                      size={20}
                      className="mx-auto text-red-500"
                    />

                  )}

                </td>

                {/* Arrow */}

                <td className="px-6 py-5">

                  <ArrowUpRight
                    size={18}
                    className="
                      ml-auto
                      text-slate-400
                      transition
                      group-hover:text-blue-600
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}