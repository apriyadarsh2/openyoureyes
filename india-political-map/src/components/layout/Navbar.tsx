"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import NavbarSearch from "../navbar/NavbarSearch";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Politicians", href: "/politicians" },
  { name: "Constituencies", href: "/constituencies" },
  { name: "Elections", href: "/elections" },
  { name: "Parties", href: "/parties" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) setIsMobileSearchOpen(false);
      return !prev;
    });
  };

  const toggleSearch = () => {
    setIsMobileSearchOpen((prev) => {
      if (!prev) setIsMobileMenuOpen(false);
      return !prev;
    });
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#1F2937]/85 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= Desktop ================= */}
        <div className="hidden h-16 lg:grid lg:grid-cols-[220px_minmax(400px,1fr)_auto] lg:items-center lg:gap-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition-colors hover:text-blue-400"
          >
            Open<span className="text-blue-400">Your</span>Eyes
          </Link>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <NavbarSearch />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-white/10 hover:text-white ${
                    isActive
                      ? "text-white after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ================= Mobile ================= */}
        <div className="flex h-16 items-center justify-between lg:hidden">

          {/* Menu */}
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileSearchOpen(false);
            }}
            className="text-xl font-bold tracking-tight text-white"
          >
            Open<span className="text-blue-400">Your</span>Eyes
          </Link>

          {/* Search */}
          <button
            onClick={toggleSearch}
            className={`rounded-lg p-2 transition-colors ${
              isMobileSearchOpen
                ? "bg-white/10 text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
            aria-label="Toggle search"
          >
            {isMobileSearchOpen ? <X size={22} /> : <Search size={22} />}
          </button>

        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#1F2937] lg:hidden">
          <nav className="space-y-1 px-4 py-4 pb-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* ================= Mobile Search ================= */}
      {isMobileSearchOpen && (
        <div className="border-t border-white/10 bg-[#1F2937] p-4 shadow-inner lg:hidden">
          <NavbarSearch />
        </div>
      )}
    </header>
  );
}