// "use client";

// import {
//   Calendar,
//   Trophy,
//   Users,
//   Percent,
//   Target,
//   Flag,
// } from "lucide-react";

// import { PartyElectionResult } from "../../types/party";

// interface Props {
//   data: PartyElectionResult[];
// }

// export default function PartyElectionTable({
//   data,
// }: Props) {
//   return (
//     <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

//       {/* Header */}

//       <div className="border-b border-slate-100 px-8 py-6">

//         <h2 className="text-2xl font-bold">
//           Election Performance
//         </h2>

//         <p className="mt-1 text-sm text-slate-500">
//           Year-wise Lok Sabha election performance of the party.
//         </p>

//       </div>

//       {/* Table */}

//       <div className="overflow-x-auto">

//         <table className="min-w-full">

//           <thead className="bg-slate-50">

//             <tr className="border-b">

//               <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center gap-2">
//                   <Calendar size={15} />
//                   Year
//                 </div>
//               </th>

//               <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 Legislature
//               </th>

//               <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 Leader
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center justify-center gap-2">
//                   <Users size={15} />
//                   Contested
//                 </div>
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center justify-center gap-2">
//                   <Trophy size={15} />
//                   Won
//                 </div>
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 Total Seats
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center justify-center gap-2">
//                   <Percent size={15} />
//                   Vote %
//                 </div>
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center justify-center gap-2">
//                   <Target size={15} />
//                   Strike Rate
//                 </div>
//               </th>

//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
//                 <div className="flex items-center justify-center gap-2">
//                   <Flag size={15} />
//                   Outcome
//                 </div>
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             {data.map((row) => (

//               <tr
//                 key={row.year}
//                 className="border-b transition-colors hover:bg-slate-50"
//               >

//                 <td className="px-6 py-5 font-semibold">
//                   {row.year}
//                 </td>

//                 <td className="px-6 py-5 text-slate-600">
//                   {row.legislature}
//                 </td>

//                 <td className="px-6 py-5">
//                   {row.leader}
//                 </td>

//                 <td className="px-6 py-5 text-center">
//                   {row.contested}
//                 </td>

//                 <td className="px-6 py-5 text-center font-semibold">
//                   {row.won}
//                 </td>

//                 <td className="px-6 py-5 text-center">
//                   {row.total_seats}
//                 </td>

//                 <td className="px-6 py-5 text-center">
//                   {row.vote_share.toFixed(2)}%
//                 </td>

//                 <td className="px-6 py-5 text-center">
//                   {row.strike_rate.toFixed(1)}%
//                 </td>

//                 <td className="px-6 py-5 text-center">

//                   <span
//                     className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                       row.outcome === "Government"
//                         ? "bg-green-100 text-green-700"
//                         : row.outcome === "Opposition"
//                         ? "bg-slate-100 text-slate-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {row.outcome}
//                   </span>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </section>
//   );
// }

"use client";

import {
  Calendar,
  Trophy,
  Users,
  Percent,
  Target,
  Flag,
} from "lucide-react";

import { PartyElectionResult } from "../../types/party";

interface Props {
  data: PartyElectionResult[];
}

export default function PartyElectionTable({
  data,
}: Props) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-100 px-6 py-4">
        <h2 className="text-lg font-bold text-slate-900">
          Election Performance
        </h2>
        <p className="mt-0.5 text-xs text-slate-500">
          Year-wise Lok Sabha election performance of the party.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  Year
                </div>
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Legislature
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Leader
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center justify-center gap-1.5">
                  <Users size={14} />
                  Contested
                </div>
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center justify-center gap-1.5">
                  <Trophy size={14} />
                  Won
                </div>
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center justify-center gap-1.5">
                  <Percent size={14} />
                  Vote %
                </div>
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center justify-center gap-1.5">
                  <Target size={14} />
                  Strike
                </div>
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div className="flex items-center justify-center gap-1.5">
                  <Flag size={14} />
                  Outcome
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr
                key={row.year}
                className="transition-colors hover:bg-slate-50/80"
              >
                <td className="px-4 py-3 font-semibold text-slate-900">
                  {row.year}
                </td>

                <td className="px-4 py-3 text-slate-600">
                  {row.legislature}
                </td>

                <td className="px-4 py-3 text-slate-700">
                  {row.leader}
                </td>

                <td className="px-4 py-3 text-center text-slate-600">
                  {row.contested}
                </td>

                <td className="px-4 py-3 text-center font-semibold text-slate-900">
                  {row.won}
                </td>

                <td className="px-4 py-3 text-center text-slate-600">
                  {row.total_seats}
                </td>

                <td className="px-4 py-3 text-center text-slate-700">
                  {row.vote_share.toFixed(2)}%
                </td>

                <td className="px-4 py-3 text-center text-slate-700">
                  {row.strike_rate.toFixed(1)}%
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      row.outcome === "Government"
                        ? "bg-green-100 text-green-700"
                        : row.outcome === "Opposition"
                        ? "bg-slate-100 text-slate-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {row.outcome}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}