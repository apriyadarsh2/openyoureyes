"use client";

import { useState } from "react";
import { ExpandableEntityAmount } from "@/src/components/types/financial-disclosure";
import DetailList from "../common/DetailList";

// Hydration and decimal format helper
const formatNumber = (val: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(val);
};

interface Props {
  title: string;
  data: ExpandableEntityAmount;
}

export default function ImmovableAssetRow({
  title,
  data,
}: Props) {
  const [open, setOpen] = useState(false);
  const v = data.values;

  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        className="group cursor-pointer transition-colors hover:bg-white/5"
      >
        {/* STICKY COLUMN */}
        <td className="sticky left-0 z-10 bg-politic-card px-3 py-3 font-medium whitespace-nowrap text-politic-text shadow-[1px_0_0_0_#ffffff1a] transition-colors group-hover:bg-[#1a2233] flex items-center gap-2">
          <span className={`text-[10px] ${open ? 'text-politic-accent' : 'text-politic-muted'}`}>
            {open ? '▼' : '▶'}
          </span>
          {title}
        </td>

        {/* RIGHT ALIGNED, TABULAR NUMBERS WITH HYDRATION FIX */}
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.self)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.spouse)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.huf)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.dependent1)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.dependent2)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm tabular-nums tracking-tight text-politic-muted">{formatNumber(v.dependent3)}</td>
        <td className="px-3 py-3 text-right text-xs sm:text-sm font-bold tabular-nums tracking-tight text-politic-text">{formatNumber(v.total)}</td>
      </tr>

      {open && (
        <tr>
          {/* COMPACT DARK THEMED DROPDOWN */}
          <td colSpan={8} className="bg-politic-base p-3 sm:p-4 border-b border-politic-border shadow-inner">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
              
              <div className="rounded-xl border border-politic-border bg-politic-card p-3 shadow-sm">
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-politic-muted border-b border-politic-border pb-1.5">
                  Self
                </h4>
                <DetailList items={data.details.self} />
              </div>

              <div className="rounded-xl border border-politic-border bg-politic-card p-3 shadow-sm">
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-politic-muted border-b border-politic-border pb-1.5">
                  Spouse
                </h4>
                <DetailList items={data.details.spouse} />
              </div>

              <div className="rounded-xl border border-politic-border bg-politic-card p-3 shadow-sm">
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-politic-muted border-b border-politic-border pb-1.5">
                  HUF
                </h4>
                <DetailList items={data.details.huf} />
              </div>

            </div>
          </td>
        </tr>
      )}
    </>
  );
}