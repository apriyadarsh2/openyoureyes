import TimelineYearBadge from "./TimelineYearBadge";
import TimelineEventRow from "./TimelineEventRow";
import { TimelineEvent } from "./TimelineTypes";

interface Props {
  year: number;
  events: TimelineEvent[];
}

export default function TimelineCard({
  year,
  events,
}: Props) {

  return (

    <div className="relative flex flex-col gap-6 pb-10 md:flex-row">

      {/* Left timeline */}

      <div className="flex md:w-24 md:flex-col md:items-center">

        <TimelineYearBadge year={year} />

        <div className="ml-8 hidden w-1 flex-1 bg-slate-200 md:block" />

      </div>

      {/* Right card */}

      <div
        className="
        flex-1

        rounded-3xl

        border

        bg-white

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
        "
      >

        <div className="border-b bg-slate-50 px-5 py-4">

          <h2 className="text-xl font-bold">

            {year}

          </h2>

        </div>

        <div className="divide-y">

          {events.map((event, index) => (

            <TimelineEventRow
              key={index}
              event={event}
            />

          ))}

        </div>

      </div>

    </div>

  );

}