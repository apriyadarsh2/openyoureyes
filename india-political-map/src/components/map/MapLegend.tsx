const legends = [
  {
    color: "bg-blue-600",
    label: "BJP",
  },
  {
    color: "bg-green-600",
    label: "INC",
  },
  {
    color: "bg-orange-500",
    label: "Regional",
  },
  {
    color: "bg-gray-400",
    label: "Others",
  },
];

export default function MapLegend() {
  return (
    <div className="mt-8 flex flex-wrap gap-6">

      {legends.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2"
        >

          <span
            className={`h-4 w-4 rounded-full ${item.color}`}
          />

          <span className="text-sm text-slate-600">
            {item.label}
          </span>

        </div>
      ))}

    </div>
  );
}