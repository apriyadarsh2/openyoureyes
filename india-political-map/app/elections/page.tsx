import ElectionBrowser from "@/src/components/elections/ElectionBrowser";

export default async function ElectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ElectionBrowser />
    </main>
  );
}