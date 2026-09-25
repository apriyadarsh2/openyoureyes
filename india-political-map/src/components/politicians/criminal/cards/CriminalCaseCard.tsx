"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Scale,
  Landmark,
  MapPin,
  Calendar,
} from "lucide-react";

import { CourtCase } from "@/src/components/types/politician";

interface Props {
  criminalCase: CourtCase;
}

export default function CriminalCaseCard({ criminalCase }: Props) {
  const [expanded, setExpanded] = useState(false);
  const pending = criminalCase.status === "Pending";

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card shadow-sm transition hover:shadow-lg">
      
      {/* Header */}
      <div className="flex items-start justify-between p-6">
        <div>
          <div className="flex items-center gap-3">
            <Scale className="text-red-500" size={20} />
            <h3 className="text-lg font-semibold text-politic-text">
              {criminalCase.case_type}
            </h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-5 text-sm text-politic-muted">
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
          {/* Dark Mode Optimized Status Badge */}
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold border
            ${
              pending
                ? "bg-red-500/10 text-red-400 border-red-500/20"
                : "bg-green-500/10 text-green-400 border-green-500/20"
            }`}
          >
            {criminalCase.status}
          </span>

          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-lg border border-politic-border p-2 text-politic-muted transition hover:bg-politic-border/30 hover:text-politic-text"
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expand */}
      <div
        className={`overflow-hidden transition-all duration-500
        ${expanded ? "max-h-[700px]" : "max-h-0"}`}
      >
        <div className="border-t border-politic-border bg-politic-inner p-6">
          <div className="grid gap-6 md:grid-cols-2">
            
            <div>
              <p className="mb-3 font-semibold text-politic-text">
                IPC Sections
              </p>
              <div className="flex flex-wrap gap-2">
                {criminalCase.ipc_sections.map((section) => (
                  <span
                    key={section}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                  >
                    {section}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 font-semibold text-politic-text">
                Details
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-politic-muted">Source ID</span>
                  <span className="font-medium text-politic-text">
                    {criminalCase.case_id_source}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-politic-muted">Court</span>
                  <span className="text-politic-text">
                    {criminalCase.court}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-politic-muted">State</span>
                  <span className="text-politic-text">
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