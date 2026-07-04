interface AboutCardProps {
  title: string;
  value?: string;
}

export default function AboutCard({
  title,
  value,
}: AboutCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        {value && value.trim() !== "" ? value : "Not Available"}
      </p>
    </div>
  );
}