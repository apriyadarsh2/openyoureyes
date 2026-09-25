"use client";

import { Building2, ChevronRight } from "lucide-react";
import { AssemblyConstituency } from "../../types/constituency";

interface Props {
  assembly: AssemblyConstituency[];
}

export default function AssemblyConstituencies({ assembly }: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-politic-border bg-politic-card shadow-sm">
      {/* Header */}
      <div className="border-b border-politic-border px-8 py-6">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Administrative Structure
        </p>
        <h2 className="mt-1 text-2xl font-bold text-politic-text">
          Assembly Constituencies
        </h2>
        <p className="mt-2 text-politic-muted">
          This Lok Sabha constituency contains{" "}
          <span className="font-semibold text-politic-text">
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
              border-politic-border
              bg-politic-inner
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/50
              hover:shadow-lg
              hover:shadow-black/50
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-bold text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </div>
              <ChevronRight
                size={18}
                className="text-politic-muted transition group-hover:translate-x-1"
              />
            </div>

            <div className="mt-5 flex items-start gap-3">
              <div className="rounded-xl border border-politic-border/50 bg-politic-card p-2">
                <Building2 size={18} className="text-politic-muted" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-politic-muted font-bold">
                  Assembly Segment
                </p>
                <h3 className="mt-1 text-lg font-semibold text-politic-text">
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