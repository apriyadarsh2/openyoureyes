import Link from "next/link";
import { ArrowLeft, Search, Sparkles } from "lucide-react";

import PoliticianBrowser from "@/src/components/politicians/PoliticianBrowser";
import { getPoliticians } from "@/src/components/lib/repositories/politicians";
import { searchPoliticians } from "@/src/components/search/searchPoliticians";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q } = await searchParams;

  const query = q ?? "";

  const politicians = getPoliticians();

  const totalResults = searchPoliticians(
  politicians,
  query
).length;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Breadcrumb */}

      <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">

        <Link
          href="/"
          className="hover:text-blue-600"
        >
          Home
        </Link>

        <span>/</span>

        <span className="font-medium text-slate-700">
          Search
        </span>

      </div>

      {/* Search Hero */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl

          bg-gradient-to-br
          from-blue-700
          via-indigo-700
          to-slate-900

          p-10

          text-white
        "
      >
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            <span className="text-sm">
              Political Intelligence Search
            </span>

          </div>

          <h1 className="text-4xl font-bold">

            Search Results

          </h1>

          <p className="mt-3 max-w-3xl text-blue-100">

            Explore politicians, parties and constituencies
            using intelligent search and advanced filters.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">

              <div className="flex items-center gap-3">

                <Search size={18} />

                <span className="font-medium">

                  "{query || "All"}"

                </span>

              </div>

            </div>

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">

              <span className="font-semibold">

                {totalResults}

              </span>

              <span className="ml-2 text-blue-100">

                Results Found

              </span>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-white

                px-5
                py-3

                font-medium

                text-slate-900

                transition

                hover:scale-105
              "
            >
              <ArrowLeft size={18} />

              Back Home

            </Link>

            <Link
              href="/politicians"
              className="
                rounded-xl
                border
                border-white/30

                px-5
                py-3

                transition

                hover:bg-white/10
              "
            >
              Browse All Politicians
            </Link>

          </div>

        </div>

      </div>

      <div className="mt-10">

        <PoliticianBrowser
          initialSearch={query}
        />

      </div>

    </main>
  );
}