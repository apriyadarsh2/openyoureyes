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
  { label: "Overview", href: "", icon: User },
  { label: "Financial Disclosures", href: "financial", icon: Wallet },
  { label: "Assets", href: "assets", icon: Wallet },
  { label: "Election History", href: "elections", icon: BookOpen },
  { label: "Criminal Cases", href: "criminal", icon: Scale },
  { label: "MPLADS", href: "mplads", icon: Landmark },
  { label: "Timeline", href: "timeline", icon: Clock3 },
  { label: "Analytics", href: "analytics", icon: BarChart3 },
];

export default function ProfileSidebar() {
  const pathname = usePathname();
  const { id } = useParams();

  return (
    <nav className="w-full rounded-2xl border border-politic-border bg-politic-card p-3 shadow-sm lg:p-5 lg:shadow-lg">
      
      {/* Title - Sirf Desktop pe dikhega */}
      <h3 className="mb-4 hidden text-lg font-bold text-politic-text lg:block lg:mb-6">
        Navigation
      </h3>

      {/* Nav Container: Mobile pe Horizontal Scroll, Desktop pe Vertical Stack */}
      <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {navigation.map(item => {
          const Icon = item.icon;
          const href = item.href
            ? `/politicians/${id}/${item.href}`
            : `/politicians/${id}`;

          // Active state check (handles trailing slashes too)
          const active = pathname === href || pathname === `${href}/`;

          return (
            <Link
              key={href}
              href={href}
              className={`flex shrink-0 items-center gap-2 sm:gap-3 rounded-xl px-3 py-2 sm:px-4 sm:py-3 transition-all duration-200 font-medium ${
                active
                  ? "bg-politic-base text-politic-accent border border-politic-border shadow-md"
                  : "text-politic-muted hover:bg-white/5 hover:text-politic-text"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              {/* Text: Mobile pe chota, Desktop pe bada, aur next line pe wrap nahi hoga */}
              <span className="whitespace-nowrap text-xs sm:text-sm lg:text-base">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      
    </nav>
  );
}