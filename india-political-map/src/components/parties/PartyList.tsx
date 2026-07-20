"use client";

import Link from "next/link";

import {
  ArrowRight,
  Users,
} from "lucide-react";

import { PartySummary } from "../types/party";

interface Props {
  parties: PartySummary[];
}

export default function PartyList({
  parties,
}: Props) {

  return (
    <div className="space-y-5">

      {parties.map((party) => (

        <Link
          key={party.id}
          href={`/parties/${party.slug}`}
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

              <div>

                <h2 className="text-2xl font-bold">
                  {party.party}
                </h2>

                <p className="mt-1 text-slate-500">
                  {party.abbreviation}
                </p>

              </div>

              <ArrowRight className="text-blue-600" />

            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div>

                <p className="text-sm text-slate-500">
                  Leader
                </p>

                <p className="font-semibold">
                  {party.leader}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Lok Sabha
                </p>

                <p className="font-semibold">
                  {party.lok_sabha ?? "—"}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Rajya Sabha
                </p>

                <p className="font-semibold">
                  {party.rajya_sabha ?? "—"}
                </p>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>
  );
}