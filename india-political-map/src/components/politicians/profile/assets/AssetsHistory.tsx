import {
  TrendingUp,
  Wallet,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function AssetsHistory({
  profile,
}: Props) {

  if (!profile) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center text-slate-500">
        Assets history unavailable.
      </div>
    );
  }

  const elections = [...profile.elections].sort(
    (a, b) => a.election.year - b.election.year
  );

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Assets History
        </h2>

        <p className="mt-2 text-slate-500">
          Net worth declared in election affidavits.
        </p>

      </div>
      <div className="relative space-y-10">

        {/* Vertical Line */}

        <div className="absolute left-6 top-5 h-[92%] w-1 rounded bg-slate-200" />

        {elections.map((item, index) => {

          const previous = elections[index - 1];

          const current =
            item.assets.net_assets_inr;

          const growth =
            previous
              ? (
                ((current -
                  previous.assets.net_assets_inr) /
                  previous.assets.net_assets_inr) *
                100
              )
              : null;

          const highest =
            current ===
            Math.max(
              ...elections.map(
                e => e.assets.net_assets_inr
              )
            );

          return (

            <div
              key={item.candidacy_id}
              className="relative flex gap-8"
            >

              {/* Timeline Dot */}

              <div className="z-10 mt-3 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow" />

              {/* Card */}

              <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">

                <div className="flex flex-wrap items-center justify-between gap-5">

                  <div>

                    <h3 className="text-2xl font-bold">

                      Election {item.election.year}

                    </h3>

                    <p className="mt-2 text-slate-500">

                      {item.constituency.name_en}

                    </p>

                  </div>

                  {highest && (

                    <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">

                      ★ Highest Wealth

                    </div>

                  )}

                </div>

                <div className="mt-7 grid gap-5 md:grid-cols-2">

                  <Stat
                    title="Net Assets"
                    value={`₹${(
                      current /
                      10000000
                    ).toFixed(2)} Cr`}
                  />

                  <Stat
                    title="Liabilities"
                    value={`₹${(
                      item.assets.total_liabilities_inr /
                      10000000
                    ).toFixed(2)} Cr`}
                  />

                </div>

                {growth !== null && (

                  <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-green-50 px-5 py-3">

                    <TrendingUp
                      size={20}
                      className="text-green-600"
                    />

                    <span className="font-semibold text-green-700">

                      +{growth.toFixed(1)}%

                    </span>

                    <span className="text-slate-500">

                      since previous election

                    </span>

                  </div>

                )}

              </div>

            </div>

          );

        })}

      </div>





    </div>
  );
}

interface StatProps {
  title: string;
  value: string;
}

function Stat({
  title,
  value,
}: StatProps) {

  return (

    <div className="rounded-2xl bg-slate-50 p-5">

      <p className="text-sm text-slate-500">

        {title}

      </p>

      <h4 className="mt-2 text-2xl font-bold">

        {value}

      </h4>

    </div>

  );

}