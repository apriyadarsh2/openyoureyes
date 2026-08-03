"use client";

import { useMemo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";

import { PoliticianProfile } from "@/src/components/types/politician";
import { PARTY_COLORS } from "@/data/partyColors"; // Tumhari actual file ka path

interface Props {
  profile?: PoliticianProfile;
}

// Custom X-Axis Tick (Saal ke sath Constituency dikhane ke liye)
const CustomXAxisTick = ({ x, y, payload }: any) => {
  const [year, constituency] = payload.value.split("|");
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={15} dy={0} textAnchor="middle" fill="#cbd5e1" fontSize={12} fontWeight="bold">
        {year}
      </text>
      <text x={0} y={32} dy={0} textAnchor="middle" fill="#9ca3af" fontSize={10}>
        {constituency}
      </text>
    </g>
  );
};

// Jeetne par Star (★) dikhane ke liye
const WinIndicator = (props: any) => {
  const { x, y, width, value } = props;
  if (!value) return null; // Agar hara hai toh kuch mat dikhao
  return (
    <text
      x={x + width / 2}
      y={y - 12}
      fill="#FBBF24" // politic-accent color (Amber/Gold)
      textAnchor="middle"
      fontSize={18}
    >
      ★
    </text>
  );
};

export default function CareerPerformance({ profile }: Props) {
  if (!profile || !profile.elections) return null;

  // Data processing with Dynamic Colors & Composite Keys
  const chartData = useMemo(() => {
    return [...profile.elections]
      .sort((a, b) => a.election.year - b.election.year)
      .map((e) => {
        const partyAbbr = e.party.abbreviation;
        return {
          tickKey: `${e.election.year}|${e.constituency.name_en}`, // X-axis ke liye unique string
          year: e.election.year,
          voteShare: e.result.votes_pct,
          votes: e.result.votes,
          party: partyAbbr,
          constituency: e.constituency.name_en,
          winner: e.result.winner,
          color: PARTY_COLORS[partyAbbr] || "#9ca3af", // Dynamic color from your file
        };
      });
  }, [profile.elections]);

  // Upar Legend dikhane ke liye sirf unique parties nikalna
  const uniqueParties = useMemo(() => {
    const parties = new Map();
    chartData.forEach((d) => {
      if (!parties.has(d.party)) {
        parties.set(d.party, d.color);
      }
    });
    return Array.from(parties, ([name, color]) => ({ name, color }));
  }, [chartData]);

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-4 shadow-sm sm:p-6 w-full">
      
      {/* Header & Dynamic Legend */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-politic-text lg:text-2xl">
            Electoral Performance
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-politic-muted">
            Vote share trend across elections.
          </p>
        </div>

        {/* Dynamic Legend based on participated parties */}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-politic-border bg-politic-inner px-3 py-2">
          {uniqueParties.map((p) => (
            <div key={p.name} className="flex items-center gap-1.5">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <span className="text-[11px] font-bold text-politic-text uppercase tracking-wider">
                {p.name}
              </span>
            </div>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-politic-border pl-3">
            <span className="text-[#FBBF24] text-sm">★</span>
            <span className="text-[11px] font-bold text-politic-text uppercase tracking-wider">Won</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[350px] sm:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 25 }}>
            <CartesianGrid stroke="#ffffff1a" strokeDasharray="3 3" vertical={false} />
            
            <XAxis 
              dataKey="tickKey" 
              tick={<CustomXAxisTick />} 
              axisLine={false} 
              tickLine={false} 
              interval={0} // Ensure all ticks show
            />
            
            <YAxis 
              unit="%" 
              stroke="#9ca3af" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }}
            />
            
            <Tooltip content={<ChartTooltip />} cursor={{ fill: '#ffffff0a' }} />

            <Bar dataKey="voteShare" radius={[6, 6, 0, 0]} maxBarSize={60}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
              <LabelList dataKey="winner" content={<WinIndicator />} />
            </Bar>

            <Line
              type="monotone"
              dataKey="voteShare"
              stroke="#cbd5e1" // Bright line for dark mode
              strokeWidth={2.5}
              dot={{ r: 5, fill: "#1F2937", stroke: "#cbd5e1", strokeWidth: 2 }}
              activeDot={{ r: 7, fill: "#FBBF24", stroke: "#1F2937", strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Dark Theme Tooltip
function ChartTooltip({ active, payload }: any) {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-politic-border bg-politic-inner p-4 shadow-xl backdrop-blur-md">
      <div className="mb-3 border-b border-politic-border pb-2">
        <h4 className="text-base font-bold text-politic-text">
          {item.year} <span className="text-politic-muted font-normal text-sm">({item.constituency})</span>
        </h4>
      </div>

      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between gap-6">
          <span className="text-politic-muted">Party</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            <strong className="text-politic-text">{item.party}</strong>
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <span className="text-politic-muted">Vote Share</span>
          <strong className="text-politic-text">{item.voteShare}%</strong>
        </div>

        <div className="flex justify-between gap-6">
          <span className="text-politic-muted">Total Votes</span>
          <strong className="text-politic-text">{item.votes.toLocaleString("en-IN")}</strong>
        </div>

        <div className="flex justify-between gap-6 pt-1">
          <span className="text-politic-muted">Result</span>
          <strong className={item.winner ? "text-green-400" : "text-red-400"}>
            {item.winner ? "Won" : "Lost"}
          </strong>
        </div>
      </div>
    </div>
  );
}