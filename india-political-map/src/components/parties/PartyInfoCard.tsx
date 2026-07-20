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
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        {title}
      </h2>

      {children}

    </div>
  );
}