"use client";

import { useState } from "react";
import IndiaMap from "../map/IndiaMap";
import TimelineSlider from "../map/TimelineSlider";
import InfoPanel from "../map/InfoPanel";
import PartyLegend from "../map/PartyLegend";
import { getDataForYear } from "../../hooks/usePoliticalData";

export default function Home() {
  const [year, setYear] = useState(2024);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const data = getDataForYear(year);

  return (
    <main className="min-h-screen bg-gray-100 p-3 md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
        <div className="mb-3">
          <h1 className="text-2xl font-black text-gray-800">
            India Political Timeline
          </h1>
          <p className="text-sm text-gray-500">
            Explore how political power has shifted across India from 1947 to
            2026. Click any state to view details.
          </p>
        </div>

        {/* Timeline Slider */}
        <TimelineSlider year={year} setYear={setYear} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Map - takes most space */}
          <div className="lg:col-span-7">
            <IndiaMap
              yearData={data}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-3">
            <InfoPanel data={data} selectedState={selectedState} />
          </div>

          {/* Party Legend */}
          <div className="lg:col-span-2">
            <PartyLegend yearData={data} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-400">
          Data is approximate and based on historical records. State boundaries
          reflect modern administrative units.
        </div>
      </div>
    </main>
  );
}



