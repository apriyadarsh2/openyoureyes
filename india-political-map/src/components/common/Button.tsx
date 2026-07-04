import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-xl
        bg-blue-600
        px-5
        py-3
        text-white
        font-medium
        transition
        hover:bg-blue-700
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}