"use client";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PartyInfoCard({
  title,
  children,
}: Props) {
  return (
    <section
      className="
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--card)]
        p-5 sm:p-6
      "
    >
      <h2 className="mb-5 text-lg font-bold text-[var(--foreground)] sm:text-xl">
        {title}
      </h2>

      {children}
    </section>
  );
}