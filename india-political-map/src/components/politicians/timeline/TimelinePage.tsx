"use client";

import { useMemo } from "react";

import { usePolitician } from "../context/PoliticianProvider";

import PageHeader from "@/src/components/ui/PageHeader";

import TimelineCard from "./TimelineCard";

import { buildTimeline } from "./TimelineUtils";

export default function TimelinePage(){

    const politician =
        usePolitician();

    const grouped =
        useMemo(()=>{

            const events=
                buildTimeline(politician);

            return Object.entries(

                events.reduce((acc,event)=>{

                    if(!acc[event.year]){

                        acc[event.year]=[];

                    }

                    acc[event.year].push(event);

                    return acc;

                },{} as Record<number,typeof events>)

            );

        },[politician]);
        
   return (
  <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

    <PageHeader
      title="Political Timeline"
      subtitle="A chronological journey of the politician's life, elections, assets and legal history."
    />

    <div className="relative mt-10">

      {grouped.map(([year, events]) => (

        <TimelineCard
          key={year}
          year={Number(year)}
          events={events}
        />

      ))}

    </div>

  </div>
);
}