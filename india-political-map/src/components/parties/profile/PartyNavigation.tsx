"use client";

import Link from "next/link";

import {
  ArrowRight,
  IndianRupee,
  Landmark,
} from "lucide-react";

interface Props {
  identifier: string;
}

export default function PartyNavigation({
  identifier,
}: Props) {
  const items = [
    {
      title: "Party Finance",
      description:
        "Explore annual income, expenditure, contributions and available financial disclosures.",
      href: `/parties/${identifier}/finance`,
      icon: IndianRupee,
      iconClass:
        "bg-emerald-500/10 text-emerald-400",
      borderClass:
        "hover:border-emerald-500/40",
    },
    {
      title: "Electoral Bonds",
      description:
        "Explore electoral bond records associated with this political party.",
      href: `/parties/${identifier}/bonds`,
      icon: Landmark,
      iconClass:
        "bg-amber-500/10 text-amber-400",
      borderClass:
        "hover:border-amber-500/40",
    },
  ];

  return (
    <section className="space-y-5">

      {/* Heading */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          Explore More
        </h2>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Explore financial and funding information available
          for this party.
        </p>
      </div>

      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`
                group
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-5
                shadow-lg
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-xl
                ${item.borderClass}
                sm:p-6
              `}
            >

              <div className="flex items-start justify-between">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    ${item.iconClass}
                  `}
                >
                  <Icon size={23} />
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-slate-800/70
                    text-slate-500
                    transition
                    group-hover:bg-slate-700
                    group-hover:text-white
                  "
                >
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>

            </Link>
          );
        })}
      </div>

    </section>
  );
}