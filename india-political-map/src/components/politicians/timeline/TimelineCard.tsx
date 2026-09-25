import TimelineYearBadge from "./TimelineYearBadge";
import TimelineEventRow from "./TimelineEventRow";
import { TimelineEvent } from "./TimelineTypes";

interface Props {
  year: number;
  events: TimelineEvent[];
}

export default function TimelineCard({ year, events }: Props) {
  return (
    <div className="relative flex flex-col gap-6 pb-10 md:flex-row">
      
      {/* Left timeline */}
      <div className="flex md:w-24 md:flex-col md:items-center">
        <TimelineYearBadge year={year} />
        {/* Dark mode timeline line */}
        <div className="mt-4 hidden w-[2px] flex-1 bg-politic-border md:block" />
      </div>

      {/* Right card */}
      <div
        className="
          flex-1
          overflow-hidden
          rounded-3xl
          border
          border-politic-border
          bg-politic-card
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/50
          hover:shadow-xl
          hover:shadow-black/50
        "
      >
        <div className="border-b border-politic-border bg-politic-inner/50 px-6 py-5">
          <h2 className="text-2xl font-black text-politic-text">
            {year}
          </h2>
        </div>

        <div className="divide-y divide-politic-border/50">
          {events.map((event, index) => (
            <TimelineEventRow key={index} event={event} />
          ))}
        </div>
      </div>
      
    </div>
  );
}