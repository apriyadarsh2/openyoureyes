interface Props {
  party: string;
}

export default function PartyBadge({
  party,
}: Props) {
  return (
    <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
      {party}
    </span>
  );
}