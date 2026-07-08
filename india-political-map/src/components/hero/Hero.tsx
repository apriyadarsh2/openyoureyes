import Image from "next/image";

import HeroBackground from "./HeroBackground";
import SearchBar from "./SearchBar";

import TimelineSlider from "@/src/components/TimelineSlider";
import { Politician } from "@/src/components/types/politician";

interface HeroProps {
  year: number;
  setYear: (year: number) => void;

  query: string;
  setQuery: (value: string) => void;

  filteredPoliticians: Politician[];
}

export default function Hero({
  year,
  setYear,
  query,
  setQuery,
  filteredPoliticians,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">

      <HeroBackground />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6">

        <div className="max-w-3xl">

          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            🇮🇳 India's Political Data Platform
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Explore India's
            <br />
            Political Transparency
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">
            Search politicians, election history,
            assets, criminal records,
            constituencies and party performance
            from 1947–2024.
          </p>



          <div className="mt-12">
            <TimelineSlider
              year={year}
              setYear={setYear}
            />
          </div>

        </div>

        <Image
          src="/images/india-outline.png"
          alt="India"
          width={700}
          height={700}
          className="pointer-events-none absolute bottom-0 right-0 opacity-10"
        />

      </div>

    </section>
  );
}