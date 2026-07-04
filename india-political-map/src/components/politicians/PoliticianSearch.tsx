interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PoliticianSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
      placeholder="Search politician..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}