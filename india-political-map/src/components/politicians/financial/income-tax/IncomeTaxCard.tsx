import { IncomeTaxEntity } from "@/src/components/types/financial-disclosure";
import IncomeTaxHistoryTable from "./IncomeTaxHistoryTable";

interface Props {
  title: string;
  entity?: IncomeTaxEntity;
}

export default function IncomeTaxCard({ title, entity }: Props) {
  if (!entity) {
    return (
      <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-politic-border bg-politic-card p-6 shadow-sm">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-politic-muted">
          {title}
        </h3>
        <p className="text-xs italic text-politic-muted">
          No Income Tax info available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-politic-border bg-politic-card shadow-sm transition-colors hover:border-politic-muted/30">
      <div className="flex items-center justify-between border-b border-politic-border bg-politic-inner p-4 sm:px-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-politic-text">
          {title}
        </h3>
        <span className="rounded-lg border border-politic-border bg-politic-card px-2 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-politic-accent">
          PAN: {entity.pan ?? "N/A"}
        </span>
      </div>

      <div className="p-4 sm:p-5 flex-1">
        <IncomeTaxHistoryTable history={entity.history} />
      </div>
    </div>
  );
}