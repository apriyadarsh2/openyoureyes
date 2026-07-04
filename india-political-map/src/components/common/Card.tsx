import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        p-6
        transition
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}