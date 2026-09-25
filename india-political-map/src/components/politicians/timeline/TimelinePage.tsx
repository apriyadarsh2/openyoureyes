"use client";

import { useMemo } from "react";
import { usePolitician } from "../context/PoliticianProvider";

import TimelineCard from "./TimelineCard";
import { buildTimeline } from "./TimelineUtils";

export default function TimelinePage() {
  const politician = usePolitician();

  const grouped = useMemo(() => {
    const events = buildTimeline(politician);

    const groupedEvents = events.reduce((acc, event) => {
      if (!acc[event.year]) {
        acc[event.year] = [];
      }
      acc[event.year].push(event);
      return acc;
    }, {} as Record<number, typeof events>);

    // Convert to array and sort descending so the newest events appear at the top
    return Object.entries(groupedEvents).sort(
      ([yearA], [yearB]) => Number(yearB) - Number(yearA)
    );
  }, [politician]);

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      
      {/* Inline Responsive Header (Replaces PageHeader) */}
      <div className="mb-10 border-b border-politic-border pb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-politic-text">
          Political <span className="text-politic-accent">Timeline</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-politic-muted">
          A chronological journey of the politician's life, elections, assets, and legal history.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mt-10 flex flex-col gap-8">
        {grouped.map(([year, events]) => (
          <TimelineCard
            key={year}
            year={Number(year)}
            events={events}
          />
        ))}
      </div>
      
    </main>
  );
}