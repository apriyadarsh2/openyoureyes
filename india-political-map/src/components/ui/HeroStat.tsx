"use client";

interface Props {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export default function HeroStat({ value, label, icon }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-slate-50/50">
      {icon && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          {icon}
        </div>
      )}
      
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {value}
        </h2>
        <p className="text-sm font-medium text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
}