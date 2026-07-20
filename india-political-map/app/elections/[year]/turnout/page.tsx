import TurnoutPage from "@/src/components/elections/alliances/turnout/TurnoutPage";

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
      <TurnoutPage
        year={Number(year)}
      />
    </main>
  );
}