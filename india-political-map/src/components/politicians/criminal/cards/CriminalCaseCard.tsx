"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Scale,
  Landmark,
  MapPin,
  Calendar,
  Hash,
} from "lucide-react";

import {
  CourtCase,
} from "@/src/components/types/politician";

interface Props {
  criminalCase: CourtCase;
}

export default function CriminalCaseCard({
  criminalCase,
}: Props) {

  const [expanded, setExpanded] =
    useState(false);

  const pending =
    criminalCase.status === "Pending";

  return (

    <div className="rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">

      {/* Header */}

      <div className="flex items-start justify-between p-6">

        <div>

          <div className="flex items-center gap-3">

            <Scale
              className="text-red-600"
              size={20}
            />

            <h3 className="text-lg font-semibold">

              {criminalCase.case_type}

            </h3>

          </div>

          <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-500">

            <span className="flex items-center gap-2">

              <Landmark size={16} />

              {criminalCase.court}

            </span>

            <span className="flex items-center gap-2">

              <MapPin size={16} />

              {criminalCase.state}

            </span>

            <span className="flex items-center gap-2">

              <Calendar size={16} />

              Filed {criminalCase.year_filed}

            </span>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold
            ${
              pending
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {criminalCase.status}
          </span>

          <button
            onClick={() =>
              setExpanded(!expanded)
            }
            className="rounded-lg border p-2 hover:bg-slate-100"
          >
            {expanded ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

        </div>

      </div>

      {/* Expand */}

      <div
        className={`overflow-hidden transition-all duration-500
        ${
          expanded
            ? "max-h-[700px]"
            : "max-h-0"
        }`}
      >

        <div className="border-t bg-slate-50 p-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <p className="mb-3 font-semibold">

                IPC Sections

              </p>

              <div className="flex flex-wrap gap-2">

                {criminalCase.ipc_sections.map(
                  (section) => (

                    <span
                      key={section}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {section}
                    </span>

                  )
                )}

              </div>

            </div>

            <div>

              <p className="mb-3 font-semibold">

                Details

              </p>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    Source ID

                  </span>

                  <span className="font-medium">

                    {criminalCase.case_id_source}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    Court

                  </span>

                  <span>

                    {criminalCase.court}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">

                    State

                  </span>

                  <span>

                    {criminalCase.state}

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}