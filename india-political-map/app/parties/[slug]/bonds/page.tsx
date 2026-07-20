import PartyBonds from "@/src/components/parties/bonds/PartyBonds";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: Props) {

  const { slug } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <PartyBonds
        slug={slug}
      />

    </main>
  );
}