interface SortOption {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: SortOption[];
}

export default function SortDropdown({
  value,
  onChange,
  options,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-[#2d3654] bg-[#14192b] px-3 py-1.5 text-sm text-[#F2F1EC] outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-[#14192b] text-[#F2F1EC]"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}