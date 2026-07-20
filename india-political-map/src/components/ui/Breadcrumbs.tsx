"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({
  items,
}: Props) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">

      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {last ? (
              <span className="font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href!}
                className="transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            )}

            {!last && (
              <ChevronRight size={16} />
            )}
          </div>
        );
      })}

    </nav>
  );
}