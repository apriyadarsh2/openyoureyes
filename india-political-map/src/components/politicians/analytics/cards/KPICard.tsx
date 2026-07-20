"use client";

import { LucideIcon } from "lucide-react";

interface Props {

    title: string;

    value: string | number;

    subtitle?: string;

    icon: LucideIcon;

    color: string;

}

export default function KPICard({

    title,

    value,

    subtitle,

    icon: Icon,

    color,

}: Props) {

    return (

        <div
            className="
            rounded-2xl
            border
            bg-white
            p-5
            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-lg
            "
        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">

                        {title}

                    </p>

                    <h2 className="mt-2 text-3xl font-bold">

                        {value}

                    </h2>

                    {subtitle && (

                        <p className="mt-2 text-xs text-slate-400">

                            {subtitle}

                        </p>

                    )}

                </div>

                <div
                    className={`rounded-xl p-3 ${color}`}
                >

                    <Icon className="h-7 w-7 text-white"/>

                </div>

            </div>

        </div>

    );

}