import {
    Calendar,
    Trophy,
    Circle,
    MapPin,
    Landmark,
    Wallet,
    Vote,
    Scale,
} from "lucide-react";

import { PoliticianElection } from "@/src/components/types/politician";

interface Props {
    election: PoliticianElection;
    isLast?: boolean;
}

export default function ElectionTimelineCard({
    election,
    isLast = false,
}: Props) {
    const winner = election.result.winner;

    return (
        <div className="relative flex gap-8">

            {/* Timeline */}

            <div className="flex flex-col items-center">

                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-4 ${winner
                            ? "border-green-500 bg-green-100"
                            : "border-red-500 bg-red-100"
                        }`}
                >
                    {winner ? (
                        <Trophy
                            size={20}
                            className="text-green-600"
                        />
                    ) : (
                        <Circle
                            size={18}
                            className="text-red-600"
                        />
                    )}
                </div>

                {!isLast && (
                    <div className="mt-2 h-full w-1 rounded-full bg-slate-300" />
                )}

            </div>

            {/* Card */}

            <div className="mb-10 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

                <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                        <div className="flex items-center gap-3">

                            <Calendar
                                size={20}
                                className="text-blue-600"
                            />

                            <h3 className="text-2xl font-bold">
                                General Election {election.election.year}
                            </h3>

                        </div>

                        <p className="mt-1 flex items-center gap-2 text-slate-500">

                            <MapPin size={16} />

                            {election.constituency.name_en},{" "}
                            {election.constituency.state}

                        </p>

                    </div>

                    <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${winner
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {winner ? "Winner" : "Lost"}
                    </span>

                </div>

                {/* Statistics */}

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                    <Info
                        icon={<Landmark size={18} />}
                        label="Party"
                        value={election.party.abbreviation}
                    />

                    <Info
                        icon={<Vote size={18} />}
                        label="Votes"
                        value={election.result.votes.toLocaleString("en-IN")}
                    />

                    <Info
                        icon={<Wallet size={18} />}
                        label="Net Assets"
                        value={`₹${(
                            election.assets.net_assets_inr /
                            10000000
                        ).toFixed(2)} Cr`}
                    />

                    <Info
                        icon={<Scale size={18} />}
                        label="Cases"
                        value={election.criminal_cases_count}
                    />

                </div>

                {/* Performance */}

                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    <div className="rounded-2xl bg-slate-50 p-5">

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-medium">
                                Vote Share
                            </span>

                            <span className="font-bold text-blue-700">
                                {election.result.votes_pct.toFixed(1)}%
                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                            <div
                                className="h-full rounded-full bg-blue-600 transition-all duration-700"
                                style={{
                                    width: `${Math.min(
                                        election.result.votes_pct,
                                        100
                                    )}%`,
                                }}
                            />

                        </div>

                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-medium">
                                Poll Percentage
                            </span>

                            <span className="font-bold text-emerald-700">
                                {election.result.votes_pct.toFixed(1)}%
                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                            <div
                                className="h-full rounded-full bg-emerald-600 transition-all duration-700"
                                style={{
                                    width: `${Math.min(
                                        election.result.votes_pct,
                                        100
                                    )}%`,
                                }}
                            />

                        </div>

                    </div>

                </div>

                {/* Bottom Summary */}

                <div className="mt-8 flex flex-wrap gap-4">

                    <Badge
                        label="Winning Margin"
                        value={election.result.margin.toLocaleString("en-IN")}
                        color="blue"
                    />

                    <Badge
                        label="Valid Votes"
                        value={election.result.total_valid_votes.toLocaleString("en-IN")}
                        color="green"
                    />

                    <Badge
                        label="Age"
                        value={`${election.age_at_election} yrs`}
                        color="amber"
                    />

                    <Badge
                        label="Serious Cases"
                        value={election.serious_cases_count}
                        color="red"
                    />

                </div>


            </div>
        </div>
    );
}

interface InfoProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

function Info({
    icon,
    label,
    value,
}: InfoProps) {
    return (
        <div>

            <div className="mb-2 flex items-center gap-2 text-slate-500">

                {icon}

                <span>{label}</span>

            </div>

            <div className="text-lg font-semibold">
                {value}
            </div>

        </div>
    );
}
interface BadgeProps {
    label: string;
    value: string | number;
    color: "blue" | "green" | "amber" | "red";
}

function Badge({
    label,
    value,
    color,
}: BadgeProps) {
    const colors = {
        blue: "bg-blue-100 text-blue-700",
        green: "bg-green-100 text-green-700",
        amber: "bg-amber-100 text-amber-700",
        red: "bg-red-100 text-red-700",
    };

    return (
        <div
            className={`rounded-full px-4 py-2 text-sm font-semibold ${colors[color]}`}
        >
            {label}: {value}
        </div>
    );
}