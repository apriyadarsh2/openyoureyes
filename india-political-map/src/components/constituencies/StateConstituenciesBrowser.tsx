

"use client";

import Link from "next/link";

import {
  getConstituenciesByState,
  getStateBySlug,
} from "../lib/repositories/constituencies";

import ConstituencyList from "./ConstituencyList";
import Breadcrumbs from "../ui/Breadcrumbs";

interface Props {
  slug: string;
}

export default function StateConstituenciesBrowser({
  slug,
}: Props) {

  const state =
    getStateBySlug(slug);

  const constituencies =
    getConstituenciesByState(slug);




  if (!state) {
    return (
      <h2 className="text-xl font-semibold">
        State not found.
      </h2>
      
    );
  }

  return (
    <>
  

      <Breadcrumbs
  items={[
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Constituencies",
      href: "/constituencies",
    },
    {
      label: state.name,
    },
  ]}
/>
      

      <div
  className="
    relative
    overflow-hidden

    rounded-3xl
    border
    border-slate-200

    bg-gradient-to-r
    from-blue-50
    via-white
    to-slate-50

    p-8
  "
>

  {/* Background Glow */}

  <div
    className="
      absolute
      -right-12
      -top-12

      h-40
      w-40

      rounded-full

      bg-blue-200/30

      blur-3xl
    "
  />

  <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    {/* Left */}

    <div>

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          bg-blue-100

          px-4
          py-1.5

          text-sm
          font-medium

          text-blue-700
        "
      >
        🏛 State Overview
      </div>

      <h1
        className="
          mt-4

          text-4xl
          font-bold
          tracking-tight

          text-slate-900
        "
      >
        {state.name}
      </h1>

      <p className="mt-3 max-w-2xl text-slate-600">
        Browse all Lok Sabha constituencies, reservation
        categories, electoral statistics, and parliamentary
        representation across {state.name}.
      </p>

    </div>

    {/* Right */}

    <div className="flex flex-wrap gap-4">

      <div
        className="
          rounded-2xl
          border

          bg-white/80

          px-5
          py-4

          shadow-sm
          backdrop-blur
        "
      >
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Constituencies
        </p>

        <h3 className="mt-1 text-3xl font-bold text-blue-600">
          {state.total_constituencies}
        </h3>
      </div>

      <div
        className="
          rounded-2xl
          border

          bg-white/80

          px-5
          py-4

          shadow-sm
          backdrop-blur
        "
      >
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Reservation
        </p>

        <h3 className="mt-1 text-lg font-semibold">
          {state.seats_general} GEN · {state.seats_sc} SC · {state.seats_st} ST
        </h3>
      </div>

    </div>

  </div>

</div>
      <div className="mt-10">

        <ConstituencyList
          constituencies={constituencies}
          slug={slug}
        />
        
      </div>
    </>
  );
}