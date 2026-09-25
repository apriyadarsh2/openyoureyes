"use client";

import { ReactNode } from "react";

interface Props {
  badge?: string;
  title: ReactNode | string;
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
        gap-10
        lg:grid-cols-2
        lg:items-center
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
              border-blue-500/20
              bg-blue-500/10
              px-3
              py-1.5
              text-xs
              font-bold
              text-blue-400
            "
          >
            {icon}
            {badge}
          </div>
        )}

        <h1
          className="
            mt-5
            text-4xl
            font-black
            tracking-tight
            text-politic-text
            sm:text-5xl
          "
        >
          {title}
          {highlight && (
            <span className="text-politic-accent"> {highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-relaxed
              text-politic-muted
              sm:text-lg
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right */}
      <div className="w-full lg:ml-auto lg:max-w-sm">
        {children}
      </div>
    </div>
  );
}