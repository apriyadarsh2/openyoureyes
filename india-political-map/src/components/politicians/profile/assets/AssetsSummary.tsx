import {
  TrendingUp,
  Wallet,
  Landmark,
  PiggyBank,
} from "lucide-react";

import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";

interface Props {
  disclosure?: FinancialDisclosure;
}

export default function AssetsSummary({ disclosure }: Props) {
  if (!disclosure) return null;

  // 1. Safely extract values from the nested disclosure object
  const movableAssets =
    disclosure.assets?.movable_assets?.gross_total_movable?.total || 0;
  const immovableAssets =
    disclosure.assets?.immovable_assets?.gross_total_immovable?.total || 0;
  
  const totalAssets = movableAssets + immovableAssets;

  const privateLiabilities =
    disclosure.liabilities?.financial_liabilities?.grand_total_private_liabilities?.total || 0;
  const govtDues =
    disclosure.liabilities?.government_dues?.grand_total_govt_dues?.total || 0;
  
  const totalLiabilities = privateLiabilities + govtDues;

  const netWorth = totalAssets - totalLiabilities;

  // 2. Helper to format INR currency nicely (Cr, Lac, or raw)
  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    const sign = value < 0 ? "-" : "";

    if (absValue >= 10000000) {
      return `${sign}₹${(absValue / 10000000).toFixed(2)} Cr`;
    } else if (absValue >= 100000) {
      return `${sign}₹${(absValue / 100000).toFixed(2)} Lac`;
    }
    return `${sign}₹${absValue.toLocaleString("en-IN")}`;
  };

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-2 xl:grid-cols-4">
      <Card
        title="Total Assets"
        value={formatCurrency(totalAssets)}
        icon={<Wallet size={22} />}
        color="blue"
      />

      <Card
        title="Net Worth"
        value={formatCurrency(netWorth)}
        icon={<PiggyBank size={22} />}
        color="amber"
      />

      <Card
        title="Total Liabilities"
        value={formatCurrency(totalLiabilities)}
        icon={<Landmark size={22} />}
        color="red"
      />

      <Card
        title="Movable Assets"
        value={formatCurrency(movableAssets)}
        icon={<TrendingUp size={22} />}
        color="green"
      />
    </div>
  );
}

// --- Card Component ---

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "red" | "amber";
}

function Card({ title, value, icon, color }: CardProps) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-green-500/10 text-green-400",
    red: "bg-red-500/10 text-red-400",
    amber: "bg-amber-500/10 text-amber-400",
  };

  return (
    <div className="rounded-2xl border border-politic-border bg-politic-card p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-politic-muted/50 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted">
          {title}
        </h3>
        <div className={`inline-flex rounded-lg p-2 ${colors[color]}`}>
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xl sm:text-3xl font-black text-politic-text">
        {value}
      </p>
    </div>
  );
}