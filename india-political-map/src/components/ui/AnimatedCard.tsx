"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;

  className?: string;
}

export default function AnimatedCard({
  children,
  className = "",
}: Props) {

  return (

    <div
      className={`
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm

      transition-all
      duration-300

      hover:-translate-y-1
      hover:shadow-xl
      hover:border-blue-200

      ${className}
      `}
    >

      {children}

    </div>

  );

}