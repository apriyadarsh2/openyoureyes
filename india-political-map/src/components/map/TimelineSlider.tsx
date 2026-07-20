"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  year: number;
  setYear: (year: number) => void;
}

const ERAS = [
  { from: 1947, to: 1964, label: "Nehru Era", color: "#1565C0" },
  { from: 1964, to: 1977, label: "Congress Dominance", color: "#1976D2" },
  { from: 1977, to: 1980, label: "Janata", color: "#F57F17" },
  { from: 1980, to: 1989, label: "Indira / Rajiv", color: "#1565C0" },
  { from: 1989, to: 1999, label: "Coalition Era", color: "#558B2F" },
  { from: 1999, to: 2004, label: "NDA-I", color: "#FF6D00" },
  { from: 2004, to: 2014, label: "UPA Era", color: "#1565C0" },
  { from: 2014, to: 2026, label: "Modi Era", color: "#FF6D00" },
];

const DECADE_MARKS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

export default function TimelineSlider({ year, setYear }: Props) {
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const yearRef = useRef(year);
  yearRef.current = year;

  useEffect(() => {
    if (playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        const current = yearRef.current;
        if (current >= 2026) {
          setPlaying(false);
        } else {
          setYear(current + 1);
        }
      }, 700);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, setYear]);

  const currentEra =
    ERAS.find((e) => year >= e.from && year < e.to) || ERAS[ERAS.length - 1];
  const pct = ((year - 1947) / (2026 - 1947)) * 100;

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <div className="flex items-center gap-4 mb-3">
        {/* Play/Pause */}
        <button
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 rounded-full text-white flex items-center justify-center text-base font-bold hover:opacity-90 transition flex-shrink-0 shadow"
          style={{ background: currentEra.color }}
        >
          {playing ? "⏸" : "▶"}
        </button>

        {/* Year and Era */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-4xl font-black text-gray-800 leading-none">
              {year}
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
              style={{ background: currentEra.color }}
            >
              {currentEra.label}
            </span>
          </div>
        </div>

        {/* Step buttons */}
        <div className="flex gap-1 flex-shrink-0">
          <button
            onClick={() => setYear(Math.max(1947, year - 1))}
            className="w-8 h-8 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-sm"
          >
            ◀
          </button>
          <button
            onClick={() => setYear(Math.min(2026, year + 1))}
            className="w-8 h-8 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-sm"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min="1947"
          max="2026"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full h-2 rounded cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${currentEra.color} ${pct}%, #E5E7EB ${pct}%)`,
          }}
        />

        {/* Decade markers */}
        <div className="relative mt-1 h-5">
          {DECADE_MARKS.map((y) => {
            const leftPct = ((y - 1947) / (2026 - 1947)) * 100;
            return (
              <button
                key={y}
                onClick={() => setYear(y)}
                className="absolute text-xs text-gray-400 hover:text-gray-700 transform -translate-x-1/2 transition-colors"
                style={{ left: `${leftPct}%` }}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Era progress bar */}
      <div className="mt-2 flex rounded overflow-hidden h-1.5 gap-px">
        {ERAS.map((era) => {
          const width = ((era.to - era.from) / (2026 - 1947)) * 100;
          const isActive = year >= era.from && (era.to === 2026 ? year <= era.to : year < era.to);
          return (
            <button
              key={era.label}
              title={`${era.label} (${era.from}–${era.to})`}
              onClick={() => setYear(era.from)}
              className="h-full transition-opacity hover:opacity-90"
              style={{
                width: `${width}%`,
                background: era.color,
                opacity: isActive ? 1 : 0.35,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
