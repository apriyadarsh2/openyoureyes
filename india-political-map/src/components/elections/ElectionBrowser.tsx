"use client";

import { getElections } from "../lib/repositories/elections";

import ElectionGrid from "./ElectionGrid";

export default function ElectionBrowser() {
  const elections = getElections();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Lok Sabha Elections
        </h1>

        <p className="mt-2 text-slate-500">
          Browse all General Elections of India.
        </p>
      </div>

      <ElectionGrid elections={elections} />
    </>
  );
}