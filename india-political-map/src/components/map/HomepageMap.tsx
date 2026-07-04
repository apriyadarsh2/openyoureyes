"use client"

import Container from "@/src/components/common/Container";

import IndiaMap from "../IndiaMap";
import InfoPanel from "../InfoPanel";
import MapLegend from "./MapLegend";

interface Props {
  year: number;
  data: any;
}


export default function HomepageMap({
  data,
}: Props) {
  return (
    <section className="bg-white py-24">

      <Container>

        <div className="mb-12">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Political Landscape
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Explore Election Trends Across India
          </h2>

          <p className="mt-4 max-w-3xl text-slate-500">
            Hover over states to inspect election insights,
            political parties and winning candidates for the
            selected election year.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:col-span-3">

            <IndiaMap yearData={data} />

          </div>

          <InfoPanel data={data} />

        </div>

        <MapLegend />

      </Container>

    </section>
  );
}