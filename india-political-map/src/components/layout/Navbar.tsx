"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Politicians", href: "/politicians" },
  { name: "Constituencies", href: "/constituencies" },
  { name: "Elections", href: "/elections" },
  { name: "Parties", href: "/parties" },
  { name: "Leaderboards", href: "/leaderboards" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          OpenYourEyes
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="rounded-full p-2 hover:bg-slate-100">
            <Search size={20} />
          </button>

          <button className="rounded-full p-2 hover:bg-slate-100 md:hidden">
            <Menu size={22} />
          </button>

        </div>

      </div>
    </header>
  );
}