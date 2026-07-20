"use client";

import { PARTY_COLORS, PARTY_FULL_NAMES } from "@/data/partyColors";

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  unit: string;
  color?: string;
}

function StatBar({ label, value, max, unit, color }: StatBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
        <span>{label}</span>
        <span className="font-semibold text-gray-700">
          {typeof value === "number" ? value.toFixed(1) : value}
          {unit}
        </span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color || "#FF6D00" }}
        />
      </div>
    </div>
  );
}

interface Props {
  data: {
    national: {
      pm: string;
      party: string;
      loksabha: string;
      majorEvents: string[];
      gdpGrowth?: number;
      population?: number;
    };
    states: Record<string, { party: string; cm: string }>;
    stateStats: Record<
      string,
      {
        literacyRate: number;
        crimeRate: number;
        gdpPerCapita: number;
        educationIndex: number;
        healthIndex: number;
        population: number;
        infantMortality: number;
        urbanization: number;
      }
    >;
  };
  selectedState: string | null;
}

export default function InfoPanel({ data, selectedState }: Props) {
  const nat = data.national;
  const stateInfo = selectedState ? data.states[selectedState] : null;
  const stateStats = selectedState ? data.stateStats[selectedState] : null;

  return (
    <div className="space-y-4">
      {/* National Info */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
          National Government
        </div>
        <div className="text-lg font-bold text-gray-800">{nat.pm}</div>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span
            className="px-2 py-0.5 rounded text-white text-xs font-bold"
            style={{ background: PARTY_COLORS[nat.party] || "#999" }}
          >
            {nat.party}
          </span>
          <span className="text-xs text-gray-500">{nat.loksabha}</span>
        </div>

        {nat.gdpGrowth !== undefined && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-400">GDP Growth</span>
            <span
              className={`text-xs font-bold ${
                nat.gdpGrowth >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {nat.gdpGrowth > 0 ? "+" : ""}
              {nat.gdpGrowth}%
            </span>
            {nat.population && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-gray-400">
                  Pop ~{nat.population}M
                </span>
              </>
            )}
          </div>
        )}

        <div className="mt-3 space-y-1.5">
          {nat.majorEvents.slice(0, 4).map((e, i) => (
            <div key={i} className="text-xs text-gray-600 flex gap-1.5">
              <span className="text-orange-400 flex-shrink-0 mt-0.5">•</span>
              <span>{e}</span>
            </div>
          ))}
        </div>
      </div>

      {/* State Detail */}
      {selectedState && stateInfo ? (
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
            Selected State
          </div>
          <div className="text-lg font-bold text-gray-800">{selectedState}</div>

          {stateInfo.party === "UNKNOWN" ? (
            <div className="text-xs text-gray-400 mt-1 italic">
              This state did not exist at this time
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded text-white text-xs font-bold"
                  style={{
                    background: PARTY_COLORS[stateInfo.party] || "#999",
                  }}
                >
                  {stateInfo.party}
                </span>
                <span className="text-xs text-gray-500">
                  {PARTY_FULL_NAMES[stateInfo.party] || ""}
                </span>
              </div>
              {stateInfo.cm && stateInfo.cm !== "State not yet formed" && (
                <div className="text-xs text-gray-500 mt-1">
                  CM:{" "}
                  <span className="text-gray-700 font-medium">
                    {stateInfo.cm}
                  </span>
                </div>
              )}
            </>
          )}

          {stateStats && (
            <div className="mt-4">
              <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Statistics
              </div>
              <StatBar
                label="Literacy Rate"
                value={stateStats.literacyRate}
                max={100}
                unit="%"
                color="#1565C0"
              />
              <StatBar
                label="GDP per Capita"
                value={stateStats.gdpPerCapita}
                max={400}
                unit="k ₹"
                color="#2E7D32"
              />
              <StatBar
                label="Crime Rate"
                value={stateStats.crimeRate}
                max={700}
                unit="/lakh"
                color="#B71C1C"
              />
              <StatBar
                label="Urbanization"
                value={stateStats.urbanization}
                max={100}
                unit="%"
                color="#FF6D00"
              />
              <StatBar
                label="Health Index"
                value={stateStats.healthIndex * 100}
                max={100}
                unit=""
                color="#00838F"
              />
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-gray-400">Population</div>
                  <div className="font-bold text-gray-700">
                    {stateStats.population.toFixed(1)}M
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-gray-400">Infant Mortality</div>
                  <div className="font-bold text-gray-700">
                    {stateStats.infantMortality}/1000
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-400 text-center border-2 border-dashed border-gray-200">
          <div className="text-2xl mb-2">🗺️</div>
          <div>Click a state on the map</div>
          <div className="text-xs mt-1">to see party history and statistics</div>
        </div>
      )}
    </div>
  );
}
