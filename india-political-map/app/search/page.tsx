import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Sparkles,
} from "lucide-react";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q } = await searchParams;

  const query = q?.trim() ?? "";

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

      {/* Breadcrumb */}

      <div className="mb-5 flex items-center gap-2 text-sm text-[#94A3B8]">
        <Link
          href="/"
          className="transition hover:text-indigo-300"
        >
          Home
        </Link>

        <span>/</span>

        <span className="font-medium text-[#F4F4F5]">
          Search
        </span>
      </div>

      {/* Search Hero */}

      <section
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[#3E445B]
          bg-gradient-to-br
          from-[#4F46E5]
          via-[#3730A3]
          to-[#101827]
          p-6
          text-white
          shadow-xl
          shadow-black/20
          sm:p-8
          lg:p-10
        "
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles size={16} />

            <span className="text-sm font-medium">
              Political Intelligence Search
            </span>
          </div>

          {/* Title */}

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Search OYE
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-indigo-100 sm:text-base sm:leading-7">
            Search across politicians, political parties,
            constituencies and elections.
          </p>

          {/* Query + Result status */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">

            <div className="inline-flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur sm:px-5">
              <Search
                size={18}
                className="shrink-0"
              />

              <span className="truncate font-medium">
                {query
                  ? `"${query}"`
                  : "All searchable data"}
              </span>
            </div>

          </div>

          {/* Actions */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                font-medium
                text-slate-900
                transition
                hover:-translate-y-0.5
                hover:bg-slate-100
              "
            >
              <ArrowLeft size={18} />
              Back Home
            </Link>

            <Link
              href="/politicians"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/5
                px-5
                py-3
                font-medium
                text-white
                transition
                hover:bg-white/10
              "
            >
              Browse Politicians
            </Link>

          </div>
        </div>
      </section>

      {/* Search content */}

      <section className="mt-10">
        <div className="rounded-3xl border border-[#3E445B] bg-[#282D3D] p-8 text-center shadow-sm">
          {query ? (
            <>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15">
                <Search
                  size={22}
                  className="text-indigo-300"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-[#F4F4F5]">
                Searching for "{query}"
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#94A3B8]">
                Global search is being handled by the
                navbar search while the dedicated OYE
                search API is being connected.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-[#F4F4F5]">
                Start searching
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#94A3B8]">
                Use the search bar in the navigation to
                search across OYE.
              </p>
            </>
          )}
        </div>
      </section>

    </main>
  );
}