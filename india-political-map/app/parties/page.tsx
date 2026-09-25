import PartiesHome from "@/src/components/parties/PartiesHome";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Page({
  searchParams,
}: Props) {
  const { search = "" } = await searchParams;

  return <PartiesHome search={search} />;
}