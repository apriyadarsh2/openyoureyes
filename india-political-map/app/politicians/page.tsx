"use client";

import PoliticianBrowser from "@/src/components/politicians/PoliticianBrowser";

export default function PoliticiansPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Politicians
        </h1>

        <p className="mt-2 text-slate-500">
          Browse, search and filter politicians.
        </p>
      </div>

      <PoliticianBrowser />

    </main>
  );
}