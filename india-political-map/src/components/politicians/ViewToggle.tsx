interface Props {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

export default function ViewToggle({
  view,
  setView,
}: Props) {
  return (
    <div className="flex gap-2">

      <button
        onClick={() => setView("grid")}
        className={`rounded-lg px-4 py-2 ${
          view === "grid"
            ? "bg-blue-600 text-white"
            : "border"
        }`}
      >
        Grid
      </button>

      <button
        onClick={() => setView("list")}
        className={`rounded-lg px-4 py-2 ${
          view === "list"
            ? "bg-blue-600 text-white"
            : "border"
        }`}
      >
        List
      </button>

    </div>
  );
}