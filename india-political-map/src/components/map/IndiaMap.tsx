"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { PARTY_COLORS, PARTY_FULL_NAMES } from "@/data/partyColors";

interface Props {
  yearData: {
    states: Record<string, { party: string; cm: string }>;
  };
  selectedState: string | null;
  onStateSelect: (state: string | null) => void;
}

export default function IndiaMap({ yearData, selectedState, onStateSelect }: Props) {
  
  const getTooltipContent = (stateName: string): string => {
    const info = yearData.states[stateName];
    if (!info) return stateName;
    const partyName = PARTY_FULL_NAMES[info.party] || info.party;
    const cmPart =
      info.cm && info.cm !== "State not yet formed"
        ? ` | CM: ${info.cm}`
        : info.cm === "State not yet formed"
        ? " | Not yet a state"
        : "";
    return `${stateName} — ${partyName}${cmPart}`;
  };

  return (
    // LOGIC: bg color aur shadow hata diya. Width badha di taaki map bada dikhe par screen ke bahar na jaye.
    <div className="relative w-full max-w-[700px] mx-auto flex items-center justify-center">
      <ComposableMap
        projection="geoMercator"
        // LOGIC: Canvas ko square (800x800) kar diya taaki Gujarat aur North-East cut na ho.
        width={800}  
        height={800} 
        projectionConfig={{
          scale: 1100, // LOGIC: 800x800 ke dabbe ke hisaab se perfect scale.
          center: [82.5, 20.5], // LOGIC: Exact India ka center point.
        }}
        style={{
          width: "100%", // Box ke hisaab se auto-adjust hoga
          height: "auto",
          outline: "none",
        }}
      >
        <Geographies geography="/india.geojson">
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => {
              const stateName: string = geo.properties.st_nm;
              const info = yearData.states[stateName];
              const party = info?.party || "UNKNOWN";
              const isSelected = selectedState === stateName;
              
              // LOGIC: Agar party data nahi hai ya state selected nahi hai, toh default color.
              const fill =
                party === "UNKNOWN"
                  ? "#E0E0E0"
                  : PARTY_COLORS[party] || PARTY_COLORS.UNKNOWN;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={isSelected ? "#111" : "#FFFFFF"}
                  strokeWidth={isSelected ? 1.5 : 0.5}
                  style={{
                    default: {
                      outline: "none",
                      transition: "fill 0.35s ease",
                    },
                    hover: {
                      outline: "none",
                      filter: "brightness(1.18)",
                      cursor: "pointer",
                    },
                    pressed: { outline: "none" },
                  }}
                  data-tooltip-id="state-tooltip"
                  data-tooltip-content={getTooltipContent(stateName)}
                  onClick={() =>
                    onStateSelect(selectedState === stateName ? null : stateName)
                  }
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <Tooltip
        id="state-tooltip"
        style={{ fontSize: 13, maxWidth: 300, zIndex: 50 }}
      />
    </div>
  );
}