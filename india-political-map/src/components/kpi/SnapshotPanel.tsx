// src/components/kpi/SnapshotPanel.tsx
import { Scale, GraduationCap, IndianRupee, Landmark } from "lucide-react";
import { SnapshotData } from "../types/leaderboard";



interface Props {
  year: number;
  data: SnapshotData | undefined;
}

export default function SnapshotPanel({ year, data }: Props) {
  if (!data) {
    return (
      <div className="mt-12 p-4 rounded-xl flex items-center justify-center h-48 bg-[#1d243c] border border-[#2d3654]">
        <p className="text-[#94A3B8] text-sm font-medium">No snapshot data available for {year}</p>
      </div>
    );
  }

  // Categories mapped with distinctive left accent borders & clean monochrome icon styling
  const items = [
    { 
      ...data.criminal, 
      icon: <Scale className="text-[#F2F1EC]" size={18} />, 
      accentBorder: "border-l-red-500" 
    },
    { 
      ...data.education, 
      icon: <GraduationCap className="text-[#F2F1EC]" size={18} />, 
      accentBorder: "border-l-blue-500" 
    },
    { 
      ...data.wealth, 
      icon: <IndianRupee className="text-[#F2F1EC]" size={18} />, 
      accentBorder: "border-l-green-500" 
    },
    { 
      ...data.ruling_party, 
      icon: <Landmark className="text-[#F2F1EC]" size={18} />, 
      accentBorder: "border-l-orange-500" 
    },
  ];

  return (
    <div className="flex flex-col mt-12 px-2">
      <div className="mb-5 pl-2">
        <h2 className="text-2xl font-black text-[#F2F1EC]">Snapshot {year}</h2>
        <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mt-1">
          Key National Highlights
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex items-center gap-4 bg-[#1d243c] p-3.5 rounded-xl border border-[#2d3654] border-l-4 ${item.accentBorder} transition-all duration-300 shadow-sm`}
          >
            <div className="p-2 bg-[#14192b] rounded-lg border border-[#2d3654] flex-shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5 truncate">
                {item.title}
              </p>
              <h3 className="text-[14px] font-extrabold text-[#F2F1EC] leading-tight truncate">
                {item.name_en}
              </h3>
              <p className="text-xs font-semibold text-[#94A3B8] mt-1 truncate">
                <span className="text-[#F2F1EC]">{item.party}</span> • {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}