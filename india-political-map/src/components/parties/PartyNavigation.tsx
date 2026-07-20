"use client";

import Link from "next/link";
import { BarChart3, MapPinned, IndianRupee, Landmark } from "lucide-react";

interface Props {
  slug: string;
}

export default function PartyNavigation({
  slug,
}: Props) {
  const items = [
    {
      title: "Election History",
      href: `/parties/${slug}/elections`,
      icon: BarChart3,
    },
    {
      title: "State Presence",
      href: `/parties/${slug}/presence`,
      icon: MapPinned,
    },
    {
      title: "Finance",
      href: `/parties/${slug}/finance`,
      icon: IndianRupee,
    },
    {
      title: "Electoral Bonds",
      href: `/parties/${slug}/bonds`,
      icon: Landmark,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {items.map((item) => {

        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon
              size={28}
              className="mb-4 text-blue-600"
            />

            <h2 className="font-semibold text-lg">
              {item.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              View detailed analysis
            </p>

          </Link>
        );

      })}

    </div>
  );
}