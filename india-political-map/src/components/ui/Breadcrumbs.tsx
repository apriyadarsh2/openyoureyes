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

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-politic-muted">
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {last ? (
              <span className="font-medium text-politic-text">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href!}
                className="transition hover:text-blue-400"
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