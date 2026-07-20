"use client";

import { ReactNode } from "react";

interface Props {

  title: string;

  description?: string;

  children: ReactNode;

}

export default function SectionContainer({

  title,

  description,

  children,

}: Props) {

  return (

    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold text-slate-900">

          {title}

        </h2>

        {description && (

          <p className="mt-2 text-slate-500">

            {description}

          </p>

        )}

      </div>

      {children}

    </section>

  );

}