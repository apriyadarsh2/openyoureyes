
"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  year: number;
  setYear: (year: number) => void;
}

const ERAS = [
  { from: 1947, to: 1964, label: "Nehru", color: "#3B82F6" },
  { from: 1964, to: 1977, label: "Congress", color: "#60A5FA" },
  { from: 1977, to: 1980, label: "Janata", color: "#F59E0B" },
  { from: 1980, to: 1989, label: "Indira/Rajiv", color: "#3B82F6" },
  { from: 1989, to: 1999, label: "Coalition", color: "#10B981" },
  { from: 1999, to: 2004, label: "NDA-I", color: "#F97316" },
  { from: 2004, to: 2014, label: "UPA", color: "#3B82F6" },
  { from: 2014, to: 2026, label: "Modi", color: "#F97316" },
];

export default function TimelineSlider({ year, setYear }: Props) {
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const yearRef = useRef(year);
  yearRef.current = year;

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        if (yearRef.current >= 2026) setPlaying(false);
        else setYear(yearRef.current + 1);
      }, 700);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, setYear]);

  const currentEra = ERAS.find((e) => year >= e.from && year < e.to) || ERAS[ERAS.length - 1];
  const pct = ((year - 1947) / (2026 - 1947)) * 100;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Play/Pause Button - Using internal dynamic color */}
          <button
            onClick={() => setPlaying(!playing)}
            className="w-6 h-6 rounded-full text-white flex items-center justify-center text-[10px] font-bold shadow-sm transition-transform hover:scale-105"
            style={{ background: currentEra.color }}
          >
            {playing ? "⏸" : "▶"}
          </button>
          
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-politic-text tracking-tight leading-none">{year}</span>
            {/* Era Badge - Using internal dynamic color */}
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white uppercase tracking-wider leading-none shadow-sm"
              style={{ background: currentEra.color }}
            >
              {currentEra.label}
            </span>
          </div>
        </div>

        <div className="flex gap-1.5">
          {/* Prev Button - Updated to global classes */}
          <button
            onClick={() => setYear(Math.max(1947, year - 1))}
            className="w-5 h-5 bg-politic-base border border-politic-border rounded flex items-center justify-center text-[10px] text-politic-muted hover:text-politic-text hover:bg-white/10 transition-colors"
          >
            ◀
          </button>
          {/* Next Button - Updated to global classes */}
          <button
            onClick={() => setYear(Math.max(2026, year + 1))}
            className="w-5 h-5 bg-politic-base border border-politic-border rounded flex items-center justify-center text-[10px] text-politic-muted hover:text-politic-text hover:bg-white/10 transition-colors"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="relative pt-0.5">
        {/* Slider Input - Gradient untouched, base color updated */}
        <input
          type="range"
          min="1947"
          max="2026"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full h-1.5 rounded-full cursor-pointer appearance-none bg-politic-base"
          style={{ background: `linear-gradient(to right, ${currentEra.color} ${pct}%, #101827 ${pct}%)` }}
        />
      </div>
    </div>
  );
}