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
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsMobileSearchOpen(false); 
  };

  const toggleSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) setIsMobileMenuOpen(false); 
  };

  return (
    <header className="sticky top-0 z-[100] bg-[#1F2937]/85 backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* 1. Mobile Menu Button (Left) */}
        <div className="flex w-16 items-center justify-start lg:hidden">
          <button 
            onClick={toggleMenu}
            className="rounded-lg p-2 -ml-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 2. Logo (Center on Mobile, Left on Desktop) */}
        <div className="flex flex-1 justify-center lg:flex-none lg:justify-start">
          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight text-white transition-colors hover:text-blue-400"
            onClick={() => { setIsMobileMenuOpen(false); setIsMobileSearchOpen(false); }}
          >
            Open<span className="text-blue-400">Your</span>Eyes
          </Link>
        </div>

        {/* 3. Desktop Navigation Links (Hidden on Mobile) */}
        <nav className="hidden flex-1 items-center justify-center gap-1 mx-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg hover:bg-white/10 hover:text-white ${
                  isActive 
                    ? "text-white after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-blue-400 after:rounded-full" 
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 4. Search Bar / Icon (Right) */}
        <div className="flex w-16 items-center justify-end lg:w-auto lg:min-w-[280px]">
          {/* Full Search Bar on Desktop */}
          <div className="hidden lg:block w-full">
            <NavbarSearch />
          </div>
          {/* Search Icon on Mobile */}
          <button 
            onClick={toggleSearch}
            className={`rounded-lg p-2 -mr-2 transition-colors lg:hidden ${
              isMobileSearchOpen ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
            aria-label="Toggle mobile search"
          >
            {isMobileSearchOpen ? <X size={22} /> : <Search size={22} />}
          </button>
        </div>

      </div>

      {/* --- Mobile Dropdowns --- */}

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#1F2937]">
          <nav className="flex flex-col space-y-1 px-4 py-4 pb-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
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

      {/* Mobile Search Dropdown */}
      {isMobileSearchOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#1F2937] p-4 shadow-inner">
          <NavbarSearch />
        </div>
      )}
    </header>
  );
}