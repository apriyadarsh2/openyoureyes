// "use client";

// import {
//   Calendar,
//   Landmark,
//   ChevronRight,
// } from "lucide-react";

// import { CourtCase } from "@/src/components/types/politician";

// interface Props {
//   cases: CourtCase[];
// }

// export default function CriminalTimeline({
//   cases,
// }: Props) {

//   const sorted =
//     [...cases].sort(
//       (a, b) => a.year_filed - b.year_filed
//     );

//   return (

//     <div className="rounded-2xl border bg-white p-8 shadow-sm">

//       <h2 className="mb-8 text-xl font-semibold">

//         Filing Timeline

//       </h2>

//       <div className="relative border-l-2 border-blue-200 ml-4">

//         {sorted.map((item) => (

//           <div
//             key={item.case_id_source}
//             className="relative mb-10 ml-8"
//           >

//             <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow" />

//             <div className="rounded-xl border bg-slate-50 p-5 transition hover:shadow-md">

//               <div className="flex items-center gap-3">

//                 <Calendar
//                   size={18}
//                   className="text-blue-600"
//                 />

//                 <span className="font-bold text-lg">

//                   {item.year_filed}

//                 </span>

//               </div>

//               <div className="mt-3 flex items-center gap-2 text-slate-600">

//                 <Landmark size={17} />

//                 {item.court}

//               </div>

//               <div className="mt-2 text-slate-500">

//                 {item.state}

//               </div>

//               <div className="mt-4 flex items-center justify-between">

//                 <span
//                   className={`rounded-full px-3 py-1 text-sm font-medium
//                   ${
//                     item.status === "Pending"
//                       ? "bg-red-100 text-red-700"
//                       : "bg-green-100 text-green-700"
//                   }`}
//                 >

//                   {item.status}

//                 </span>

//                 <ChevronRight
//                   size={18}
//                   className="text-slate-400"
//                 />

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>

//   );

// }



"use client";

import {
  Calendar,
  Landmark,
  ChevronRight,
} from "lucide-react";

import { CourtCase } from "@/src/components/types/politician";

interface Props {
  cases: CourtCase[];
}

export default function CriminalTimeline({ cases }: Props) {
  const sorted = [...cases].sort(
    (a, b) => a.year_filed - b.year_filed
  );

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-8 shadow-sm">
      <h2 className="mb-8 text-xl font-bold text-politic-text">
        Filing Timeline
      </h2>

      <div className="relative border-l-2 border-politic-border ml-4">
        {sorted.map((item) => (
          <div
            key={item.id}
            className="relative mb-10 ml-8 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-politic-card bg-blue-500 shadow transition-transform group-hover:scale-110" />

            {/* Inner Card */}
            <div className="rounded-xl border border-politic-border bg-politic-base p-5 transition hover:bg-politic-border/30">
              
              <div className="flex items-center gap-3">
                <Calendar
                  size={18}
                  className="text-blue-400"
                />
                <span className="font-black text-lg text-politic-text">
                  {item.year_filed}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-politic-muted font-medium">
                <Landmark size={17} />
                {item.court}
              </div>

              <div className="mt-2 text-sm text-politic-muted/80 font-semibold">
                {item.state}
              </div>

              <div className="mt-4 flex items-center justify-between">
                {/* Dark Mode Optimized Status Badge */}
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border
                  ${
                    item.status === "Pending"
                      ? "bg-red-500/10 text-red-400 border-red-500/20"
                      : "bg-green-500/10 text-green-400 border-green-500/20"
                  }`}
                >
                  {item.status}
                </span>

                <ChevronRight
                  size={18}
                  className="text-politic-muted transition-transform group-hover:translate-x-1"
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}