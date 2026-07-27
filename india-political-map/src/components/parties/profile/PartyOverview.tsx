"use client";

import { PartyProfile } from "../../types/party";

interface Props {
  party: PartyProfile;
}

export default function PartyOverview({ party }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        
        {/* Core Info - Fluid Row */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <Info label="Leader" value={party.overview.leader} />
          <Info 
            label="Political Position" 
            value={party.overview.political_position ?? "-"} 
          />
          <Info 
            label="Recognition" 
            value={party.overview.recognition ?? "-"} 
          />
        </div>

        {/* Divider for mobile only */}
        <div className="h-px w-full bg-slate-100 md:hidden" />

        {/* Ideologies - Right Aligned on Desktop */}
        <div className="flex flex-col gap-1.5 md:min-w-[200px] md:items-end">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 md:text-right">
            Ideology
          </span>
          <div className="flex flex-wrap gap-1.5 md:justify-end">
            {party.overview.ideology?.length ? (
              party.overview.ideology.map((item: string) => (
                <span
                  key={item}
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-sm font-medium text-slate-900">-</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </span>
      <span className="text-sm font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}