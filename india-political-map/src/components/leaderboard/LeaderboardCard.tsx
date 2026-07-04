import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  children: React.ReactNode;
}

export default function LeaderboardCard({
  title,
  icon,
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}