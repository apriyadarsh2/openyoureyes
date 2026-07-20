"use client";

import { ReactNode } from "react";

interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
  rightSection?: ReactNode;
}

export default function HeroBanner({
  badge,
  title,
  highlight,
  subtitle,
  icon,
  children,
  rightSection,
}: Props) {
  return (
    <div
      className="
        relative
        z-10
        grid
        gap-8
        lg:grid-cols-2
        lg:items-start
      "
    >
      {/* Left */}
      <div>
        {badge && (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-white
              px-3
              py-1.5
              text-xs
              font-semibold
              text-blue-700
            "
          >
            {icon}
            {badge}
          </div>
        )}

        <h1
          className="
            mt-4
            text-4xl
            font-black
            tracking-tight
            text-slate-900
          "
        >
          {title}
          {highlight && (
            <span className="text-blue-600"> {highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p
            className="
              mt-4
              max-w-xl
              text-base
              leading-7
              text-slate-600
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right */}
      <div className="w-full max-w-sm ml-auto">
        {children}
      </div>
    </div>
  );
}