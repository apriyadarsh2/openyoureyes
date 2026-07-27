"use client";

import Link from "next/link";

import {
  ArrowRight,
  MapPinned,
  IndianRupee,
  Landmark,
} from "lucide-react";

interface Props {
  slug: string;
}

export default function PartyNavigation({
  slug,
}: Props) {

  const items = [
    {
      title: "State Presence",
      description:
        "Lok Sabha, Rajya Sabha and State Legislature representation.",
      href: `/parties/${slug}/presence`,
      icon: MapPinned,
    },
    {
      title: "Finance",
      description:
        "Annual income, expenditure and financial disclosures.",
      href: `/parties/${slug}/finance`,
      icon: IndianRupee,
    },
    {
      title: "Electoral Bonds",
      description:
        "Electoral bond donations and funding history.",
      href: `/parties/${slug}/bonds`,
      icon: Landmark,
    },
  ];

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Explore More
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Dive deeper into the party's political presence,
          finances and funding information.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">

                <div className="rounded-xl bg-blue-50 p-3">

                  <Icon
                    size={26}
                    className="text-blue-600"
                  />

                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />

              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

            </Link>
          );

        })}

      </div>

    </section>
  );
}