"use client";

import PoliticianBrowser from "@/src/components/politicians/PoliticianBrowser";

export default function PoliticiansPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-politic-text tracking-tight">
          Is Your <span className="text-politic-accent">neta</span> Working for You?
        </h1>

        <p className="mt-3 text-politic-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Explore every politician's complete track record from 1947 to today.
        </p>
      </div>

      <PoliticianBrowser />
    </main>
  );
}