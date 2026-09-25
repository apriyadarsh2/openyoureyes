import {
  Building2,
  Hash,
  ShieldCheck,
} from "lucide-react";

import { PartyResponse } from "../../types/parties";

interface Props {
  party: PartyResponse;
}

function getPartyTypeStyles(type: string | null) {
  switch (type?.trim().toUpperCase()) {
    case "NATIONAL":
      return {
        badge:
          "border-indigo-400/20 bg-indigo-500/10 text-indigo-300",
        dot: "bg-indigo-400",
        label: "National Party",
      };

    case "STATE":
      return {
        badge:
          "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
        dot: "bg-emerald-400",
        label: "State Party",
      };

    case "REGISTERED":
      return {
        badge:
          "border-amber-400/20 bg-amber-500/10 text-amber-300",
        dot: "bg-amber-400",
        label: "Registered Party",
      };

    case "IND":
      return {
        badge:
          "border-slate-400/20 bg-slate-500/10 text-slate-300",
        dot: "bg-slate-400",
        label: "Independent",
      };

    default:
      return {
        badge:
          "border-slate-400/20 bg-slate-500/10 text-slate-300",
        dot: "bg-slate-400",
        label: type || "Unknown",
      };
  }
}

export default function PartyHeader({
  party,
}: Props) {
  const styles = getPartyTypeStyles(
    party.party_type
  );

  const abbreviation =
    party.abbreviation?.trim() || "—";

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-5
        shadow-xl
        sm:p-7
        lg:p-9
      "
    >

      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-indigo-600/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/3
          h-64
          w-64
          rounded-full
          bg-blue-500/5
          blur-3xl
        "
      />

      <div className="relative">

        {/* Main profile */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

          {/* Party abbreviation */}

          <div
            className="
              flex
              h-20
              w-20
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-indigo-400/20
              bg-indigo-500/10
              text-lg
              font-bold
              tracking-wider
              text-indigo-300
              shadow-lg
              shadow-indigo-950/20
              sm:h-24
              sm:w-24
              sm:text-xl
            "
          >
            {abbreviation}
          </div>

          {/* Party name */}

          <div className="min-w-0">

            <div
              className={`
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-semibold
                ${styles.badge}
              `}
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${styles.dot}
                `}
              />

              {styles.label}
            </div>

            <h1
              className="
                break-words
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              {party.full_name_en ||
                "Unnamed Party"}
            </h1>

            {party.full_name_hi && (
              <p className="mt-2 text-base text-slate-400">
                {party.full_name_hi}
              </p>
            )}

          </div>

        </div>

        {/* Information cards */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

         

        

        </div>

      </div>

    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Hash;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-700/70
        bg-slate-900/30
        p-4
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-800
          text-slate-400
        "
      >
        <Icon size={17} />
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-semibold text-slate-200">
          {value}
        </p>

      </div>
    </div>
  );
}