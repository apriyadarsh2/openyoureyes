"use client";

import Link from "next/link";

import {
  ArrowRight,
  Users,
  Map,
  BarChart3,
  Vote,
} from "lucide-react";

interface Props {
  year: number;
}

export default function ElectionNavigation({
  year,
}: Props) {

  const items = [
    {
      title: "Alliance Analysis",
      description:
        "Compare NDA, INDIA and other alliances with seats and vote share.",
      href: `/elections/${year}/alliances`,
      icon: Users,
      color:
        "from-blue-500 to-cyan-500",
      bg:
        "bg-blue-50",
    },
    {
      title: "State Results",
      description:
        "Explore state-wise seat distribution and winning parties.",
      href: `/elections/${year}/state-results`,
      icon: Map,
      color:
        "from-green-500 to-emerald-500",
      bg:
        "bg-green-50",
    },
    {
      title: "Victory Margins",
      description:
        "Largest victories, closest contests and winning margins.",
      href: `/elections/${year}/margins`,
      icon: BarChart3,
      color:
        "from-orange-500 to-red-500",
      bg:
        "bg-orange-50",
    },
    {
      title: "Voter Turnout",
      description:
        "National and state turnout with participation insights.",
      href: `/elections/${year}/turnout`,
      icon: Vote,
      color:
        "from-purple-500 to-pink-500",
      bg:
        "bg-purple-50",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Explore Election Data
        </h2>

        <p className="mt-2 text-slate-500">
          Dive deeper into this election
          through detailed analytics.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >

              {/* background glow */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-blue-100/30
                  blur-3xl
                "
              />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div
                    className={`
                      ${item.bg}
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                    `}
                  >

                    <div
                      className={`
                        rounded-xl
                        bg-gradient-to-br
                        ${item.color}
                        p-2
                        text-white
                      `}
                    >

                      <Icon size={22} />

                    </div>

                  </div>

                  <ArrowRight
                    size={22}
                    className="
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-blue-600
                    "
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 leading-7 text-slate-500">

                  {item.description}

                </p>

              </div>

            </Link>

          );

        })}

      </div>

    </section>
  );

}