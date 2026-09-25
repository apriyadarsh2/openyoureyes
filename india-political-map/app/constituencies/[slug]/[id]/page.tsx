import ConstituencyProfilePage from "@/src/components/constituencies/profile/ConstituencyProfilePage";

interface Props {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const constituencyId = Number(id);

  if (Number.isNaN(constituencyId)) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-semibold text-politic-text">
          Invalid constituency ID.
        </h2>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ConstituencyProfilePage id={constituencyId} />
    </main>
  );
}