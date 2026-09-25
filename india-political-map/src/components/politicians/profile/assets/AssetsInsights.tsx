"use client";

import {
  TrendingDown,
  Landmark,
  Wallet,
  Lightbulb,
  ArrowUpRight,
  PieChart,
} from "lucide-react";

import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";

interface Props {
  disclosure?: FinancialDisclosure; 
}

export default function AssetsInsights({ disclosure }: Props) {
  if (!disclosure) return null;

  // 1. Extract values safely
  const movable = disclosure.assets?.movable_assets?.gross_total_movable?.total || 0;
  const immovable = disclosure.assets?.immovable_assets?.gross_total_immovable?.total || 0;
  const cash = disclosure.assets?.movable_assets?.cash_in_hand?.values?.total || 0;
  
  const totalAssets = movable + immovable;

  const privateLiabilities = disclosure.liabilities?.financial_liabilities?.grand_total_private_liabilities?.total || 0;
  const govtDues = disclosure.liabilities?.government_dues?.grand_total_govt_dues?.total || 0;
  
  const totalLiabilities = privateLiabilities + govtDues;
  const netWorth = totalAssets - totalLiabilities;

  // 2. Calculate Insight Ratios safely
  const debtRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;
  const immovableShare = totalAssets > 0 ? (immovable / totalAssets) * 100 : 0;
  const movableShare = totalAssets > 0 ? (movable / totalAssets) * 100 : 0;
  const cashShare = totalAssets > 0 ? (cash / totalAssets) * 100 : 0;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-politic-text">
          Financial Insights
        </h2>
        <p className="mt-1 text-xs sm:text-sm font-medium text-politic-muted">
          Automatically generated from affidavit data.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <InsightCard
          icon={<Wallet size={20} />}
          color="green"
          title="Net Worth to Assets Ratio"
          value={`${totalAssets > 0 ? ((netWorth / totalAssets) * 100).toFixed(1) : 0}%`}
          description="Percentage of total assets actually owned free of debt."
        />
        <InsightCard
          icon={<Landmark size={20} />}
          color="red"
          title="Debt Ratio"
          value={`${debtRatio.toFixed(1)}%`}
          description="Liabilities as a percentage of total declared assets."
        />
        <InsightCard
          icon={<PieChart size={20} />}
          color="blue"
          title="Immovable Asset Weight"
          value={`${immovableShare.toFixed(1)}%`}
          description="Share of wealth tied up in land, properties, and real estate."
        />
        <InsightCard
          icon={<TrendingDown size={20} />}
          color="amber"
          title="Cash Liquidity"
          value={`${cashShare.toFixed(2)}%`}
          description="Share of cash in hand compared to total declared assets."
        />
      </div>

      <div className="rounded-2xl border border-politic-border bg-politic-card p-5 sm:p-8 shadow-sm">
        <div className="mb-5 sm:mb-6 flex items-center gap-3">
          <Lightbulb className="text-yellow-500" size={24} />
          <h3 className="text-lg sm:text-xl font-bold text-politic-text">
            Observations
          </h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <Observation text={`Immovable property (real estate/land) accounts for ${immovableShare.toFixed(1)}% of total declared assets.`} />
          <Observation text={`Movable assets (cash, deposits, vehicles, jewelry) represent ${movableShare.toFixed(1)}% of total wealth.`} />
          
          {totalLiabilities > 0 ? (
            <Observation text={`Current liabilities are ${debtRatio.toFixed(1)}% of total assets, indicating ${debtRatio < 10 ? "relatively low leverage." : debtRatio < 50 ? "moderate leverage." : "significant leverage."}`} />
          ) : (
            <Observation text={`The candidate has declared zero financial liabilities or government dues.`} />
          )}

          {cashShare > 10 && (
            <Observation text={`Cash holdings account for an unusually high ${cashShare.toFixed(1)}% of total declared assets.`} />
          )}
          {cashShare <= 10 && (
             <Observation text={`Cash holdings account for a standard ${cashShare.toFixed(2)}% of total declared assets.`} />
          )}
        </div>
      </div>
    </div>
  );
}

// --- Internal Components ---

interface CardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "red" | "amber";
}

function InsightCard({ title, value, description, icon, color }: CardProps) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-green-500/10 text-green-400",
    red: "bg-red-500/10 text-red-400",
    amber: "bg-amber-500/10 text-amber-400",
  };

  return (
    <div className="flex flex-col rounded-2xl border border-politic-border bg-politic-card p-4 sm:p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className={`inline-flex shrink-0 rounded-xl p-3 ${colors[color]}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-politic-muted">
            {title}
          </h3>
          <p className="mt-1 text-xl sm:text-2xl font-black text-politic-text">
            {value}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs sm:text-sm font-medium text-politic-muted">
        {description}
      </p>
    </div>
  );
}

function Observation({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-politic-inner p-3 sm:p-4 border border-politic-border/50">
      <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-politic-accent" />
      <p className="text-xs sm:text-sm font-medium text-politic-muted">
        {text}
      </p>
    </div>
  );
}