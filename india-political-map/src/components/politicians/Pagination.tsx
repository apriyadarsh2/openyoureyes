interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  setPage,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-3">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      <span className="font-medium">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}