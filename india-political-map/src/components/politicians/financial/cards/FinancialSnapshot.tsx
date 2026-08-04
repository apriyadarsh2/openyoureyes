import { FinancialDisclosure } from "@/src/components/types/financial-disclosure";
import {
  Landmark,
  Wallet,
  Building2,
  CircleDollarSign,
} from "lucide-react";

interface Props {
  disclosure: FinancialDisclosure;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact", 
    maximumFractionDigits: 2,
  }).format(value);
}

export default function FinancialSnapshot({
  disclosure,
}: Props) {
  const movable = disclosure.assets.movable_assets.gross_total_movable.total;
  const immovable = disclosure.assets.immovable_assets.gross_total_immovable.total;
  const liabilities = disclosure.liabilities.financial_liabilities.grand_total_private_liabilities.total;
  const netWorth = movable + immovable - liabilities;

  const cards = [
    {
      title: "Net Worth",
      value: netWorth,
      icon: CircleDollarSign,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Movable Assets",
      value: movable,
      icon: Wallet,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Immovable Assets",
      value: immovable,
      icon: Building2,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Liabilities",
      value: liabilities,
      icon: Landmark,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-politic-border bg-politic-card p-4 sm:p-6 shadow-sm transition-all hover:border-politic-muted/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-politic-muted">
                {card.title}
              </h3>
              <div className={`p-2 rounded-lg ${card.bg}`}>
                <Icon className={card.color} size={20} />
              </div>
            </div>

            <p className="mt-4 text-xl sm:text-3xl font-black text-politic-text">
              ₹{formatCurrency(card.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
}