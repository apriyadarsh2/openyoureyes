"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import {
  User,
  Wallet,
  BookOpen,
  Scale,
  Landmark,
  Clock3,
  BarChart3,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "",
    icon: User,
  },
  {
    label: "Financial Disclosures",
    href: "financial",
    icon: Wallet,
  },
  {
    label: "Assets",
    href: "assets",
    icon: Wallet,
  },
  {
    label: "Election History",
    href: "elections",
    icon: BookOpen,
  },
  {
    label: "Criminal Cases",
    href: "criminal",
    icon: Scale,
  },
  {
    label: "MPLADS",
    href: "mplads",
    icon: Landmark,
  },
  {
    label: "Timeline",
    href: "timeline",
    icon: Clock3,
  },
  {
    label: "Analytics",
    href: "analytics",
    icon: BarChart3,
  },
];

export default function ProfileSidebar() {
  const pathname = usePathname();
  const { id } = useParams();

  return (
    <nav className="rounded-2xl border border-politic-border bg-politic-card p-5 shadow-lg">
      <h3 className="mb-6 text-lg font-bold text-politic-text">
        Navigation
      </h3>

      <div className="space-y-2">
        {navigation.map(item => {
          const Icon = item.icon;

          const href = item.href
            ? `/politicians/${id}/${item.href}`
            : `/politicians/${id}`;

          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 font-medium ${
                active
                  ? "bg-politic-base text-politic-accent border border-politic-border shadow-md"
                  : "text-politic-muted hover:bg-white/5 hover:text-politic-text"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}