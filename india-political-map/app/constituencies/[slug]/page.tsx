import StateConstituenciesBrowser from "@/src/components/constituencies/StateConstituenciesBrowser";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StatePage({
  params,
}: Props) {
  const { slug } = await params;
  

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <StateConstituenciesBrowser slug={slug} />
    </main>
  );
}

