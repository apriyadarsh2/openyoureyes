"use client";

import {
  Building2,
  Calendar,
  Globe,
  MapPin,
  Shield,
} from "lucide-react";

import { ConstituencyOverview } from "../../types/constituency";

interface Props {
  overview: ConstituencyOverview;
}

export default function ConstituencyHeader({
  overview,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-50
        p-8
        shadow-sm
      "
    >
      {/* Decorative Blur */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-blue-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -left-20
          h-56
          w-56
          rounded-full
          bg-indigo-200/30
          blur-3xl
        "
      />

      <div className="relative">

        {/* Badge */}

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-200
            bg-white/70
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-700
            backdrop-blur
          "
        >
          {overview.type}
        </span>

        {/* Title */}

        <h1
          className="
            mt-5
            text-4xl
            font-extrabold
            tracking-tight

            lg:text-5xl
          "
        >
          {overview.name_en}
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-slate-600
          "
        >
          {overview.district}, {overview.state}
        </p>

        {/* Quick Badges */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
        >
          <span
            className="
              rounded-full
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              shadow-sm
            "
          >
            🛡 {overview.reservation_type}
          </span>

          <span
            className="
              rounded-full
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              shadow-sm
            "
          >
            🌍 {overview.region}
          </span>

          <span
            className="
              rounded-full
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              shadow-sm
            "
          >
            📅 Established {overview.established}
          </span>
        </div>

        {/* Information Grid */}

        <div
          className="
            mt-10
            grid
            gap-5

            sm:grid-cols-2

            xl:grid-cols-4
          "
        >
          <InfoCard
            icon={<MapPin className="text-blue-600" />}
            label="State"
            value={overview.state}
          />

          <InfoCard
            icon={<Building2 className="text-emerald-600" />}
            label="District"
            value={overview.district}
          />

          <InfoCard
            icon={<Shield className="text-orange-600" />}
            label="Reservation"
            value={overview.reservation_type}
          />

          <InfoCard
            icon={<Globe className="text-purple-600" />}
            label="Region"
            value={overview.region}
          />
        </div>

      </div>
    </section>
  );
}

interface CardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoCard({
  icon,
  label,
  value,
}: CardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/60
        bg-white/70
        p-5
        backdrop-blur
        transition
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
          "
        >
          {icon}
        </div>

        <div>

          <p className="text-sm text-slate-500">
            {label}
          </p>

          <h3 className="font-semibold">
            {value}
          </h3>

        </div>

      </div>
    </div>
  );
}