interface Props {
  year: number;
}

export default function TimelineYearBadge({ year }: Props) {
  return (
    <div
      className="
        flex
        h-16
        w-16
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        text-lg
        font-black
        text-blue-400
        shadow-[0_0_15px_rgba(59,130,246,0.15)]
      "
    >
      {year}
    </div>
  );
}