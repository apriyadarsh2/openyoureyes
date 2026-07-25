"use client";

import {
  CalendarRange,
  Vote,
  BarChart3,
  Landmark,
} from "lucide-react";

import { ElectionOverview } from "../types/election";

interface Props {
  overview: ElectionOverview;
}

const timeline = (
  overview: ElectionOverview,
) => [
  {
    title: "Polling Started",
    date: overview.polling_start,
    icon: CalendarRange,
    color: "bg-blue-500",
  },
  {
    title: "Polling Completed",
    date: overview.polling_end,
    icon: Vote,
    color: "bg-indigo-500",
  },
  {
    title: "Counting Day",
    date: overview.counting_date,
    icon: BarChart3,
    color: "bg-green-500",
  },
  {
    title: "Government Formed",
    date: overview.government_formed,
    icon: Landmark,
    color: "bg-purple-500",
  },
];

export default function ElectionTimeline({
  overview,
}: Props) {
  const items = timeline(overview);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Election Timeline
        </h2>

        <p className="mt-2 text-slate-500">
          Major milestones from polling
          to government formation.
        </p>
      </div>

      <div className="relative ml-3">
        {/* Vertical Line */}

        <div className="absolute left-4 top-3 h-full w-0.5 bg-slate-200" />

        <div className="space-y-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex items-start gap-5"
              >
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    shadow-md
                    ${item.color}
                  `}
                >
                  <Icon size={16} />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-md">
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    {item.date}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}