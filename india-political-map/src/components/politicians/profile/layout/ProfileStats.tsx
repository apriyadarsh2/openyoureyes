import StatCard from "./StatCard";

interface Props {
  assets: number;
  criminalCases: number;
  wins: number;
  elections: number;
}

export default function ProfileStats({
  assets,
  criminalCases,
  wins,
  elections,
}: Props) {
  return (
    <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Net Assets"
        value={`₹${assets.toLocaleString("en-IN")}`}
      />

      <StatCard
        title="Criminal Cases"
        value={criminalCases}
      />

      <StatCard
        title="Elections Won"
        value={wins}
      />

      <StatCard
        title="Elections Contested"
        value={elections}
      />
    </section>
  );
}