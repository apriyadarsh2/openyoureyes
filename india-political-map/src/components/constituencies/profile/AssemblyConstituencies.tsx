"use client";

import {
  Building2,
  ChevronRight,
} from "lucide-react";

import { AssemblyConstituency } from "../../types/constituency";

interface Props {
  assembly: AssemblyConstituency[];
}

export default function AssemblyConstituencies({
  assembly,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-8 py-6">

        <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
          Administrative Structure
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Assembly Constituencies
        </h2>

        <p className="mt-2 text-slate-500">
          This Lok Sabha constituency contains{" "}
          <span className="font-semibold text-slate-900">
            {assembly.length}
          </span>{" "}
          Assembly Constituencies.
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-5 p-8 md:grid-cols-2 xl:grid-cols-3">

        {assembly.map((item, index) => (

          <div
            key={index}
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-gradient-to-br
              from-white
              to-slate-50
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-lg
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">

                {String(index + 1).padStart(2, "0")}

              </div>

              <ChevronRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1"
              />

            </div>

            <div className="mt-5 flex items-start gap-3">

              <div className="rounded-xl bg-slate-100 p-2">

                <Building2
                  size={18}
                  className="text-slate-600"
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Assembly Segment
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}