import { AssemblyConstituency } from "../../types/constituency";

interface Props {
  assembly: AssemblyConstituency[];
}

export default function AssemblyConstituencies({
  assembly,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Assembly Constituencies
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {assembly.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="font-medium">
              {item.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}