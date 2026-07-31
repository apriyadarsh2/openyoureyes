import { Scale, GraduationCap, IndianRupee, Landmark } from "lucide-react";
import { SnapshotData } from "../types/leaderboard";

interface Props {
  year: number;
  data: SnapshotData | undefined;
  mapData?: any;
}

export default function SnapshotPanel({ year, data, mapData }: Props) {
  if (!data) {
    return (
      <div className="p-4 rounded-xl flex items-center justify-center h-48 bg-[#1F2937] border border-white/10">
        <p className="text-gray-400 text-sm font-medium">No snapshot data available for {year}</p>
      </div>
    );
  }

  let totalCrimeRate = 0;
  let stateCount = 0;

  if (mapData && mapData.stateStats) {
    Object.values(mapData.stateStats).forEach((stats: any) => {
      if (stats.crimeRate) {
        totalCrimeRate += stats.crimeRate;
        stateCount++;
      }
    });
  }

  const avgCrimeRate = stateCount > 0 ? (totalCrimeRate / stateCount) : 0;

  const items = [
    { 
      title: "National Crime Rate", 
      name_en: avgCrimeRate > 0 ? avgCrimeRate.toFixed(1) : "Data Awaited",
      party: `Year ${year}`, 
      detail: avgCrimeRate > 0 ? "cases / lakh (avg)" : "Pending",
      icon: <Scale className="text-white" size={24} />, 
      accentBorder: "border-l-red-500" 
    },
    { 
      ...data.education, 
      icon: <GraduationCap className="text-white" size={24} />, 
      accentBorder: "border-l-blue-500" 
    },
    { 
      ...data.wealth, 
      icon: <IndianRupee className="text-white" size={24} />, 
      accentBorder: "border-l-green-500" 
    },
    { 
      ...data.ruling_party, 
      icon: <Landmark className="text-white" size={24} />, 
      accentBorder: "border-l-orange-500" 
    },
  ];

  return (
    <div className="flex flex-col px-2 w-full">
      
      <div className="mb-4 pl-2">
        <h2 className="text-2xl font-black text-white">Political Overview {year}</h2>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
          Key National Highlights
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex items-center gap-4 bg-[#1F2937] p-3.5 rounded-xl border border-white/10 border-l-[3px] ${item.accentBorder} transition-all duration-300 shadow-sm`}
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#101827] rounded-lg border border-white/10 flex-shrink-0">
              {item.icon}
            </div>
            
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 truncate">
                {item.title}
              </p>
              <h3 className="text-[14px] font-extrabold text-white leading-tight truncate">
                {item.name_en}
              </h3>
              <p className="text-xs font-semibold text-gray-400 mt-1 truncate">
                <span className="text-white">{item.party}</span> • {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}