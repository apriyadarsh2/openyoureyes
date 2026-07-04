"use client";

import { useEffect, useState } from "react";
import {
  User,
  BookOpen,
  Wallet,
  Scale,
  Landmark,
  Clock3,
  BarChart3,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    icon: User,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "elections",
    label: "Election History",
    icon: BookOpen,
  },
  {
    id: "assets",
    label: "Assets",
    icon: Wallet,
  },
  {
    id: "cases",
    label: "Criminal Cases",
    icon: Scale,
  },
  {
    id: "mplads",
    label: "MPLADS",
    icon: Landmark,
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: Clock3,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },
];

export default function ProfileSidebar() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <h3 className="mb-6 text-lg font-bold">
        Navigation
      </h3>

      <div className="space-y-2">

        {sections.map(section => {
          const Icon = section.icon;

          const isActive =
            active === section.id;

          return (
            <button
              key={section.id}
              onClick={() =>
                scrollTo(section.id)
              }
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />

              <span>
                {section.label}
              </span>
            </button>
          );
        })}

      </div>

    </nav>
  );
}