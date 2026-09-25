"use client";

interface Props { 
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export default function HeroStat({ value, label, icon }: Props) {
  return (
    <div className="flex items-center gap-5 p-5 transition-colors hover:bg-politic-inner/50">
      {icon && (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
          {icon}
        </div>
      )}
      
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight text-politic-text">
          {value}
        </h2>
        <p className="mt-1 text-sm font-medium text-politic-muted">
          {label}
        </p>
      </div>
    </div>
  );
}