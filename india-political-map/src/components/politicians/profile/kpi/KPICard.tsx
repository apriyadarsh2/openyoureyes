import { ReactNode } from "react";

interface KPICardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
}

export default function KPICard({
  icon,
  label,
  value,
  subtitle,
}: KPICardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

      </div>

    </div>
  );
}