"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import NavbarSearch from "../navbar/NavbarSearch"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Politicians", href: "/politicians" },
  { name: "Constituencies", href: "/constituencies" },
  { name: "Elections", href: "/elections" },
  { name: "Parties", href: "/parties" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">

        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-blue-700"
        >
          OpenYourEyes
        </Link>

        <div className="hidden flex-1 lg:block">
          <NavbarSearch />
        </div>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="ml-auto rounded-full p-2 hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

      </div>

    </header>
  );
}