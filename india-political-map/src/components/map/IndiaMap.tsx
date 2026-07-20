"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
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
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [82, 22],
    zoom: 1,
  });

  const getStateColor = (stateName: string): string => {
    const info = yearData.states[stateName];
    if (!info || info.party === "UNKNOWN") return "#E0E0E0";
    return PARTY_COLORS[info.party] || PARTY_COLORS.UNKNOWN;
  };

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
    <div
      className="relative w-full rounded-xl overflow-hidden shadow"
      style={{ background: "#dce8f5" }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1050, center: [82, 22] }}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={({ zoom, coordinates }: { zoom: number; coordinates: [number, number] }) =>
            setPosition({ zoom, coordinates })
          }
        >
          <Geographies geography="/india.geojson">
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => {
                const stateName: string = geo.properties.st_nm;
                const info = yearData.states[stateName];
                const party = info?.party || "UNKNOWN";
                const isSelected = selectedState === stateName;
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
                    strokeWidth={isSelected ? 1.5 : 0.3}
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
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom controls */}
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <button
          onClick={() =>
            setPosition((p) => ({ ...p, zoom: Math.min(p.zoom * 1.5, 8) }))
          }
          className="w-8 h-8 bg-white rounded shadow text-gray-700 font-bold text-lg hover:bg-gray-50 flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() =>
            setPosition((p) => ({ ...p, zoom: Math.max(p.zoom / 1.5, 1) }))
          }
          className="w-8 h-8 bg-white rounded shadow text-gray-700 font-bold text-lg hover:bg-gray-50 flex items-center justify-center"
        >
          −
        </button>
        <button
          onClick={() => setPosition({ coordinates: [82, 22], zoom: 1 })}
          className="w-8 h-8 bg-white rounded shadow text-gray-500 text-xs hover:bg-gray-50 flex items-center justify-center"
          title="Reset zoom"
        >
          ⊙
        </button>
      </div>

      <Tooltip
        id="state-tooltip"
        style={{ fontSize: 13, maxWidth: 300, zIndex: 50 }}
      />
    </div>
  );
}
