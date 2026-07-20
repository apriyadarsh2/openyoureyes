"use client";

import { ReactNode } from "react";

interface Props {

  title: string;

  subtitle?: string;

  icon?: ReactNode;

  rightSection?: ReactNode;

}

export default function PageHeader({

  title,

  subtitle,

  icon,

  rightSection,

}: Props) {

  return (

    <div
      className="
      mb-8
      flex
      flex-col
      gap-5

      rounded-2xl
      border

      bg-gradient-to-r
      from-slate-50
      to-blue-50

      p-8

      lg:flex-row
      lg:items-center
      lg:justify-between
      "
    >

      <div>

        <div className="flex items-center gap-3">

          {icon}

          <h1 className="text-3xl font-bold">

            {title}

          </h1>

        </div>

        {subtitle && (

          <p className="mt-3 max-w-2xl text-slate-600">

            {subtitle}

          </p>

        )}

      </div>

      {rightSection}

    </div>

  );

}