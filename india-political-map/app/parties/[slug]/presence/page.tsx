import PartyPresence from "@/src/components/parties/presence/PartyPresence";

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

      <PartyPresence
        slug={slug}
      />

    </main>
  );
}