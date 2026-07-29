"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-[100] h-16 bg-[#1F2937]/85 backdrop-blur-lg border-b border-white/10 shadow-sm">
      
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-6">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-white transition-colors hover:text-blue-400"
        >
          Open<span className="text-blue-400">Your</span>Eyes
        </Link>

        {/* Search Bar */}
        <div className="hidden flex-1 max-w-md lg:block">
          <NavbarSearch />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
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

        {/* Mobile Menu Button */}
        <button className="ml-auto rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden">
          <Menu size={22} />
        </button>

      </div>

    </header>
  );
}