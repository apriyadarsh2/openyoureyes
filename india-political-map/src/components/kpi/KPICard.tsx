import { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  subtitle?: string;
  color?: string;
}

export default function KPICard({
  title,
  value,
  icon,
  subtitle,
  color = "bg-blue-600",
}: KPICardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div
        className={`absolute top-0 left-0 h-1 w-full ${color}`}
      />

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            ${color}
            text-white
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}