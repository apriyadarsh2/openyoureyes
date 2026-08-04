import { DetailItem } from "@/src/components/types/financial-disclosure";

interface Props {
  items: DetailItem[];
}

export default function DetailList({
  items,
}: Props) {

  if (!items || items.length === 0) {
    return (
      <p className="py-2 text-center text-xs italic text-politic-muted">
        No details available.
      </p>
    );
  }

  return (
    <div className="space-y-2">

      {items.map((item, index) => (

        <div
          key={index}
          className="flex items-center justify-between gap-3 rounded-lg border border-politic-border bg-politic-inner px-3 py-2 transition-colors hover:border-politic-muted/30"
        >

          <span 
            className="truncate text-[10px] text-politic-muted sm:text-xs" 
            title={item.description}
          >
            {item.description || "N/A"}
          </span>

          <span className="shrink-0 font-bold tabular-nums tracking-tight text-politic-text text-xs sm:text-sm">
            ₹ {item.amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </span>

        </div>

      ))}

    </div>
  );
}