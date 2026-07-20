import MarginPage from "@/src/components/elections/alliances/margins/MarginPage";

interface Props {
  params: Promise<{
    year: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { year } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <MarginPage
        year={Number(year)}
      />
    </main>
  );
}