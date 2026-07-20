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
        "NDA, INDIA and Others",
      href: `/elections/${year}/alliances`,
      icon: Users,
    },
    {
      title: "State Results",
      description:
        "State-wise seat distribution",
      href: `/elections/${year}/state-results`,
      icon: Map,
    },
    {
      title: "Victory Margins",
      description:
        "Largest and closest victories",
      href: `/elections/${year}/margins`,
      icon: BarChart3,
    },
    {
      title: "Voter Turnout",
      description:
        "National and State turnout",
      href: `/elections/${year}/turnout`,
      icon: Vote,
    },
  ];

  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold">
        Explore Election Data
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">

                <Icon
                  className="text-blue-600"
                  size={30}
                />

                <ArrowRight
                  className="text-slate-400"
                />

              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}