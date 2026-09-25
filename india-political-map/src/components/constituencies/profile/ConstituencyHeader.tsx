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

export default function ConstituencyHeader({ overview }: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-politic-border
        bg-politic-card
        p-8
        shadow-sm
      "
    >
      {/* Decorative Blur - Dark Mode */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-blue-500/10
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
          bg-indigo-500/10
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
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-400
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
            text-politic-text
            lg:text-5xl
          "
        >
          {overview.name_en}
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-politic-muted
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
          <span className="rounded-full border border-politic-border/50 bg-politic-inner px-4 py-2 text-sm font-medium text-politic-text shadow-sm">
            🛡 {overview.reservation_type}
          </span>
          <span className="rounded-full border border-politic-border/50 bg-politic-inner px-4 py-2 text-sm font-medium text-politic-text shadow-sm">
            🌍 {overview.region}
          </span>
          <span className="rounded-full border border-politic-border/50 bg-politic-inner px-4 py-2 text-sm font-medium text-politic-text shadow-sm">
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
            icon={<MapPin className="text-blue-400" />}
            label="State"
            value={overview.state}
          />
          <InfoCard
            icon={<Building2 className="text-emerald-400" />}
            label="District"
            value={overview.district}
          />
          <InfoCard
            icon={<Shield className="text-orange-400" />}
            label="Reservation"
            value={overview.reservation_type}
          />
          <InfoCard
            icon={<Globe className="text-purple-400" />}
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

function InfoCard({ icon, label, value }: CardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-politic-border/50
        bg-politic-inner
        p-5
        transition
        duration-300
        hover:-translate-y-1
        hover:bg-politic-border/30
        hover:shadow-lg
        hover:shadow-black/50
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
            border
            border-politic-border/50
            bg-politic-card
          "
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-politic-muted">
            {label}
          </p>
          <h3 className="font-semibold text-politic-text">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}