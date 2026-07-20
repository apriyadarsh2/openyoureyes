interface Props {
  count?: number;
}

export default function CardSkeleton({
  count = 12,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

      {Array.from({
        length: count,
      }).map((_, index) => (

        <div
          key={index}
          className="animate-pulse rounded-2xl border bg-white p-6"
        >

          <div className="h-6 w-2/3 rounded bg-slate-200" />

          <div className="mt-5 h-4 w-1/2 rounded bg-slate-200" />

          <div className="mt-8 h-4 w-full rounded bg-slate-200" />

          <div className="mt-3 h-4 w-4/5 rounded bg-slate-200" />

        </div>

      ))}

    </div>
  );
}