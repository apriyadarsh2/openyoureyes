import { getPartyProfile } from "../../lib/repositories/parties";

import PartyHeader from "./PartyHeader";
import PartyOverview from "./PartyOverview";
import PartyNavigation from "./PartyNavigation";

interface Props {
  slug: string;
}

export default async function PartyProfile({
  slug,
}: Props) {
  const party = await getPartyProfile(slug);

  if (!party) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          px-6
          py-16
          text-center
        "
      >
        <h2 className="text-2xl font-semibold text-white">
          Party not found
        </h2>

        <p className="mt-2 text-sm text-[var(--muted)]">
          The requested political party could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-10">

      <PartyHeader party={party} />

      <PartyOverview party={party} />

      <PartyNavigation
        identifier={slug}
      />

    </div>
  );
}