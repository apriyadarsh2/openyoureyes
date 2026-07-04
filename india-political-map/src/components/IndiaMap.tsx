"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { PARTY_COLORS } from "@/data/partyColors";

interface Props {
  yearData: any;
}

export default function IndiaMap({ yearData }: Props) {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 1000,
        center: [82, 22],
      }}
    >
      <Geographies geography="/india.geojson">
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo) => {
            const stateName = geo.properties.st_nm;

            const party =
              yearData.states[stateName] || "UNKNOWN";

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  PARTY_COLORS[party] ||
                  PARTY_COLORS.UNKNOWN
                }
                stroke="#FFFFFF"
                strokeWidth={0.2}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}