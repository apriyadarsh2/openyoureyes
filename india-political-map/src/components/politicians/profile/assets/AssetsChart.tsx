"use client";

import {
    AreaChart,
    Area,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ReferenceDot,
    LabelList,
} from "recharts";

import { TrendingUp } from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
    profile?: PoliticianProfile;
}

interface TooltipProps {
    active?: boolean;
    payload?: {
        value: number;
        dataKey: string;
        color: string;
        payload: {
            year: number;
        };
    }[];
}

function CustomTooltip({
    active,
    payload,
}: TooltipProps) {
    if (
        !active ||
        !payload ||
        payload.length === 0
    ) {
        return null;
    }

    return (
        <div className="rounded-2xl border bg-white p-4 shadow-xl">

            <h3 className="mb-3 text-lg font-bold">
                Election {payload[0].payload.year}
            </h3>

            {payload.map((item) => (
                <div
                    key={item.dataKey}
                    className="flex items-center justify-between gap-8"
                >
                    <span
                        style={{
                            color: item.color,
                        }}
                    >
                        {item.dataKey === "assets"
                            ? "Assets"
                            : "Liabilities"}
                    </span>

                    <span className="font-semibold">
                        ₹
                        {item.value.toFixed(2)} Cr
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function AssetsChart({
    profile,
}: Props) {
    if (!profile) return null;

    const data = [...profile.elections]
        .sort((a, b) => a.election.year - b.election.year)
        .map((election) => ({
            year: election.election.year,
            assets:
                election.assets.net_assets_inr /
                10000000,
            liabilities:
                election.assets.total_liabilities_inr /
                10000000,
        }));

    const highest = Math.max(
        ...data.map((d) => d.assets)
    );

    const highestPoint = data.find(
        (item) => item.assets === highest
    );

    const latestPoint = data[data.length - 1];

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="flex flex-wrap items-center justify-between border-b bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6">

                <div>

                    <h2 className="text-2xl font-bold">
                        Wealth Growth Analytics
                    </h2>

                    <p className="mt-1 text-slate-500">
                        Net assets declared across elections
                    </p>

                </div>

                <div className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-700">

                    <TrendingUp className="mr-2 inline h-5 w-5" />

                    Highest Wealth ₹
                    {highest.toFixed(2)} Cr

                </div>

            </div>

            {/* Chart */}

            <div className="h-[450px] p-8">

                <ResponsiveContainer>

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="assetsGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#2563eb"
                                    stopOpacity={0.45}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#2563eb"
                                    stopOpacity={0}
                                />
                            </linearGradient>

                            <linearGradient
                                id="liabilityGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#ef4444"
                                    stopOpacity={0.35}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#ef4444"
                                    stopOpacity={0}
                                />
                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            stroke="#e5e7eb"
                            strokeDasharray="6 6"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            fontSize={13}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            fontSize={13}
                            tickFormatter={(value) =>
                                `₹${value} Cr`
                            }
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                        />

                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                        />

                        <Area
                            type="monotone"
                            dataKey="assets"
                            name="Net Assets"
                            stroke="#2563eb"
                            strokeWidth={4}
                            fill="url(#assetsGradient)"
                            animationDuration={1200}
                        >

                            <LabelList
                                dataKey="assets"
                                position="top"
                                formatter={(value) =>
                                    `₹${Number(value).toFixed(1)} Cr`
                                }
                            />

                        </Area>

                        <Area
                            type="monotone"
                            dataKey="liabilities"
                            name="Liabilities"
                            stroke="#ef4444"
                            strokeWidth={3}
                            fill="url(#liabilityGradient)"
                            animationDuration={1200}
                        />

                        {highestPoint && (

                            <ReferenceDot
                                x={highestPoint.year}
                                y={highestPoint.assets}
                                r={8}
                                fill="#2563eb"
                                stroke="#fff"
                                strokeWidth={3}
                            />

                        )}

                        {latestPoint && (

                            <ReferenceDot
                                x={latestPoint.year}
                                y={latestPoint.assets}
                                r={10}
                                fill="#16a34a"
                                stroke="#fff"
                                strokeWidth={4}
                            />

                        )}

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}