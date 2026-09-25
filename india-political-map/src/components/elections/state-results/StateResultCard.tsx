"use client";

import { MapPinned, Trophy, Users } from "lucide-react";
import { StateResult } from "../../types/election";

interface Props {
  state: StateResult;
}

export default function StateResultCard({ state }: Props) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-politic-border bg-politic-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-black/50">
      
      {/* Top Details */}
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-politic-text group-hover:text-blue-400 transition-colors">
              {state.state}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-politic-muted">
              {state.total_seats} Lok Sabha {state.total_seats === 1 ? "Seat" : "Seats"}
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-inner">
            <MapPinned size={22} />
          </div>
        </div>

        {/* Alliance Results */}
        <div className="mt-6">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-politic-muted">
            <Trophy size={15} className="text-politic-accent" />
            Alliance Results
          </h3>

          <div className="space-y-2.5">
            {state.alliance_results.map((item) => (
              <div
                key={item.alliance}
                className="flex items-center justify-between rounded-xl border border-politic-border/50 bg-politic-inner px-3.5 py-2.5 transition hover:bg-politic-border/30"
              >
                <span className="text-sm font-medium text-politic-text">
                  {item.alliance}
                </span>

                <span className="rounded-md border border-white/5 bg-politic-card px-2.5 py-1 text-xs font-bold text-politic-text">
                  {item.seats} {item.seats === 1 ? "Seat" : "Seats"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Parties */}
        <div className="mt-6 border-t border-politic-border/60 pt-5">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-politic-muted">
            <Users size={15} className="text-blue-400" />
            Top Parties
          </h3>

          <div className="divide-y divide-politic-border/40">
            {state.top_parties.map((party) => (
              <div
                key={party.party}
                className="flex items-center justify-between py-2 text-sm"
              >
                <span className="font-medium text-politic-muted">
                  {party.party}
                </span>

                <span className="font-bold text-politic-text">
                  {party.seats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </article>
  );
}