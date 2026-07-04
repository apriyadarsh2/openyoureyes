"use client";

interface Props {
  year: number;
  setYear: (year: number) => void;
}

export default function TimelineSlider({
  year,
  setYear,
}: Props) {
  return (
    <div className="p-4">
      <input
        type="range"
        min="1947"
        max="2026"
        value={year}
        onChange={(e) =>
          setYear(Number(e.target.value))
        }
        className="w-full"
      />

      <div className="text-center text-xl font-bold">
        {year}
      </div>
    </div>
  );
}