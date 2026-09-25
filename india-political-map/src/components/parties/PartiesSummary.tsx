interface Props {
  summary: {
    national_parties: number;
    state_parties: number;
    registered_parties: number;
  };
}

export default function PartiesSummary({
  summary,
}: Props) {
  const cards = [
    {
      title: "National Parties",
      value: summary.national_parties,
      description: "Recognised at the national level",
      accent: "bg-indigo-500",
      glow: "bg-indigo-500/10",
    },
    {
      title: "State Parties",
      value: summary.state_parties,
      description: "Recognised at the state level",
      accent: "bg-emerald-500",
      glow: "bg-emerald-500/10",
    },
    {
      title: "Registered Parties",
      value: summary.registered_parties,
      description: "Registered political parties",
      accent: "bg-amber-500",
      glow: "bg-amber-500/10",
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            p-5
            shadow-lg
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-slate-500
            hover:shadow-xl
            sm:p-6
          "
        >

          {/* Glow */}

          <div
            className={`
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              ${card.glow}
              blur-2xl
            `}
          />

          <div className="relative">

            {/* Top */}

            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm font-medium text-[var(--muted)]">
                  {card.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {card.description}
                </p>
              </div>

              <span
                className={`
                  mt-1
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  ${card.accent}
                `}
              />

            </div>

            {/* Number */}

            <div className="mt-5 flex items-end gap-2">

              <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {card.value.toLocaleString("en-IN")}
              </span>

              <span className="mb-1 text-sm text-slate-500">
                parties
              </span>

            </div>

          </div>

        </div>
      ))}
    </section>
  );
}