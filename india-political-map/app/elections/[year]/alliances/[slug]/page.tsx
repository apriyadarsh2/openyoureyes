import AllianceProfilePage from "@/src/components/elections/alliances/AllianceProfilePage";

interface Props {
  params: Promise<{
    year: string;
    slug: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { year, slug } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <AllianceProfilePage
        year={Number(year)}
        slug={slug}
      />
    </main>
  );
}