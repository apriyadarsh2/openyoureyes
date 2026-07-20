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
  const movable =
    disclosure.assets.movable_assets.gross_total_movable.total;

  const immovable =
    disclosure.assets.immovable_assets.gross_total_immovable.total;

  const liabilities =
    disclosure.liabilities.financial_liabilities
      .grand_total_private_liabilities.total;

  const netWorth =
    movable + immovable - liabilities;

  const cards = [
    {
      title: "Net Worth",
      value: netWorth,
      icon: CircleDollarSign,
    },
    {
      title: "Movable Assets",
      value: movable,
      icon: Wallet,
    },
    {
      title: "Immovable Assets",
      value: immovable,
      icon: Building2,
    },
    {
      title: "Liabilities",
      value: liabilities,
      icon: Landmark,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">
                {card.title}
              </h3>

              <Icon
                className="text-blue-600"
                size={22}
              />
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">
              ₹ {formatCurrency(card.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
}