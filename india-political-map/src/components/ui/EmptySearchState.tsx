import { SearchX } from "lucide-react";

interface Props {
  search: string;
}

export default function EmptySearchState({
  search,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-8
        py-20
        text-center
      "
    >
      <SearchX
        size={52}
        className="mx-auto text-slate-400"
      />

      <h2 className="mt-6 text-2xl font-bold">
        No State Found
      </h2>

      <p className="mt-3 text-slate-500">
       We couldn't find any matches
        <span className="font-semibold">
          {" "}
          "{search}"
        </span>.
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Try another spelling or clear the search.
      </p>
    </div>
  );
}