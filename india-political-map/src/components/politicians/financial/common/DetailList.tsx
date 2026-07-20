import { DetailItem } from "@/src/components/types/financial-disclosure";

interface Props {
  items: DetailItem[];
}

export default function DetailList({
  items,
}: Props) {

  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-400">
        No details available.
      </p>
    );
  }

  return (
    <div className="space-y-2">

      {items.map((item, index) => (

        <div
          key={index}
          className="flex justify-between rounded-lg border bg-slate-50 p-3"
        >

          <span className="text-sm">
            {item.description}
          </span>

          <span className="font-semibold">
            ₹ {item.amount.toLocaleString("en-IN")}
          </span>

        </div>

      ))}

    </div>
  );
}