interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-slate-300 px-4 py-3"
    >
      <option value="name">Sort by Name</option>
      <option value="assets">Highest Assets</option>
      <option value="cases">Most Criminal Cases</option>
    </select>
  );
}