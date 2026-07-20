"use client";

import {

    Vote,

    Trophy,

    Wallet,

    Scale,

} from "lucide-react";

import KPICard from "./KPICard";

import { usePolitician } from "../../context/PoliticianProvider";

export default function AnalyticsKPIs() {

    const {

        summary,

    } = usePolitician();

    const winRate =

        summary.elections_contested === 0

            ? 0

            : Math.round(

                  (summary.elections_won /

                      summary.elections_contested) *

                      100

              );

    return (

        <div
            className="
            grid

            grid-cols-1

            sm:grid-cols-2

            xl:grid-cols-4

            gap-5
            "
        >

            <KPICard

                title="Elections"

                value={summary.elections_contested}

                subtitle={`${summary.elections_won} victories`}

                icon={Vote}

                color="bg-blue-600"

            />

            <KPICard

                title="Win Rate"

                value={`${winRate}%`}

                subtitle="Career Success"

                icon={Trophy}

                color="bg-green-600"

            />

            <KPICard

                title="Net Worth"

                value={`₹${(

                    summary.net_assets_inr /

                    10000000

                ).toFixed(2)} Cr`}

                subtitle="Latest Declaration"

                icon={Wallet}

                color="bg-emerald-600"

            />

            <KPICard

                title="Criminal Cases"

                value={summary.criminal_cases_count}

                subtitle={`${summary.serious_cases_count} serious`}

                icon={Scale}

                color="bg-red-600"

            />

        </div>

    );

}