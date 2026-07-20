// // "use client"

// // import Container from "@/src/components/common/Container";

// // import IndiaMap from "../IndiaMap";
// // import InfoPanel from "../InfoPanel";
// // import MapLegend from "./MapLegend";

// // interface Props {
// //   year: number;
// //   data: any; 
// // }


// // export default function HomepageMap({
// //   data,
// // }: Props) {
// //   return (
// //     <section className="bg-white py-24">

// //       <Container>

// //         <div className="mb-12">

// //           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
// //             Political Landscape
// //           </span>

// //           <h2 className="mt-5 text-4xl font-bold">
// //             Explore Election Trends Across India
// //           </h2>

// //           <p className="mt-4 max-w-3xl text-slate-500">
// //             Hover over states to inspect election insights,
// //             political parties and winning candidates for the
// //             selected election year.
// //           </p>

// //         </div>

// //         <div className="grid gap-8 lg:grid-cols-4">

// //           <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:col-span-3">

// //             <IndiaMap yearData={data} />

// //           </div>

// //           <InfoPanel data={data} />

// //         </div>

// //         <MapLegend />

// //       </Container>

// //     </section>
// //   );
// // }




// "use client";

// import { useState, useEffect } from "react";
// import Container from "@/src/components/common/Container";

// import IndiaMap from "../IndiaMap";
// import InfoPanel from "../InfoPanel";
// import MapLegend from "./MapLegend";

// interface Props {
//   year: number;
//   data: any; 
// }

// export default function HomepageMap({ year, data }: Props) {
//   // Track the user's selected state
//   const [selectedState, setSelectedState] = useState<string | null>(null);

//   // Automatically deselect state when user scrolls to a different year
//   useEffect(() => {
//     setSelectedState(null);
//   }, [year]);

//   return (
//     <section className="bg-white py-24">
//       <Container>
//         <div className="mb-12">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
//             Political Landscape
//           </span>

//           <h2 className="mt-5 text-4xl font-bold">
//             Explore Election Trends Across India ({year})
//           </h2>

//           <p className="mt-4 max-w-3xl text-slate-500">
//             Click on individual states on the map to inspect ruling party details, 
//             alliances, and coalition results for the selected year.
//           </p>
//         </div>

//         {/* ... inside your grid container block inside HomepageMap.tsx ... */}
// <div className="grid gap-8 lg:grid-cols-4">
//   <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:col-span-3 flex items-center justify-center">
//     <IndiaMap 
//       yearData={data} 
//       selectedState={selectedState} 
//       onSelectState={setSelectedState} 
//     />
//   </div>

//   <InfoPanel data={data} selectedState={selectedState} />
// </div>

// {/* Pass down the year data to compile structural legend indicators dynamically */}
// <MapLegend yearData={data} />
//       </Container>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import IndiaMap from "../map/IndiaMap";
import TimelineSlider from "../map/TimelineSlider";
import InfoPanel from "../map/InfoPanel";
import PartyLegend from "../map/PartyLegend";
import { getDataForYear } from "../../hooks/usePoliticalData";

export default function Home() {
  const [year, setYear] = useState(2024);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const data = getDataForYear(year);

  return (
    <main className="min-h-screen bg-gray-100 p-3 md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
        <div className="mb-3">
          <h1 className="text-2xl font-black text-gray-800">
            India Political Timeline
          </h1>
          <p className="text-sm text-gray-500">
            Explore how political power has shifted across India from 1947 to
            2026. Click any state to view details.
          </p>
        </div>

        {/* Timeline Slider */}
        <TimelineSlider year={year} setYear={setYear} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Map - takes most space */}
          <div className="lg:col-span-7">
            <IndiaMap
              yearData={data}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-3">
            <InfoPanel data={data} selectedState={selectedState} />
          </div>

          {/* Party Legend */}
          <div className="lg:col-span-2">
            <PartyLegend yearData={data} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-400">
          Data is approximate and based on historical records. State boundaries
          reflect modern administrative units.
        </div>
      </div>
    </main>
  );
}
