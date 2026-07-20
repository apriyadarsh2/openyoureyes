import ConstituencyProfilePage from "@/src/components/constituencies/profile/ConstituencyProfilePage";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {

  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <ConstituencyProfilePage
        id={Number(id)}
      />

    </main>
  );
}