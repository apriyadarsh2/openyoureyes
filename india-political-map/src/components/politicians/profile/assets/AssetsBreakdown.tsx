import {
  Building2,
  Wallet,
  Landmark,
  Banknote,
} from "lucide-react";

import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";

interface Props {
  disclosure?: FinancialDisclosure;
}

export default function AssetsBreakdown({ disclosure }: Props) {
  if (!disclosure) return null;

  // 1. Extract values safely
  const movable =
    disclosure.assets?.movable_assets?.gross_total_movable?.total || 0;
  const immovable =
    disclosure.assets?.immovable_assets?.gross_total_immovable?.total || 0;
  
  const total = movable + immovable;

  const cash =
    disclosure.assets?.movable_assets?.cash_in_hand?.values?.total || 0;

  const privateLiabilities =
    disclosure.liabilities?.financial_liabilities?.grand_total_private_liabilities?.total || 0;
  const govtDues =
    disclosure.liabilities?.government_dues?.grand_total_govt_dues?.total || 0;
  
  const liabilities = privateLiabilities + govtDues;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-politic-text">
          Assets Breakdown
        </h2>
        <p className="mt-1 text-xs sm:text-sm font-medium text-politic-muted">
          Latest declared financial disclosure.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <AssetCard
          title="Movable Assets"
          icon={<Wallet size={20} />}
          value={movable}
          total={total}
          color="blue"
        />
        <AssetCard
          title="Immovable Assets"
          icon={<Building2 size={20} />}
          value={immovable}
          total={total}
          color="green"
        />
        <AssetCard
          title="Cash in Hand"
          icon={<Banknote size={20} />}
          value={cash}
          total={total}
          color="amber"
        />
        <AssetCard
          title="Liabilities vs Assets"
          icon={<Landmark size={20} />}
          value={liabilities}
          total={total}
          color="red"
        />
      </div>
    </div>
  );
}

// --- Card Component ---

interface CardProps {
  title: string;
  value: number;
  total: number;
  icon: React.ReactNode;
  color: "blue" | "green" | "amber" | "red";
}

function AssetCard({ title, value, total, icon, color }: CardProps) {
  // Calculate percentage (guard against division by zero)
  const percent = total > 0 ? (value / total) * 100 : 0;

  const colors = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", bar: "bg-blue-500" },
    green: { bg: "bg-green-500/10", text: "text-green-400", bar: "bg-green-500" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", bar: "bg-amber-500" },
    red: { bg: "bg-red-500/10", text: "text-red-400", bar: "bg-red-500" },
  };

  // Helper to dynamically format large currency values
  const formatValue = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lac`;
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className={`rounded-xl p-3 ${colors[color].bg} ${colors[color].text}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-politic-muted">
            {title}
          </h3>
          <p className="mt-0.5 text-lg sm:text-xl font-black text-politic-text">
            {formatValue(value)}
          </p>
        </div>
      </div>

      <div className="mt-5 sm:mt-6">
        <div className="mb-2 flex justify-between text-xs sm:text-sm">
          <span className="font-medium text-politic-muted">Share of Total Assets</span>
          <span className="font-bold text-politic-text">
            {percent.toFixed(1)}%
          </span>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-politic-inner">
          <div
            className={`${colors[color].bar} h-full rounded-full transition-all duration-700`}
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}