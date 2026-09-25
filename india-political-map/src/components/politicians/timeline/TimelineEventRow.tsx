import {
  Calendar,
  GraduationCap,
  Landmark,
  Wallet,
  Scale,
} from "lucide-react";
import { TimelineEvent } from "./TimelineTypes";

interface Props {
  event: TimelineEvent;
}

export default function TimelineEventRow({ event }: Props) {
  const Icon =
    event.type === "birth"
      ? Calendar
      : event.type === "education"
      ? GraduationCap
      : event.type === "election"
      ? Landmark
      : event.type === "asset"
      ? Wallet
      : Scale;

  const colors = {
    birth: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    education: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    election: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    asset: "bg-green-500/10 text-green-400 border border-green-500/20",
    criminal: "bg-red-500/10 text-red-400 border border-red-500/20",
  };

  return (
    <div
      className="
        flex
        flex-col
        gap-5
        p-6
        transition
        hover:bg-politic-inner
        sm:flex-row
        sm:items-start
      "
    >
      <div
        className={`
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          ${colors[event.type]}
        `}
      >
        <Icon size={24} />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-politic-text">
            {event.title}
          </h3>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-bold
              tracking-wider
              ${colors[event.type]}
            `}
          >
            {event.type.toUpperCase()}
          </span>
        </div>

        {event.subtitle && (
          <p className="mt-2 text-base font-medium text-politic-muted">
            {event.subtitle}
          </p>
        )}

        {event.value && (
          <p className="mt-3 text-lg font-bold text-blue-400">
            {event.value}
          </p>
        )}
      </div>
    </div>
  );
}