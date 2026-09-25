"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor,
  iconBg,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        justify-between
        rounded-2xl
        border
        border-politic-border
        bg-politic-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-xl
        hover:shadow-black/50
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-politic-muted">
            {title}
          </p>
          <h2 className="mt-3 text-3xl font-black text-politic-text">
            {value}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm font-medium text-politic-muted">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            ${iconBg}
            ${iconColor}
          `}
        >
          <Icon size={26} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}