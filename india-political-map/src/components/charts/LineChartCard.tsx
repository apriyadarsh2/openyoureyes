"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface ChartPoint {
    year: number;
    value: number;
}

interface Props {
    title: string;
    data: ChartPoint[];
    color?: string;
    formatter?: (value: number) => string;
}

export default function LineChartCard({
    title,
    data,
    color = "#2563eb",
    formatter = (v) => v.toLocaleString("en-IN"),
}: Props) {
    return (
        <div className="rounded-xl border bg-white p-6">
            <h3 className="mb-6 text-lg font-semibold">
                {title}
            </h3>

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="year" />

                        <YAxis tickFormatter={formatter} />

                        <Tooltip
                            formatter={(value) =>
                                formatter(typeof value === "number" ? value : Number(value))
                            }
                        />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}