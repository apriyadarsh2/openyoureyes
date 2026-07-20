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

export default function TimelineEventRow({
  event,
}: Props) {

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

    birth: "bg-indigo-100 text-indigo-700",

    education: "bg-purple-100 text-purple-700",

    election: "bg-blue-100 text-blue-700",

    asset: "bg-green-100 text-green-700",

    criminal: "bg-red-100 text-red-700",

  };

  return (

    <div
      className="
      flex
      flex-col
      gap-4

      p-5

      transition

      hover:bg-slate-50

      sm:flex-row
      "
    >

      <div
        className={`
        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        ${colors[event.type]}
        `}
      >

        <Icon size={20} />

      </div>

      <div className="flex-1">

        <div className="flex flex-wrap items-center gap-3">

          <h3 className="text-lg font-semibold">

            {event.title}

          </h3>

          <span
            className={`
            rounded-full

            px-3
            py-1

            text-xs
            font-semibold

            ${colors[event.type]}
            `}
          >

            {event.type.toUpperCase()}

          </span>

        </div>

        {event.subtitle && (

          <p className="mt-2 text-slate-500">

            {event.subtitle}

          </p>

        )}

        {event.value && (

          <p className="mt-3 font-semibold text-blue-700">

            {event.value}

          </p>

        )}

      </div>

    </div>

  );

}